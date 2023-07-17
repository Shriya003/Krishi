const express = require("express");
const router = express.Router();
const admin_crop_list = require("../model/admin_crop_listingschema")
const admin_varietywithcropid_list = require("../model/admin_crop_varietyschema")
const admin_category_list = require('../model/admin_category_listSchema')
const message_list = require("../model/admin_message_schema")
const message_table = require("../model/admin_message_schema")
const userSchema = require("../model/userschema")



router.post('/uploadcrop', async (req, res) => {   // at adminpanel.jsx

    try {


        // console.log(req.body);
        const { category_Name, crop_Name, variety_Name } = req.body;

        if (!category_Name || !crop_Name || !variety_Name) {
            return res.status(402).send();

        }

        const category = await admin_category_list.findOne({ category_Name: category_Name })
        console.log(category);
     

        if (!category) {
            const savecategory = await admin_category_list({ category_Name }).save();
            console.log(savecategory);
            const categoryId = savecategory._id;
            const savecrop = await admin_crop_list({
                crop_Namee: crop_Name,
                category_id: categoryId
            }).save();
            const cropid = savecrop._id;

            const savevariety = await admin_varietywithcropid_list({
                category_ids: categoryId,
                crop_id: cropid,
                variety_Name: variety_Name
            }).save();

            // console.log("this is save vaiety");
            console.log(`this is save vareity at admin table ${savevariety}`);

            res.status(200).send()

        }
        else { // category hai

            const categoryId = category._id;
            // console.log("this is category");
            // console.log(category);
            console.log("this is category id");
            console.log(categoryId);

            const crop = await admin_crop_list.findOne({ crop_Namee: crop_Name });

            console.log(crop);

            if (!crop) {

                const addcrop = await admin_crop_list({
                    category_id: categoryId,
                    crop_Namee: crop_Name
                }).save();
          
                console.log(`this is ${addcrop}`);

                console.log(`this is crop id ${addcrop._id}`)

                const savevariety = await admin_varietywithcropid_list({
                    category_ids: categoryId,
                    crop_id: addcrop._id,
                    variety_Name: variety_Name

                }).save();

                console.log(`this is savevariety for new crop against existing category ${savevariety}`);

                res.status(200).send()

            }
            else { // categoty hai and crop bhi hai but variety nahi hai admin_variety_schema me

                const addvariety = await admin_varietywithcropid_list.findOne({
                    variety_Name: variety_Name
                })

                if (!addvariety) {

                    const addnewvariety = await admin_varietywithcropid_list({
                        category_ids: categoryId,
                        crop_id: crop._id,
                        variety_Name: variety_Name
                    }).save();
                    res.status(200).send();
                }
                else {
                    res.status(401).send();
                }


            }


        }
    }



    catch (error) {
        console.log(error);

    }
})

router.get('/fetch_crop_id', async (req, res) => {
    try {

        const crop_data = await admin_crop_list.find({}, { "crop_namee": 1 })
        // console.log(crop_data);
        // res.status(200).send(crop_data).json();
        res.status(200).send(crop_data);
        // console.log("hello");

    } catch (error) {
        console.log(error);

    }


})



router.get('/getvarietyname', async (req, res) => {
    const varietyname = await admin_varietywithcropid_list
})

router.post('/submitmsg', async (req, res) => {  //at contactus.jsx

    const { message, reason, userid } = req.body;

    const savemsg = await message_list({
        user_id: userid,
        reason: reason,
        message: message
    }).save();
    // console.log(savemsg);
    if (savemsg) {
        res.status(200).send();
    }

})



router.get('/showmsg', async (req, res) => {
    const msg = await message_list.find()
        .populate("user_id", ["name", "email", "imageuri"])
    console.log(msg);

    res.send(msg)
})


router.post('/deletesuggestion', async (req, res) => {
    const { _id } = req.body;

    const data = await message_list.deleteOne({ _id });
    if (data) {
        res.status(200).send();
    }

    // console.log(data);


})

router.get('/getuser', async (req, res) => {
    const totalUser = await userSchema.count();
    const totalBuyer = await userSchema.find({ usertype: "buyer" }).count();
    const totalSeller = await userSchema.find({ usertype: "seller" }).count();
    // console.log(`the total buyer is ${totalBuyer}`);
    // console.log(totalSeller)
    res.json({ totalUser, totalBuyer, totalSeller })
})


router.get('/fetchTotalUser', async (req, res) => {
    const data = await userSchema.find({}, { name: 1, email: 1, phoneno: 1, address: 1, usertype: 1, imageuri: 1,password:1 })
    // console.log(data);
    res.status(200).send(data)


})
router.post('/deleteUser', async (req, res) => {
    const { _id } = req.body;
    console.log(_id);
    const data = await userSchema.deleteOne({ _id })
    console.log(data);
})

router.post('/updateUserData', async (req, res) => {
    const { _id, name, email, address, phoneno } = req.body;
    console.log(name);

    const data = await userSchema.updateMany({ _id: _id }, {
        $set: {
            name: name

        }
    })

    if (data.acknowledged) {
        res.status(200).send();
    }

})

router.get('/fetchActiveSeller', async(req,res)=>{
    const data = await  userSchema.find({usertype:"seller"},{name:1,email:1,phoneno:1,address:1,password:1,imageuri:1,usertype:1})
    // console.log(data);
    res.status(200).send(data);
})

router.get('/fetchActiveBuyer', async(req,res)=>{
    const data = await  userSchema.find({usertype:"buyer"},{name:1,email:1,phoneno:1,address:1,password:1,imageuri:1,usertype:1})
    // console.log(data);
    res.status(200).send(data);
})



module.exports = router;

// module.exports = router;













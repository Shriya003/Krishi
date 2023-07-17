const mongoose = require("mongoose");

const upload_variety = new mongoose.Schema({ 

    category_ids:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category_list"
    }, 
    crop_id: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: "crop_list"
    },
   
    variety_Name: String

})

const uploadVariey = new mongoose.model("variety_list", upload_variety)

module.exports = uploadVariey
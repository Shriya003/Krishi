
import React, { useState } from 'react'
import { useEffect } from 'react';
// import router from '../../../server/router/auth';
import "../style/sell_crops.css"
import Navbar from '../components/Navbar';

function Sell_crops() {

  const [sell_data, set_sell_data] = useState({
    // crop_name: "", variety: "",
    price: "", quantity: ""
  });

  const [categoryList, setcategoryList] = useState([]);
  const [cropdata, setcropdata] = useState([]);
  const [variety_data, setvariety_data] = useState([]);

  const [categoryid, setcategoryid] = useState([]);
  const [cropid, setcropid] = useState([]);
  const [varietyid, setvarietyid] = useState([]);

  const [unit, setUnit] = useState([]);


  let nameee, valueee;
  const typevaluee = (event) => {
    // event.target will get that value and store in name/ value  variable
    nameee = event.target.name
    // console.log(event.target.name);
    valueee = event.target.value

    set_sell_data({ ...sell_data, [nameee]: valueee })


  }




  // // new coding start here 
  const selectcategory = async () => {

    const res = await fetch('/getcategory', {  // at sell auth
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      Credentials: "include"
    });
    const categoryList = await res.json();
    console.log(categoryList);
    setcategoryList(categoryList)
    // console.log(categoryList);
  }


  const selectcrop = async () => {
    const categoryname = document.getElementById('categorydata').value
    console.log(categoryname);
    console.log(`Category select by user:- ${categoryname} `);
    const result = categoryList.find(({ category_Name }) => category_Name === categoryname);

    // console.log(result);
    const categoryid = result._id;
    setcategoryid(categoryid)
    localStorage.setItem("category_id", result._id)


    const res = await fetch("/getcrop", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        categoryname, categoryid
      })
    });

    const cropdata = await res.json();

    console.log("this is crop data");
    console.log(cropdata);
    setcropdata(cropdata)

  }

  const selectvariety = async () => {

    const crop = document.getElementById("cropdata").value
    console.log(crop);
    const result = cropdata.find(({ cropName }) => cropName == crop)
    console.log("this is cropid of selected crop");
    console.log(result);
    const crop_id = result._id;

    setcropid(crop_id)
    localStorage.setItem("admin_crop_id", result._id);

    const varietyname = await fetch('/getvariety', { // at sellauth
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        crop_id, crop
      })
    });

    const data = await varietyname.json();
    console.log(data);
    setvariety_data(data)

  }

  const getvarietyid = async () => {
    const varietyname = document.getElementById('variety_data').value
    // console.log(variety_data);
    console.log(varietyname);

    const selcetedVariety = variety_data.find(({ varietyName }) => varietyName === varietyname)
  
    localStorage.setItem("admin_variety_id", selcetedVariety._id)

    // const setNewVarietyId = await fetch('/getnewvarietyid', {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"

    //   },
    //   body: JSON.stringify({
    //     // crop_id,crop
    //     varietyname
    //   })
    // });

    // const newvariety = await setNewVarietyId.json();
    // console.log("this is vareity data");
    // console.log(newvariety);
    // localStorage.setItem("variety_id", newvariety)


  }

  const setunit = () => {
    const data = document.getElementById("unit").value
    console.log(data);
    setUnit(data)
  }

  const submit_sell_details = async (event) => {
    event.preventDefault();

    const { price, quantity } = sell_data;

    const category_id = localStorage.getItem("category_id");
    const crop_id = localStorage.getItem("admin_crop_id");
    const variety_id = localStorage.getItem("admin_variety_id");


    const res = await fetch("/Sell_crops", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        category_id, crop_id, variety_id, price, quantity, unit
      })
    });
    // console.log(res.status);

    if (res.status === 200) {
      alert('Data uploaded')
      // console.log(res.body);
    };

    if (res.status === 400) {
      alert("please fill all the data");
    }

  }

  useEffect(() => {
    // fetchcropid();
    selectcategory();
  }, [])

  return (
    <>
      <Navbar />
      <div className="main_div">
        <div className="form_holder_div">

          <div className='form_holder'>
            {/* <button className='close_form_btn' onClick={close_sell_form}>cancel</button> */}
            <form action="POST" name="contact_form">

              <div className='input_fields'>
                <label htmlFor="crop name">Category  :</label>
                {/* <input type="text" id='crop_name' name='crop_name' value={sell_data.crop_name} 
               onChange={typevaluee} /> */}
                <select name="categorydata" id="categorydata" onChange={selectcrop}>
                  <option disabled hidden selected>select the crop name</option>
                  {categoryList.map((val) => {
                    // console.log(val);
                    return (
                      <>
                        {/* <option disabled hidden selected>select the crop name</option> */}
                        <option value={val.category_Name}>{val.category_Name}</option>
                      </>
                    )
                  })}

                </select>

              </div>

              <div className='input_fields'>
                <label htmlFor="crop name">Crop name :</label>
                <select name="cropdata" id="cropdata" onChange={selectvariety}>
                  <option disabled hidden selected>select the crop name</option>


                  {cropdata.map((val) => {

                    return (
                      <>
                        <option value="" disabled hidden selected>select the crop name</option>
                        <option value={val.cropName}>{val.cropName}</option>
                      </>
                    )
                  })}

                </select>

         

              </div>

              <div className='input_fields'>
                <label htmlFor="variety">Variety :</label>
                {/* <input type="text" id='variety' name='variety' value={sell_data.variety} onChange={typevaluee} /> */}
                <select name="varietydata" id="variety_data" onChange={getvarietyid}>
                  <option disabled hidden selected >select variety name</option>
                  {
                    variety_data.map((val) => {
                      return (
                        <>
                          <option value="" disabled hidden selected >select variety name</option>
                          <option value={val.varietyName}>{val.varietyName}</option>

                        </>
                      )
                    })
                  }
                </select>
              </div>


              <div className='input_fields'>
                <label htmlFor="price">Price:</label>
                <input type="text" id='price' name='price' value={sell_data.price} onChange={typevaluee} />


              </div>

              <div className='input_fields'>
                <label htmlFor="quantity">quantity :</label>
                <input type="text" id='quantity' name='quantity' value={sell_data.quantity} onChange={typevaluee} />

                <select id="unit" onChange={setunit}>
                  <option disabled selected hidden>select unit</option>
                  <option value="kg">kg</option>
                  <option value="ton">Ton</option>
                  <option value="man">Man</option>
                  {/* <option value="audi" selected>Audi</option> */}
                </select>

              </div>
 
              <button className='submit_sell' onClick={submit_sell_details}>submit</button>

            </form>
            {/* <button className='close_dialog_box' onClick={close_dialog_box}>close</button> */}
          </div>
        </div>
      </div>



    </>
  );

}

export default Sell_crops;
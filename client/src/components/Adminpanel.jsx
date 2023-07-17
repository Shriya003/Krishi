import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import AdminNav from './Admin/AdminNav'



require('../style/adminpanel.css')
// impor useHistory


function Adminpanel() {

  const [crop_Name, set_crop_name] = useState("");
  const [variety_Name, set_variety_name] = useState("");
  const [category_Name, set_category_name] = useState("");
  const [totalUser, setTotalUser] = useState("");
  const [activeBuyer, setActiveBuyer] = useState("");
  const [activeSeller, setActiveSeller] = useState("");
  const [darkTheme, setDarkTheme] = useState(false);


  const history = useHistory();

  const submit_sell_details = async (event) => {
    event.preventDefault();
    // console.log(crop_namee);
    // console.log(variety_name);

    const uploadcrop = await fetch("/uploadcrop", {  //at admin.js
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        crop_Name, category_Name, variety_Name
      })
    });

    // console.log(uploadcrop.status);
    if (uploadcrop.status == 401) {
      alert("Already uploaded");
    }
    if (uploadcrop.status == 200) {
      // alert("Already uploaded");
      alert("Crop Uploaded");
    }
    if (uploadcrop.status == 402) {
      alert("fill all data")
    }

  }

  const logout = () => {
    // localStorage.removeItem("profie_pic_url")
    // localStorage.removeItem("city")
    // history.push("/");

  }

  const countUser = async () => {
    console.log("hello");
    // const buyer = await 
    const getUser = await fetch("/getuser", { // admin.js
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"

      },
      Credential: "include"
    })
    const data = await getUser.json();
    console.log(data);

    setTotalUser(data.totalUser)
    setActiveBuyer(data.totalBuyer)
    setActiveSeller(data.totalSeller)
  }


  useEffect(() => {
    countUser();
  }, [])


  return (
    <>
      <AdminNav />

      <div className='admin_main'>
        <div className='activee'>
          <div className='activee_user' onClick={()=>history.push("/TotalUser")} >
            <h1>Total User</h1>
            <h2>{totalUser}</h2>
          </div>
          <div className='activee_seller' onClick={()=>history.push("/TotalSeller")}>
            <h1>Active Seller</h1>
            <h2>{activeSeller}</h2>
          </div>
          <div className='activee_buyer' onClick={()=>history.push('/TotalBuyer')}>
            <h1>Active Buyer</h1>
            <h2>{activeBuyer}</h2>
          </div> 
        </div>
        <h1 className='data_heading'>Data Insertion</h1>
        <div className='data_insertion'>
          <form action="POST" name="contact_form">
            <div className='input_fields'>
              <label htmlFor="crop_name">Select Caterogy</label>
              <input type="text" id='category_name' name='caterogy_name' value={category_Name}
                // onChange={(e) => setphoneno(e.target.value)}
                onChange={(e) => { set_category_name(e.target.value) }} />
            </div>


            <div className='input_fields'>
              <label htmlFor="crop_name">Crop name :</label>
              <input type="text" id='crop_name' name='crop_name' value={crop_Name}
                // onChange={(e) => setphoneno(e.target.value)}
                onChange={(e) => { set_crop_name(e.target.value) }} />
            </div>

            <div className='input_fields'>
              <label htmlFor="variety">Variety :</label>
              <input type="text" id='variety' name='variety' value={variety_Name} onChange={(e) => { set_variety_name(e.target.value) }} />
            </div>



            <button className='admin_submit' onClick={submit_sell_details}>submit</button>

          </form>
        </div>
        <h1 className='feedback_message'>Feedback</h1>
        <NavLink exact to="./logout"><button className="admin_logout">logout</button></NavLink>


      </div>




    </>

  )
}

export default Adminpanel
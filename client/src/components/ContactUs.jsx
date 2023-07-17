import React from 'react'
import '../style/Contact.css'
import Navbar from '../components/Navbar';
import { useState } from 'react';

function ContactUs() {
  const [reason , setreason] = useState("");
  const [message , setMessage] = useState("");
 

  const submit = async()=>{

    // console.log(reason);
    // console.log(message);
    const userid = localStorage.getItem("userid")
    // console.log(userid);

    const res = await fetch('/submitmsg', {  // at admin.js
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({
        reason,message,userid
      })
    })

    if(res.status ==200){
      alert("Message send")
    }

  }


  return (
    <>
      <Navbar />
      <div className="cbody-head">
        <div className="clogin-box">

          <div className="cleft">

            <p className='cleft_p' style={{ color: '#16a085' }}>Hello,lets get in touch</p>

            <input type="text" name="text1" placeholder="Reason for contact" value={reason} onChange={(e)=>setreason(e.target.value)}  />
            <input type="text" name="text2" placeholder="Meassage"  value={message} onChange={(e)=>setMessage(e.target.value)}/>

            {/* <input type="submit" name="signup_submit" value="Send message" /> */}
            <button className='cbutton' onClick={submit}> Send message</button>
          </div>

          <div className="cright">

            {/* <h1 className="cright-box">We'd love to <h1 className='hear'> Hear <span style={{ color: 'rgb(154, 231, 154)' }}>from you </span></h1>
              <p className="cright-box1">krishi@gmail.com</p></h1> */}
            <div className="crightinfo">

              <h1 className="cright-box">We'd love to</h1>
              <h1 className='hear'> Hear <span style={{ color: 'rgb(154, 231, 154)' }}>from you </span></h1>
              <p className="cright_box1">krishi@gmail.com</p>
            </div>


          </div>

        </div>
      </div>
      {/* </div> */}

    </>
  )
}

export default ContactUs
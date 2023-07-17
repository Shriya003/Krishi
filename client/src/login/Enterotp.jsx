import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
require("../style/Enterotp.css")

function Enterotp() {

    const [otp, setotp] = useState("");
    const [otp1, setotp1] = useState("");
    const [otp2, setotp2] = useState("");
    const [otp3, setotp3] = useState("");
    const [otp4, setotp4] = useState("");
    const history = useHistory();


    const validate_otp = async (event) => {
        const otpvlaue = otp1 + otp2 + otp3 + otp4;
        console.log(otpvlaue);
        const password = localStorage.getItem('password')
        const email = localStorage.getItem('email')
        
        event.preventDefault();
        const res = await fetch("/validate_otp", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                otpvlaue,password
            })
        });
        if (res.status == 201) {

            alert("you have been succesfully login");
            localStorage.removeItem('password');
            localStorage.removeItem('email')
            history.push("/")
        }
        if (res.status == 401) {
            alert("wrong otp")
        }
    }

 

    return (

        <>
            <div className="otpdiv">
                <div className='main_box'>

                    <div className="box">
                        <h1 className='otp_h'>Enter Otp</h1>
                        <div className='otp_field'>

                            <input id="num1" size="1" type="number" maxLength="1" value={otp1} onChange={(e) => { setotp1(e.target.value) }}  />

                            <input id='num2' size="1" type="number" maxLength="1" value={otp2} onChange={(e) => { setotp2(e.target.value) }}   />

                            <input id='num3' size="1" type="number" maxLength="1" value={otp3} onChange={(e) => { setotp3(e.target.value) }}  />

                            <input num='num4' size="1" type="number" maxLength="1" value={otp4} onChange={(e) => { setotp4(e.target.value) }}  />
                        </div>

                        {/* <input type="password" name="password" id="otp" placeholder="otp" value={otp} onChange={(e)=>{setotp(e.target.value)}} /> */}

                        <button className='validate_btn' onClick={validate_otp}> Validate otp </button>

                    </div>
                </div>

            </div>


        </>
    )
}

export default Enterotp
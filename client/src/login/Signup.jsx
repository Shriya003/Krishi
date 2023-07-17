import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Loading from "../components/Loading";
import GoogleLogin from 'react-google-login';
require("../style/signup.css")
// const data = require('dotenv').config({ path: '../config.env' })
// console.log(data);


function Signup() {

    const [user, setuser] = useState({
        name: "", email: "", password: "", phoneno: "", address: ""
    });
    const [otp, setotp] = useState("");

    const history = useHistory();
    const { name, email, password, phoneno, address } = user;


    // const typevalue=(e)=>{
    //     console.log(e.target.value);
    //     setuser([address]:e.target.value)

    // }


    const typevalue = (event) => {
        let namee, value;

        // event.target will get that value and store in name/ value  variable
        namee = event.target.name
        value = event.target.value

        setuser({ ...user, [namee]: value })
    }



    const send_data = async (event) => {
        event.preventDefault();
        document.getElementsByClassName('main')[0].style.display = "none"
        document.getElementsByClassName('main_div_loading')[0].style.display = "block"

        const res = await fetch("/signup_email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, address, phoneno
            })
        });
        localStorage.setItem('password', password);
        localStorage.setItem('email', email);
        // localStorage.setItem('address', password)

        console.log(res.status);

        if (res.status == 400) {
            alert("enter all the details")
        }

        if (res.status == 422) {
            alert("email already exist ")
        }
        if (res.status === 201) {
            // console.log(time);
            // document.getElementsByClassName('loading')[0].style.display = "block"

            history.push("./enterotp");


        }
    }

    const trial = () => {
        alert("hello");
    }


    const responseGoogle = async (response) => {
        // console.log("this is response");
        // console.log(response.profileObj.imageUrl);
        localStorage.setItem("profie_pic_url", response.profileObj.imageUrl)

        const res = await fetch("/signInWithGmail", {  //at auth.js
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                response
            })
        });

        if (res.status == 203) {
            const data = await res.json();
            history.push("/Enter_details");
            localStorage.setItem("userid", data)
        }
        if (res.status == 200) {
            console.log("i am at login.jsx ");
            const data = await res.json();
            console.log(data);
            // console.log(data[0]);
            console.log(data.userid);
            // console.log(data[0].userid);

            localStorage.setItem("adminid", data.userid)
            history.push("/adminpanel");
        }
        if (res.status == 201) {

            const data = await res.json();
            console.log(`this is ${data} from status code ${res.status} `);
            history.push('/home')
            localStorage.setItem("userid", data)
        }
        // console.log("this is userid at login.jsx line 34" );
        // console.log(res.status);


    }






    return (
        <>
            <div className='main'>
                <div className='main_header'>
                    <div className="login_box">
                        <div className="left">

                            <h1 className='header1'>Sign up</h1>

                            <form action="post" onLoad={trial}>
                                <input type="text" name="name" id="name" value={user.name} onChange={typevalue} placeholder="Name" required /><br />

                                <input type="email" name="email" id="email" value={user.email} onChange={typevalue} placeholder="Email" /><br />

                                {/* <input type="number" name="otp" id="otp" value={otp} onChange={(e) => { setotp(e.target.value) }} placeholder="otp" /><br /> */}

                                <input type="password" name="password" id="password" value={user.password} onChange={typevalue} placeholder="Password" />

                                <input type="text" name="phoneno" id="phoneno" value={user.phoneno} onChange={typevalue} placeholder="Mobile" />

                                <input type="text" name="address" id="address" value={user.address} onChange={typevalue} placeholder="Address" />
                                <br />
                                <button className='submit' onClick={send_data} > sign up</button>
                                {/* <button onClick={validate_data}> send otp </button> */}



                            </form>
                        </div>

                        <div className="right">
                            <span className="loginwith">Sign in with</span>


                            <div className="googleSignupcont">

                                <GoogleLogin className='googleSignup'
                                    // clientId= {process.env.GOOGLE_CLIENT_ID}
                                    clientId="897223443783-1bqmg4ifk0id3mvenq5vccpp3b0mhmm1.apps.googleusercontent.com"
                                    buttonText="Login"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    cookiePolicy={'single_host_origin'}
                                />
                            </div>
                            {/* <button className="social_signin google">Log in with Google+</button> */}
                        </div>
                        <div className="or">OR</div>
                    </div>
                </div>
            </div>

            <Loading />


        </>
    )
}

export default Signup;





































{/*     
              <div className='st_page'>
                <div className="welcome_back">
                    <div className="item">
                        <h1>welcome Back</h1>
                        <p>if you already have aacount please <br></br>
                            login keep connectd with us
                        </p>

                        <button onClick={opacity1}>sign in</button>
                    </div>
                </div>

                <div className="sign_up">
                    <div className="item2">

                        <h1>create account </h1>
                        <form action="post">
                            <input type="text" name="name" id="name" value={user.name} onChange={typevalue} placeholder="Name" /><br />
                            <input type="email" name="email" id="email" value={user.email} onChange={typevalue} placeholder="Email" /><br />
                            <input type="password" name="password" id="password" value={user.password} onChange={typevalue} placeholder="Password" />
                            <input type="number" name="phoneno" id="phoneno" value={user.phoneno} onChange={typevalue} placeholder="Mobile" />
                            <br />
                            <button onClick={send_data}> signup</button>

                        </form>

                    </div>


                </div>
            </div> */}

// </>;
// }

// export default Signup;

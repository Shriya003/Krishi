import React, { useState } from 'react';
import { useNavigate, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
require("../style/login.css")

const Login = () => {

    const [login_email, setemail] = useState("");
    const [login_password, setpassword] = useState("");

    const history = useHistory();



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
            console.log(data.userid);
            localStorage.setItem("adminid", data.userid)
            history.push("/adminpanel");
        }
        if (res.status == 201) {

            const data = await res.json();
            console.log(`this is ${data} from status code ${res.status} `);
            history.push('/home') 
            localStorage.setItem("userid", data)
        }
    }
    const login_user = async (event) => {
        // const {login_email,login_password} = login
        try {
            const res = await fetch("/signin", {   // at auth.js

                method: "POST", 
                headers: {
                    "Content-Type": "application/json"

                },
                body: JSON.stringify({
                    login_email, login_password
                })


            });
            const userData = await res.json()
            console.log(userData);
            if (res.status == 200) {

                console.log(userData[0]);
                localStorage.setItem("userid",userData[0])
                localStorage.setItem("profie_pic_url",userData[2])
                localStorage.setItem("address",userData[3])
                
                history.push("/home") 
            }
            if (res.status == 201) {
                alert("Data not found")
            }
            if (res.status == 400) {
                alert("Data not found")
            }
            if (res.status == 402) {
                alert("please fill the data ")
            }

        } catch (error) {
            console.log(error);

        }

    }

    const open_signup = () => {
        history.push('./signup_email')
    }


    return (
        <>


            <div className='main-head'>
                <div className="login-boxlog">
                    <div className="leftlog">
                        <img className='logo' src={require('../images/logo2.png')} alt="Logo" width="180" height="120" />
                        <h1 className='header2'>Welcome to Krishi</h1>

                        <input type="text" name="username" placeholder="Email" value={login_email} onChange={(e) => setemail(e.target.value)} />



                        <input type="password" name="password" placeholder="Password" vlaue={login_password} onChange={(e) => {
                            setpassword(e.target.value)
                            console.log(login_password);
                        }} />

                        <button className='log_submit' onClick={login_user}>login</button>

                        <p className='Or_log'>--------or--------</p>
                        <GoogleLogin className='google'
                            // clientId= {process.env.GOOGLE_CLIENT_ID}
                            clientId="897223443783-1bqmg4ifk0id3mvenq5vccpp3b0mhmm1.apps.googleusercontent.com"
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                    </div>

                    <div className="rightlog">
                        <div className='newacc' style={{ color: '#228B22' }}>
                            <br />Are You New to <span style={{ color: '#32CD32' }}><br />Krishi?</span>
                            <br /><button className='newaccbt' onClick={open_signup}>Create Account</button>

                        </div>

                    </div>

                </div>
            </div>

        


        </>
    );
}

export default Login;

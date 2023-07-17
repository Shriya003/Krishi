import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import "../style/about.css";
import { useHistory, NavLink } from 'react-router-dom';




// import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap')
const About = () => {

    const history = useHistory();

    const [userData, setUserData] = useState({});
    const [imgurl, setImgurl] = useState(null);

    const callAboutPage = async () => {


        try {
            const res = await fetch('/about', {   //at auth.js 325
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-type": "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            // console.log("this is data at about us");
            console.log(data)
            setUserData(data);

            // console.log(userData.name);


            if (!res.status === 200) {
                const error = new Error(res.error);
                console.log(error);
            }

        } catch (err) {
            console.log(err);
            history.push('/home')
        }

    }

    const showimg = async (e) => {
        const files = e.target.files[0];
        console.log(files);



        const data = new FormData();
        data.append('file', files)
        data.append('upload_preset', 'krishi')
        data.append("cloud_name", "trishul-industrie");

        const res = await fetch("https://api.cloudinary.com/v1_1/trishul-industrie/image/upload", {
            method: "POST",
            mode: "cors",
            body: data

        })
        const file = await res.json();
        console.log(file);
        console.log(imgurl);
        if (file) {
            document.getElementsByClassName("chanagePhoto")[0].style.display = 'block'
            setImgurl(file.secure_url)
            localStorage.setItem("profie_pic_url", file.secure_url)
            // document.getElementsByClassName("chanagePhoto")[0].style.display = 'none'

        }
        // if(imgurl){
        //     // document.getElementsByClassName("chanagePhoto")[0].style.display = 'none'

        // }
        console.log(imgurl);



    }


    const uploadPhoto = async () => {

        const userid = localStorage.getItem("userid");
        // console.log(userid);
        // alert("hello")

        const res = await fetch('/uploadphoto', {   //at auth
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imgurl, userid
            })

        })

        if (res.status == 200) {

            document.getElementsByClassName("chanagePhoto")[0].style.display = 'none'
            document.getElementsByClassName("aboutInputbtn")[0].style.display = 'none'

        }

    }

    const showUploadbtn = () => {
        document.getElementsByClassName("aboutInputbtn")[0].style.display = 'block'
        // alert("hello")

    }
    useEffect(() => {
        callAboutPage();
    }, []);



    return (
        <>
            <Navbar />
            <div className="main_div_about">
                <div className="main_container_about">
                    <div className="img_div_about">

                        <div className="img_container">
                            <div className="img_holder">
                                <img src={userData.imageuri} alt="hello" onClick={showUploadbtn} />
                                <input className='aboutInputbtn' type="file" onChange={showimg} />
                            </div>
                            <div className="changebtnholder">

                                <button className='chanagePhoto' onClick={uploadPhoto}>upload photo</button>
                            </div>


                        </div>
                        <div className="name_div_info">

                            <h3 className='name'>{userData.name}</h3>

                        </div>

                    </div>


                    <div className="info_div">
                        <div className="cropDataList">
                            <NavLink exact to='./YourCrops'><button className='your_crop' >Your crop</button></NavLink>


                        </div>
                        <div className="aboutInfoDiv">

                            <div className="default_heading">

                                <div className="email_heading">
                                    <h3 className='email'>Email</h3>
                                </div>

                                <div className="phone_heading">
                                    <h3 className='phone'>Phone</h3>
                                </div>
                                <div className="usertype_heading">
                                    <h3 className='gender'>Usertype</h3>
                                </div>


                            </div>

                            {/* <div className="email"> */}

                            <div className="value">


                                <div className="email_address_div">
                                    <h3 className='email_holder'>{userData.email}</h3>
                                </div>
                                {/* </div> */}

                                {/* <div className="phone"> */}

                                <div className="phone_no_div">
                                    <h3 className='phone_holder'>{userData.phoneno}</h3>
                                    {/* </div> */}
                                </div>

                                <div className="usertype">
                                    <div className="show_usertype_div">
                                        <h3 className='usertye_holder'>{userData.usertype}</h3>
                                    </div>
                                </div>


                                <div className="logoutDiv">
                                    <NavLink exact to="./logout"><button className="logout">logout</button></NavLink>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        </>)
}

export default About;
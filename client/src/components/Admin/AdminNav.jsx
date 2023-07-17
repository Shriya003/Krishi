import React, { useEffect, useState } from 'react'
import logo from '../../images/logo.png'
import { BsBrightnessHighFill, BsBrightnessHigh } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import Default from '../../images/user.png';
import Moon from '../../images/moon_bla.png'
import Sun from '../../images/sun.png'
require('../../style/Admin/adminnav.css')



function AdminNav() {

    const [theme, settheme] = useState(false);
    const [background, setBackground] = useState(Default);


    const setLightMode = () => {
        settheme(false)
        var d = document.querySelector(':root');

        // for light mode 

        d.style.setProperty('--backgroundColourr', '#EDF2F9');
        d.style.setProperty('--textColour', "#5e6e82");
        d.style.setProperty('--blockColour', 'rgb(255, 255, 255)');
        d.style.setProperty('--inputLabel', '#344050');
        d.style.setProperty('--adminNavBackground', '#ffffff');

    }
    const setDarkMode = () => {
        settheme(true)
        var d = document.querySelector(':root');
        // for dark mode
        d.style.setProperty('--backgroundColourr', 'rgba(11,23,39,0.96)');
        d.style.setProperty('--textColour', "#d8e2ef");
        d.style.setProperty('--blockColour', 'rgba(39, 57, 77, 0.97)');
        d.style.setProperty('--inputLabel', '#ffffff');
        d.style.setProperty('--adminNavBackground', 'rgba(18, 37, 62, 0.96)');



    }


    const css = {
        backgroundImage: `url(${background})`
        // :root{
        //     --backgroundColour:--backgroundColourDark;
        // }

        // var home = document.querySelector(':root');

    };


    const setprofilepic = () => {
        const profileurl = localStorage.getItem("profie_pic_url");
        console.log(`this is profile url from navbar ${profileurl}`);
        if (profileurl) {
            // document.getElementsByClassName('profile')[0].style= background
            setBackground(profileurl)

        }
    }


    useEffect(() => {
        setprofilepic();
    }, [])

    return (
        <>

            <div className="adminNavDiv">
                <div className="rightSideNav">

                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div className="leftSideNav">
                    <div className="dayNight">
                        {
                            theme ? (

                                <>
                                    <button className="day" onClick={setLightMode}>
                                        {/* <BsBrightnessHigh className='dayicon' /> */}
                                        <img src={Sun} alt="" className='dayicon'/>

                                    </button>
                                </>
                            )
                                : (
                                    <>

                                        <button className="night" onClick={setDarkMode}>
                                            {/* <BsBrightnessHighFill className='nighticon' /> */}
                                            <img src={Moon} alt="" className='nighticon' />
                                        </button>

                                    </>
                                )
                        }



                    </div>
                    <div className="Notification">

                        <NavLink exact to='/Suggestion'>
                            <BiBell className='notificationIcon' />
                        </NavLink>

                    </div>
                    <div className="adminProfile">

                        <div className="nprofile" style={css} ></div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default AdminNav
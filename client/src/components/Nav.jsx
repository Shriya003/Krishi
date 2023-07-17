import React, { useEffect, useState } from 'react';
import { NavLink, Route, Switch, useHistory } from "react-router-dom";
// import Sell_crops from './Sell_crops';
import '../style/nav.css'
import Default from '../images/user.png';


function Nav() {


    const [background, setBackground] = useState(Default);
    const history = useHistory();

    const openhome = () => {
        history.push('/home');


    }



    // const dara = api.openweathermap.org/data/2.5/weather?zip=232101,91&appid= b47eaedf9047216f8f8ccccb6cf674b5;
    const open_sell_dialog = () => {


        document.getElementsByClassName("sell_crop_div_at_home_jsx")[0].style.display = "flex";
    }

    const css = {
        backgroundImage: `url(${background})`
    };
    // const logout =(req,res)=>{
    //     console.log(req.cookies.jwtoken);

    // }
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
            <div className="nmain_dcc">

                <div className="nheader">

                    <div className="nfirst">

                        {/* <div className="header"> */}
                        {/* <div className="logo"> */}
                        <img src={require('../images/logo.png')} alt="logo here" onClick={openhome} />


                    </div>
                    <div className="nbuy_sell">
                        <div className="nbtn">

                        <NavLink exact to="/Category_crops"> <button className='buy'>Buy</button>
                        </NavLink>

                        <NavLink exact to="/Sell_crops"> <button className='sell'>Sell</button></NavLink>
                        </div>
                        <div className="nmyprofile">
                            <NavLink exact to="/About"><div className="nprofile" style={css} ></div></NavLink>

                        </div>

                    </div>



                </div>


                <div className="nsecond">

                    <div className="ntext">
                        <h1 className='nsecond_h1'>KRISHI</h1>
                        < br /><h1 className='nsecond_h2'> AN INTERFACE TO INDIAN FARMER</h1>

                    </div>




                    <div className="nheader_right">
                        <li style={{ listStyle: "none" }}>
                            <NavLink exact to="/home"> Home </NavLink>
                            <a href='https://agricoop.nic.in/en/ministry-major-schemes'>Govt plan</a>
                            <NavLink exact to="/Contactus">Contact Us</NavLink>
                        </li>
                    </div>

                </div>


            </div>
        </>
    )
}

export default Nav;
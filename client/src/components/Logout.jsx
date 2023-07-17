import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom';

function Logout() {

    const history = useHistory();


    const logoutpage = async ()=>{
        try {

            const res = await fetch('/logout', {    // at auth.js
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-type": "application/json"
                },
                credentials:"include"
              });

        console.log(`this is status of logout ${res.status} `);

              if(res.status ===200){
                // alert("hello")
                localStorage.removeItem("variety_id")
                localStorage.removeItem("crop_id")
                localStorage.removeItem("profie_pic_url")
                localStorage.removeItem("admin_variety_id")
                localStorage.removeItem("admin_crop_id")
                localStorage.removeItem("buy_variety_id")
                localStorage.removeItem("category_id")
                localStorage.removeItem("userid")
                localStorage.removeItem("adminid")

                history.push('/')
    
            }
            else{
                alert(`error ${res.status} Found`)
            }

        } catch (error) {
            console.log(error);            
        }
    

    }


      useEffect(() => {
        // res();
        logoutpage();

    }, []);



    return (
        <>
        <h1>logout</h1>
        </>
    )
}

export default Logout
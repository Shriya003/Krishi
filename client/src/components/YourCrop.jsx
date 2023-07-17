import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import YourCropCard from "../components/YourCropCard"
import Navbar from '../components/Navbar';
require('../style/yourcrop.css')


function YourCrop() {

    const [cropdata, setCropData] = useState([]);

    const trial2 = async () => {
        const res = await fetch('/getUserCrop', { //at auth
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"

            },
            Credential: "include"

        })

        const croplist = await res.json();
        // console.log("hello");
        console.log(croplist);
        setCropData(croplist)

    }


    useEffect(() => {
        trial2();
    }, [])

    return (
        <>
        <Navbar/>
        <div className="crop_upload_text">
            <h1 classsname="crop_uploadh1">You uploaded this crops</h1>
        </div>
            {/* {console.log(cropdata)} */}
            {cropdata.map((val ,index) => {
                console.log(val.quantity);
                return (
                <>
    
                <YourCropCard
                    _id={val._id}
                    category={val.category_id.category_Name}
                    cropname ={val.crop_name_id.crop_Namee}
                    variety={val.variety_id.variety_Name}
                    quantity ={val.quantity}
                    price={val.price}
                    unit={val.unit}
                    index={index}
                
                />  
                </>)
            })}
        </>
    )
}

export default YourCrop
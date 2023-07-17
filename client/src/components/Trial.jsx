import React from 'react'
import { useEffect } from 'react'
require('../style/trial.css')

function Trial() {
    // const []

    const getPopulatedData = async () => {


        const res = await fetch('/getAllPopulatedData', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            credentials: "include"
        });
    }

    // useEffect(()=>{
    //     getPopulatedData();
    // },[])
    return (


        <>
            <div className="trailMainDiv">
                <div className="tDiv">

                </div>
            </div>

        </>
    )
}

export default Trial
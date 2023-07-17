import React from 'react'
import { useHistory } from 'react-router-dom'
require("../../style/varietycard.css")
// import H
function CropCardForBuy(prop) {
    const history = useHistory();
    

    const openBuyPanel=()=>{
        localStorage.setItem("crop_id_at_buy",prop._id)
     
        history.push("./Buy_crop");

    }
    return (
        <>

            <div className='cat_buttonn' >
                <button className='vareitybtn' onClick={openBuyPanel}>{prop.cropName}</button>
            </div>
        </>
    )
}

export default CropCardForBuy
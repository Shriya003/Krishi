import React from 'react'
import "../style/card.css"

function Card(props) { 
    return ( 
        <>
            <div className="card_div">
                <div className='card_value'>
                    <div className="name_holder">

                        <h1>{props.sellername}</h1>
                    </div>
                    <div className="sell_data_holder">

                        <h1>{props.cropname}</h1>
                        <h1>{props.varietyname}</h1>
                        <h1>{props.price} rupee</h1>
                        <h1>{props.quantity}</h1> 
                        <h1>{props.unit}</h1>
                    </div>

                    <div className="seller_detail_holder">

                        <h1>{props.sellerphoneno}</h1>
                        <h1>{props.selleremail}</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Card
import React from 'react'
require("../style/categorycard.css")

function CategoryCard(props) {

 
    const saveBuyCategoryID=()=>{
        // console.log(props._id);
        localStorage.setItem("buy_category_id" ,props._id)

    }
    return (
        <>

            <div className='cat_button' >
                <button className='grain' onClick={saveBuyCategoryID}>{props.categoryname}</button>
            </div>

        </>
    )
}

export default CategoryCard
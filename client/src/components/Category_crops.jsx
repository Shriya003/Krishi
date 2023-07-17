import '../style/category_crops.css'
import Navbar from './Navbar';
import CategoryCard from './CategoryCard';
import CropCard from './card/CropCardForBuy';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Category_crops = () => {

    const [category, setCategory] = useState([]);
    const [crop, setCrop] = useState([]);


    const fetchCategory = async () => {

        const getcategory = await fetch("/getcategory", {  // at buy auth
            method: "GET",
            headers: { 
                Accept: "application/json",
                "Content-type": "application/json"

            },
            Credential: "include"

        })

        // console.log(getcategory);
        const result = await getcategory.json()
 
        console.log(result);


        // setCategory(result=>{
        //     return [...result]

        // })
        setCategory(result)

        console.log(category);

 
    }

    const showcrop = async () => {

        // alert("hello")
        const category_id = localStorage.getItem("buy_category_id")

        const getCrop = await fetch("/getCropForBuy", {   // at butauth
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify({
                category_id
            })
        });

        const data = await getCrop.json()
        console.log(data);
        setCrop(data)

    }

    useEffect(() => {
        fetchCategory();
    }, [])

    return (
        <>
            <Navbar />
            <div className='category_header'>
                <div className='category_main'>
                    {/* <button onClick={log}> ffgfdhfhg</button> */}
                    <h1 className='category_head'>SELECT A PRODUCT TO BUY</h1>
                    <div className="category_holder">



                        {category.map((val) => {
                            return (
                                <>

                                    <button className='categoryBtn' onClick={showcrop}>

                                        <CategoryCard

                                            categoryname={val.category_Name}
                                            _id={val._id}

                                        />
                                    </button>
                                </>
                            )
                        })}
                    </div>
                    <div className='line'></div>

                    <div className="cropholder">
                        {crop.map((val) => {
                            return (
                                <>
                                    <CropCard
                                        cropName={val.cropName}
                                        _id={val._id}
                                    />

                                </>
                            )
                        })}



                    </div>
                    <p className='talk'>Can't find a product you are looking for?</p>


<NavLink exact to="/ContactUs">
    
                    <button className='button_talk'>Talk to us</button>
</NavLink>
                </div>

            </div>
        </>
    )
}
export default Category_crops;
import React, { useEffect, useState } from 'react'
// import router from '../../../server/router/sellauth'
import '../style/buy_crop.css'
import Card from '../components/Card'
import Navbar from './Navbar'
import Loading from './Loading'


const Buy_crops = () => {

  const [result, setResult] = useState([]);
  // const [loading , setloading] = useState(true);

  const getallselldata = async () => {


    // const category_id = localStorage.getItem("buy_category_id")
    const crop_id = localStorage.getItem("crop_id_at_buy")

    const res = await fetch('/getAllBuyingData', {   //at buy auth
      method: "POST",
      headers: {
        "Content-Type": "application/json"

        // "Content-Type": "application/json"
      },
      body: JSON.stringify({
        crop_id
      })

    })
    const allSellList = await res.json();
    setResult(allSellList)

    // console.log(allSellList.length);
    // if (allSellList.length == 0) {
    //   document.getElementsByClassName("tabledata")[0].style.display = 'none'
    // }
    // else {
    //   document.getElementsByClassName("nodata")[0].style.display = 'none'
    // }


  }

  useEffect(() => {
    getallselldata();


  }, [])


  return (
    <>
      <Navbar />

      {result.length > 0 ? (
        // <h1>hello</h1>
        <div className='showDataa'>
          <div className="tabledata">
            {result.map((val) => {
              return (
                <>

                  <Card
                    cropname={val.crop_name_id.crop_Namee}
                    varietyname={val.variety_id.variety_Name}
                    quantity={val.quantity}
                    price={val.price}
                    sellername={val.seller_id.name}
                    sellerphoneno={val.seller_id.phoneno}
                    selleremail={val.seller_id.email}
                    unit={val.unit}
                  />

                </>
              )
            })}
          </div>
        </div>
      ) :
        (
          <div className='showDataa'>

            <h1>NO data Found</h1>
          </ div>
        )}


      {/* <div className='showDataa'>
        <div className="nodata">

          <ZeroBuyData />
        </div>
        <div className="tabledata">


      

          {result.map((val) => {
            return (
              <>

                <Card
                  cropname={val.crop_name_id.crop_Namee}
                  varietyname={val.variety_id.variety_Name}
                  quantity={val.quantity}
                  price={val.price}
                  sellername={val.seller_id.name}
                  sellerphoneno={val.seller_id.phoneno}
                  selleremail={val.seller_id.email}
                  unit={val.unit}

                />

              </>
            )
          })}
        </div>
      </div> */}

    </>
  )
}

export default Buy_crops



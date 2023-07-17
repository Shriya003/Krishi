import React from 'react'
import { useState } from 'react'
import {useEffect} from 'react'
import EachUser from '../card/EachUser';

function TotalBuyer() {
    const [buyerData, setBuyerData] = useState([]);

    const FetchActiveBuyer = async () => {
        const res = await fetch('/fetchActiveBuyer', {    // at admin.js
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);
        setBuyerData(data)

    }

    useEffect(() => {

        FetchActiveBuyer();
    }, [])
  return (
   <>
             <h1>Buyer details</h1>
            <div className="tableContainer">

                <table>
                    <tr className='tableHead'>
                        <th>#</th>
                        <th>name</th>
                        <th>email</th>
                        <th>phoneno</th>
                        <th>address</th>
                        <th>usertype</th>
                        <th>action</th>
                    </tr>
                    {buyerData.map((val) => {
                        return (
                            <>
                                <EachUser
                                    _id={val._id}
                                    name={val.name}
                                    email={val.email}
                                    imageuri={val.imageuri}
                                    address={val.address}
                                    usertype={val.usertype}
                                    phoneno={val.phoneno}
                                />
                            </>
                        )
                    }
                    )}


                </table>

            </div>
   </>
  )
}

export default TotalBuyer
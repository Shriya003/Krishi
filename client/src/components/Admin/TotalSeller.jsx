import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import EachUser from '../card/EachUser';

function TotalSeller() {

    const [sellerData, setSellerData] = useState([]);

    const FetchActiveSeller = async () => {
        const res = await fetch('/fetchActiveSeller', {    // at admin.js
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            credentials: "include"
        });

        const data = await res.json();
        console.log(data);
        setSellerData(data)

    }

    useEffect(() => {

        FetchActiveSeller();
    }, [])

    return (
        <>
            <h1>Seller details</h1>
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
                    {sellerData.map((val) => {
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

export default TotalSeller
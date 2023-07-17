import React, { useEffect, useState } from 'react'
import pencil from "../../images/pencil.png";
import deletee from "../../images/delete.png";
import EachUser from "../card/EachUser.jsx"

require('../../style/totaluser.css')

function TotalUser() {

    const [userData, setUserData] = useState([]);
    const [name, setName] = useState("");

    const FetchTotalUser = async () => {
        const res = await fetch('/fetchTotalUser', {    // at admin.js
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            credentials: "include"
        });
        const data = await res.json();
        console.log(data);
        setUserData(data);

    }




    useEffect(() => {

        FetchTotalUser();
    }, [])
    return (
        <>
            <h1>user details</h1>
            {/* <section>User Detains</section>  */}
            <div className="tableContainer">
                <table>
                    <tr className='tableHead'>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Usertype</th>
                        <th>action</th>
                    </tr>
                    {userData.map((val) => {
                        return (
                            <>
                                <EachUser
                                    _id={val._id}
                                    imageuri={val.imageuri}
                                    name={val.name}
                                    email={val.email}
                                    phoneno={val.phoneno}
                                    address={val.address}
                                    usertype={val.usertype}



                                />
                            </>
                        )

                    })}
                </table >



            </div>
        </>
    )
}

export default TotalUser

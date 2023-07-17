import React from 'react'
import { useState } from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import { useEffect } from 'react';
require('../../style/Admin/suggestion.css')

function Suggestion() {
    const [message, setMessage] = useState([]);
    const history = useHistory();


    const showMessage = async () => {
        const res = await fetch('/showmsg', {  // at admin

            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            },
            Credentials: "include"
        });

        const result = await res.json();
        // console.log(data);

        // const msglist = 
        setMessage(result);
        console.log(result);

    }

    const deleteSuggestion = async () => {
        const _id = document.getElementsByClassName("suggestid")[0].value;
        // console.log(id);
        const res = await fetch('/deletesuggestion', {    //at authjs
            method: "POST",
            headers: {
                "Content-Type": "application/json"

                // "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id
            })

        })

        if (res.status == 200) {
            alert("Deleted")
        }
    }
    useEffect(() => {
        showMessage();
    }, [])
    return (
        <>
            <div className="messagee">
                {message.map((val) => {
                    // console.log(val.message);
                    return (

                        <>
                            <div className="msg_container">
                                <div className="adminUser">
                                    <img src={val.user_id.imageuri} alt="profilePic" />

                                    <h1>{val.user_id.name}</h1>
                                    <h1>{val.user_id.email}</h1>
                                </div>
                                <div className="adminDelete">

                                    <h1>{val.reason}</h1>
                                    <input className='suggestid' value={val._id} />
                                    {/* <h3  value={val._id}>{val._id}</h3> */}
                                    <button className='delteSuggestion' onClick={deleteSuggestion}>Delete</button>
                                </div>
                                <h2>{val.message}</h2>

                            </div>

                        </>
                    )
                }

                )}
            </div>
        </>
    )
}

export default Suggestion
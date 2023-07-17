import React, { useState } from 'react'
import pencil from "../../images/pencil.png";
import deletee from "../../images/delete.png";

function EachUser(props) {
    const [name, setName] = useState(props.name);
    const [phoneno, setPhoneno] = useState(props.phoneno);
    const [email, setEmail] = useState(props.email);
    const [address, setAddress] = useState(props.address);
    const [imageuri, setImageuri] = useState(props.imageuri);
    const [usertype, setUsertype] = useState(props.usertype);

    const deleteUser = async (_id) => {  // admin.js
        console.log(_id);

        const res = await fetch('/deleteUser', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id
            })
        })

    }

    const updateUser = async (_id) => {
        console.log(_id);

        const res = await fetch('/updateUserData', {   //at buy auth
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                _id, name, phoneno, email, address

            })
        })

        if (res.status == 200) {
            alert("Update Successfully")
        }
        else {
            alert("Something Error")
        }


    }

    return (
        <>
            <tr>
                <td className='imgHolderTD'>
                    <img className='imageProfile' src={imageuri} alt="" /></td>
                <td>
                    <input className='hh' type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </td>
                <td>
                    <input className='hh' type="text" value={email} onChange={(e) => setName(e.target.value)} />
                </td>
                <td>
                    <input className='hh' type="text" value={phoneno} onChange={(e) => setName(e.target.value)} /> </td>
                <td>
                    <input className='hh' type="text" value={address} onChange={(e) => setName(e.target.value)} /></td>
                <td>{usertype}</td>
                <td className='buttenHolderTD'>
                    <div className='buttenHolderTDDiv'>

                        <button className='updateButton' onClick={() => updateUser(props._id)} ><img className='updateImg' src={pencil} alt="" /></button>
                        <button className='deleteButton' onClick={() => deleteUser(props._id)}><img className='deleteImg' src={deletee} alt="" />
                        </button>

                    </div>
                </td>

            </tr>

            {/* </> */}
            {/* ) */}

            {/* })} */}

            {/* </table> */}
        </>
    )
}

export default EachUser
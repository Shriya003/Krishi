import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import '../style/weather.css'


function Weather() {
    const history = useHistory();

    const [cityy, setcityy] = useState("");
    // const [city, setcity] = useState("");




    const getcityfromserver = async () => {


        // try {
            // const res = await fetch('/weather', {
            //     method: "GET",
            //     headers: {
            //         Accept: "application/json",
            //         "Content-type": "application/json"
            //     },
            //     credentials: "include"
            // });

            // const dataa = await res.json();
            // const city = dataa.address;

            const city = localStorage.getItem("address");
            console.log(city);
            // var cityy = city;
            setcityy(city)

                  // console.log("hello2");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b47eaedf9047216f8f8ccccb6cf674b5`
        // console.log("hello3");
        const data = await fetch(url);
        const json_data = await data.json();
        // console.log(data);

        // setdata(json_data);
        // console.log(dataa);
        const address = json_data.name;
        const temp = json_data.main.temp - 273.15;
        const temp2 = Math.round(temp * 10);
        const country = json_data.sys.country
        document.getElementsByClassName('curr_address')[0].innerHTML = address
        document.getElementsByClassName('temp')[0].innerHTML = Math.round(temp)
        document.getElementsByClassName('temp')[0].innerHTML = temp2 / 10
        document.getElementsByClassName('country')[0].innerHTML = country
            
            // console.log("hello");

        // } catch (err) {
            // console.log(err);
            // history.push('/')
        // }
        
    }
    const fetch_wether = async () => {
        // localStorage.setItem("city" , cityy)


        // console.log("hello2");
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityy}&appid=b47eaedf9047216f8f8ccccb6cf674b5`
        // console.log("hello3");
        const data = await fetch(url);
        const json_data = await data.json();
        // console.log(data);

        // setdata(json_data);
        // console.log(dataa);
        const address = json_data.name;
        const temp = json_data.main.temp - 273.15;
        const temp2 = Math.round(temp * 10);
        const country = json_data.sys.country
        document.getElementsByClassName('curr_address')[0].innerHTML = address
        document.getElementsByClassName('temp')[0].innerHTML = Math.round(temp)
        document.getElementsByClassName('temp')[0].innerHTML = temp2 / 10
        document.getElementsByClassName('country')[0].innerHTML = country
        // console.log(json_data.main.temp);

    }
    const setcityandfetchweather = async (e) => {
        setcityy(e.target.value);
        fetch_wether();


    }

    useEffect(() => {
        getcityfromserver();
    },[])



    return (<>
        <div className='weather'>
            <input type="text" className='city_name' value={cityy} onChange={setcityandfetchweather} /><br />
            <div className='temp_box'>

                <h1 className='temp'>{ }</h1>
                <h1> °C</h1>
            </div>
            <div className='address_box'>
                <h3 className='curr_address'>var</h3>
                <h3>,</h3>
                <h3 className='country'>Ind</h3>
            </div>
        </div>

    </>

    )
}

export default Weather
import React from 'react'
import '../style/right_panel.css'
import Calender_menu from './Calender_menu';
import Weather from './Weather';

function Right_panel() {




    // const fetch_weather = () => {
    //     navigator.geolocation.getCurrentPosition(success);

    //     function success(position) {
    //         const latitude = position.coords.latitude;
    //         const longitude = position.coords.longitude;
    //         // const latitude = 25.279119529819667
    //         // const longitude = 83.10054684128379
    //         console.log(latitude);
    //         console.log(longitude);
    //     }
    //     // const data = request('api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=b47eaedf9047216f8f8ccccb6cf674b5')
    //     // console.log(data);

    //     // const weather_data = async() =>{

    //     // try {
    //         const res = fetch("api.openweathermap.org/data/2.5/weather?lat=25.279119529819667&lon=83.10054684128379&appid=b47eaedf9047216f8f8ccccb6cf674b5", {
    //             method: "GET"
    //             // headers:{


    //             // }

    //         }).then(response =>{
    //             console.log(response);
    //         }).catch(err =>{
    //             console.log(err);
    //         });
    //     const data = res.json();
    //     console.log("hello");
    //     console.log(data)
    // } catch (err) {
    //     console.log(err);
    // }
    // }



    return (
        <>
            <div className="right_panel_div">

                <Weather />
                {/* <Calender_menu /> */}
            
            </div>

        </>)

}

export default Right_panel
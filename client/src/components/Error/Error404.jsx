import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
require('../../style/error404.css')
// require('../../images/1.jpg')



function Error404() {

  var[time,setTime] = useState(8);
  const history = useHistory();

  const countDown =()=>{

   const settingtime=  setInterval(() => {
 
     time = time-1;
     setTime(time)
     if(time == 0){
       clearInterval(settingtime);
       history.push('/home')
     }
      

    }, 1000);
    console.log(time);


  }




  useEffect(()=>{
    countDown();
  },[])

  return (
    <>
      <div className="errorpage">

        <div className="errorlogo">
          <img src="" alt="" />
        </div>

        <div className="errormaindiv">
          .
          <div className="errorheading">
            <h1>Oops! You ran out of oxygen</h1>
          </div>

          <div className="errorminidiv">
            <div className="errorminiheading">
              <div className="errorheadingtext">

                <h1>The page you're looking for is now beyond our reach.<br /> Let's get you..</h1>
              </div>
              <div className="errorcountdown">

                <h2>Back Home in {time}.</h2>
              </div>
              {/* <button>Home Page</button> */}
              <div className="erroranchor">

                <a href="/Home">Home Page</a>
              </div>
            </div>
            <div className="error404">
              <h1>404</h1>
              <div className="austro">

              <img src={require('../../images/astronaut.png')}  alt="vbbvbv" />
              </div>
            </div>


          </div>
        </div>


      </div>
    </>
  )
}

export default Error404 
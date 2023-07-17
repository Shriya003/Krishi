
import React from 'react';
import Navbar from '../components/Navbar';
import Nav from '../components/Nav';
import '../style/home.css'
import Right_panel from '../components/Right_panel'
import Sell_crops from '../components/Sell_crops';
import { useHistory } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Newsapi from '../components/Newsapi';
import TipsCard from '../components/card/TipsCard';
import Weather from '../components/Weather';
import { useEffect } from 'react';

function Home() {


  return (
    <>



      <Nav />
      <div className="homeSection1">

        <div className="dynaminImage">
          <img alt="hero" src="https://source.unsplash.com/200x200/?farmer,crop" />
        </div>

        <div className='krishi_para'>
          <h1>We ARE KRISHI</h1><br />
          <p>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit culpa corrupti laudantium neque dolorem molestiae ea dolores obcaecati quis? Corporis veniam sint minus omnis tempora sed nesciunt vero magni quidem id. Laudantium ipsum cum illum, saepe tenetur, consequatur cupiditate soluta assumenda voluptas quaerat ea magni quae ut, quia mollitia!
          </p>
        </div>
        <div className="weatherDiv">
          <Weather />
        </div>




      </div>


      <div className="homeSection2">

        <div className="newsdiv">
          <h1>News Section</h1>
          <div className="newsholder">
            <Newsapi />
          </div>
        </div>

        <div className="api">
          <h1>Tips Section</h1>
          <div className="api_main_div">
            <TipsCard />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home;




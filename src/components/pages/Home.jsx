import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import Mypic1 from '/public/images/Mypic1.jpg';

import '/public/css/home.css'


function Home() {
  return (<>
    <div className='container mt-4 backstyle'>
      <div className='row'>
      <div className='col-lg-4 mt-5'>
      <img src={Mypic1} height="200px" width="200px" className='borderstyle' ></img>
      </div>
      <div className='col-lg-8 mt-5'>
        <p className='fontstyleother'>
        Hii , I am Harpreet kaur.I am basically from Punjab (India).I get married in 2020.I have done B.Sc. IT FROM Phagwara(Punjab). After that i did job at Technobitz as a website designer for around 5 years.My main duty was to edit running websites.After marriage i decided to study abroad.Then i studied at university of Wolverhampton. Now i want to sharpen my skills to get job in IT company. My hobbies are gardening and programming.Programming is my passion .I like learning new programming languages.This is the reason i have enrolled in bootcamp. Sometimes i spend my time in my home garden.I like to sit in the garden and watering plants.That's all about me.
        </p>
        </div>
      </div>
      </div>
      
      </>
  );
}

export default Home;

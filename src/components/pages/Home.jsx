import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import Mypic1 from '/public/images/Mypic1.jpg';

import '/public/css/home.css'

// import '../'

function Home() {
  return (<>
    <div className='container mt-4 backstyle'>
      <div className='row'>
      <div className='col-lg-4 mt-5'>
      <img src={Mypic1} height="200px" width="200px" className='borderstyle' ></img>
      </div>
      <div className='col-lg-8 mt-5'>
       
        <p className='fontstyleother'>
        Hii I am Harpreet Kaur.This page containes information about me and my work which i have done last two weeks.
         Also I have mentioned the skills i will learn in the Front end web developer bootcamp.Lastly i have mentioned my contact information.
         Hii I am Harpreet Kaur.This page containes information about me and my work which i have done last two weeks.
         Also I have mentioned the skills i will learn in the Front end web developer bootcamp.Lastly i have mentioned my contact information.
        </p>
        </div>
      </div>
      </div>
      
      </>
  );
}

export default Home;

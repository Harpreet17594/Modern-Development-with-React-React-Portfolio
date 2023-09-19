import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import Contact from './Contact';
import '/public/css/contact.css'
import '/src/components/pages/images/resume1.png';
import '/src/components/pages/images/resume2.png';

function Resume() {
  return (
    
    <div className='container myfont1'>
      <h1 className="text-center">Resume</h1>
      <a href="https://docs.google.com/document/d/10dS7R5Ds109E-x4AMAO_IAk3TCTXdxgm-4pCl8c7wxc/edit" target='_blank'>Click to open CV </a>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
            <img src="https://raw.githubusercontent.com/Harpreet17594/Modern-Development-with-React-React-Portfolio/main/public/images/resume1.png" alt="loading" height={700} width={600} className='box-shadow' />
        </div>
        <div className='col-lg-6'>
           <img src="https://raw.githubusercontent.com/Harpreet17594/Modern-Development-with-React-React-Portfolio/main/public/images/resume2.png" alt="loading" height={700} width={600} className='box-shadow'/>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Resume;

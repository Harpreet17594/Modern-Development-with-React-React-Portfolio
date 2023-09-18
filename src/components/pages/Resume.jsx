import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import Contact from './Contact';
import '/public/css/contact.css'
import '/public/images/resume1.png';
import '/public/images/resume2.png';

function Resume() {
  return (
    <div className='myfont1'>
      <h1 className="text-center">Resume</h1>
      <a href="https://docs.google.com/document/d/10dS7R5Ds109E-x4AMAO_IAk3TCTXdxgm-4pCl8c7wxc/edit" target='_blank'>Click to open CV </a>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6'>
            <img src="/public/images/resume1.png" alt="loading" height={700} width={600} />
        </div>
        <div className='col-lg-6'>
           <img src="/public/images/resume2.png" alt="loading" height={700} width={600} />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Resume;

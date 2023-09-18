import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
// import Contact from './Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import '/public/css/contact.css'



function Contact(props) {
  return (
    <div className='container myfont1'>
      <div className='row'>
      <div className='col-md-4'>
        <br /><br /><br /><br /> <br /><br />
      <span fontstyle>Contact Details</span><br />
      </div>
      
      <div className='col-md-8'>
      <br /><br /><br /><br />
      <span>Email Id: </span>
      <strong>Harpreetvirdi17594@gmail.com</strong>
      <br />
      <span> Github Account:</span>
      <strong>https://github.com/Harpreet17594/Modern-Development-with-React-React-Portfolio</strong>
      <br />
      <span>LinkedIN Profile</span>
      <strong>https://www.linkedin.com/in/harpreet-kaur-a33b78280/</strong>
      <br />
      <span>Mobile Number :</span>
      <strong> +44 7733513586</strong>
      <br />
      <span>Resume Google Docs Link </span>
      <i>https://docs.google.com/document/d/10dS7R5Ds109E-x4AMAO_IAk3TCTXdxgm-4pCl8c7wxc/edit?usp=sharing</i>
<br/>





      {/* <Link to="learn" role="button" className="btn btn-link">
        Learn More
      </Link>
      <Link to="contact" role="button" className="btn btn-link">
        Learn Less
      </Link>
      <Routes>
        <Route path="contact" element={<Contact />} />
      </Routes> */}
      </div>
      </div>
    </div>
  );
}

export default Contact;

import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../css/Headerstyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import Mypic1 from '/public/images/Mypic1.jpg';

import '/public/css/home.css'


function NavTabs() {
  return (


    
    // ================================================================================================
    <div className="container container-fluid myfont">
    <div className="row">
      <div className='col-lg-4'>
      <pre className='myfont'>Portfolio: Harpreet Kaur </pre>
      </div>
    <div className='col-lg-8 styleul'>  
    <ul className="nav nav-tabs ">
      <li className="nav-item  ">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="projectpage"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Project page
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="contact/learn"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Learn
        </NavLink>
      </li>
    </ul>
    </div>      
    </div>

    </div>
  );
}

export default NavTabs;

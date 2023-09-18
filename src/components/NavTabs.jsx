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
    <div className="container container-fluid myfont  styleul">
    <div className="row">
      <div className='col-lg-4'>
      <pre className='myfont'>Portfolio: Harpreet Kaur </pre>
      </div>
    <div className='col-lg-8'>  
    <ul className="nav nav-tabs ">
      <li className="nav-item" >
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active myfont' : 'nav-link myfont'
          }
        >
          Home
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive ? 'nav-link active myfont' : 'nav-link myfont'
          }
        >
          Projects
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="projectpage"
          className={({ isActive }) =>
            isActive ? 'nav-link active myfont' : 'nav-link myfont'
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
            isActive ? 'nav-link active myfont' : 'nav-link myfont'
          }
        >
          Contact
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink
          to="resume"
          className={({ isActive }) =>
            isActive ? 'nav-link active myfont' : 'nav-link myfont'
          }
        >
          Resume
        </NavLink>
      </li>
    </ul>
    </div>      
    </div>

    </div>
  );
}

export default NavTabs;

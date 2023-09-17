import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './Projectpagestyle.css';


function Projects(props1) {
//  console.log(props1);
  return (
    <div className='container stylediv'>
    <div className='row'><div className='col-md-12'>
      <div className='row'>
    <img  src={props1.children[1]} height={400} width={350}  /><br />
    </div>
      </div>
  </div>
  </div>
  
    
  );
}


export default Projects;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './projectsstyle.css';


function Projects(props1) {
//  console.log(props1);
  return (
    <div className='container stylediv1'>
    <div className='row'><div className='col-md-12'>
      <div className='row'>
    <img  src={props1.children[1]} height={400} width={550}  /><br />
    </div>
      </div>
  </div>
  <br />
  <br />
  </div>
  
  
    
  );
}


export default Projects;

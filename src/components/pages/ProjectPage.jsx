import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './Projectpagestyle.css';

function ProjectPage(props) {
  console.log("propsssssss========"+props.children);
  for(var i=0; i<props.children.length; i++)
  {
  return (
    <div className='container stylediv'>
      <div className='row'><div className='col-md-12'>
        <div className='row'>
      <img alt={props.children[1]} src={props.children[5]} height={400} width={650} /><br />
      </div>
      <div className='row'>

      <strong>Title:{props.children[1]}</strong>
      <strong>Deployedlink:{props.children[3]}</strong>  
      <strong>Githublink:{props.children[5]}</strong> 
      <br /><br></br>
      </div>
    </div>
    </div>
    </div>
    
  );
  }
}

export default ProjectPage;

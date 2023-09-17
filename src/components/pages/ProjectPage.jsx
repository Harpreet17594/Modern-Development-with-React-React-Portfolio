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
      <img alt={props.children[1]} src={props.children[5]} height={400} width={650}  /><br />
      </div>
      <div className='row'>

      <h5>Title:{props.children[1]}</h5>
      <h5>Deployedlink:{props.children[3]}</h5>  
      <h5>Githublink:{props.children[5]}</h5> 
      <br /><br></br>
      </div>
    </div>
    </div>
    </div>
    
  );
  }
}

export default ProjectPage;

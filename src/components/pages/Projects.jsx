import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './projectsstyle.css';
import Horison from  "/src/components/pages/images/horison.png";
import "/src/components/pages/images/prework.png";
import "/src/components/pages/images/react.png";
import "/src/components/pages/images/mestro.png";
import "/src/components/pages/images/bootstrap.png";


function Projects(props1) {
//  console.log(props1);
  return (
    <div className='container stylediv1 box-shadow'>
    <div className='row'><div className='col-md-12'>
      <div className='row'>
    <img  src={props1.children[1]} height={400} width={650}  /><br />
    </div>
      </div>
  </div>
  <br />
  <br />
  </div>
  
  
    
  );
}


export default Projects;

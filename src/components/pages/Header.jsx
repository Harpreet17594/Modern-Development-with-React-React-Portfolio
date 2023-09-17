import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from '../NavTabs';
import Home from './Home';
// import Header from './components/pages/Header';
import Projects from './Projects';
import Contact from './Contact';
import ProjectPage from './ProjectPage';
import projectdata from '/projectdata.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
// import Wrapper from './Wrapper.jsx';



function Header() {
  return (
    <Router>
      <div>
                  
        <NavTabs />
        {/* Wrap Route elements in a Routes component */}
        <Routes>
          {/* Define routes using the Route component to render different page components at different paths */}
          {/* Define a default route that will render the Home component */}
          <Route path="/"  element={<Home />} />
          {/* <Route path="header" element={<Header />} /> */}
          <Route path="projects" element={<Projects />} />
          <Route path="projectpage" 
                  element=
                  {
                  <div>
                    
                  <ProjectPage >
                      title={projectdata[0].title}
                      deployedlink={projectdata[0].deployedlink}
                      screenshot={projectdata[0].screenshot}
                      githublink={projectdata[0].githublink}
                  </ProjectPage>
                  <ProjectPage >
                      title={projectdata[1].title}
                      deployedlink={projectdata[1].deployedlink}
                      screenshot={projectdata[1].screenshot}
                      githublink={projectdata[1].githublink}
                  </ProjectPage>
                  <ProjectPage >
                      title={projectdata[2].title}
                      deployedlink={projectdata[2].deployedlink}
                      screenshot={projectdata[2].screenshot}
                      githublink={projectdata[2].githublink}
                  </ProjectPage>
                  <ProjectPage >
                      title={projectdata[3].title}
                      deployedlink={projectdata[3].deployedlink}
                      screenshot={projectdata[3].screenshot}
                      githublink={projectdata[3].githublink}
                  </ProjectPage>
                  <ProjectPage >
                      title={projectdata[1].title}
                      deployedlink={projectdata[1].deployedlink}
                      screenshot={projectdata[1].screenshot}
                      githublink={projectdata[1].githublink}
                  </ProjectPage>
                  </div>
              
                  
                  }
           />

          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Header;

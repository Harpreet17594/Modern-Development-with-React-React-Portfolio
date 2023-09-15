import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavTabs from '../NavTabs';
import Home from './Home';
// import Header from './components/pages/Header';
import Projects from './Projects';
import Contact from './Contact';
import ProjectPage from './ProjectPage';


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
          <Route path="projectpage" element={<ProjectPage />} />

          {/* Define a route that will have descendant routes */}
          <Route path="contact/*" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Header;

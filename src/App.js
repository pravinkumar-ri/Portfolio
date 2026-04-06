import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screen/home";
import Skill from "./screen/skills";
import Project from "./screen/project";
import Education from "./screen/education";
import Contact from "./screen/contact";
import Experience from "./screen/experience";
import { MouseTrail } from "./component/mouseTrail";

import "./css/style.css";
import "./css/technicalSkills.css";
import "./css/contact.css";
import "./css/education.css";
import "./css/project.css";
import "./css/home.css";
import "./css/experience.css";

const App = () => {
  return (
    <BrowserRouter>
      <MouseTrail color="#ff3366" size={20} count={30} thickness={true} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/projects" element={<Project />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
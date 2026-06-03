import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './component/header';
import { MouseTrail } from './component/mouseTrail';
import { ParticleCanvas } from './component/particleCanvas.jsx';
import Contact from './screen/contact';
import Education from './screen/education';
import Experience from './screen/experience';
import Home from './screen/home';
import Project from './screen/project';
import Skills from './screen/skills';
import './css/style.css';

function App() {
    return (
        <>
            <ParticleCanvas />

            <MouseTrail color="#ff3366" size={18} count={28} thickness={false} />

            <Header />

            <main className="main-content">
                <Routes>
                    <Route path="/"          element={<Home />} />
                    <Route path="/skills"    element={<Skills />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects"  element={<Project />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/contact"   element={<Contact />} />
                </Routes>
            </main>
        </>
    );
}

export default App;
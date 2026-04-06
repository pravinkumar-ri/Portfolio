import React, { useState, useEffect } from "react";
import Header from "../component/header";
import { Code, Server, Database, ArrowRight, Briefcase } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Home = () => {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    
    useEffect(() => {
        const roles = ["Web Developer", "Full Stack Developer"];
        
        const handleTyping = () => {
            const currentRole = roles[loopNum % roles.length];
            const currentText = displayText;
            
            if (isDeleting) {
                setDisplayText(currentText.substring(0, currentText.length - 1));
                setTypingSpeed(80);
            } else {
                setDisplayText(currentRole.substring(0, currentText.length + 1));
                setTypingSpeed(150);
            }
            
            if (!isDeleting && displayText === currentRole) {
                setTimeout(() => setIsDeleting(true), 2000);
            } 
            else if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        };
        
        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, loopNum, typingSpeed]);
    
    return (
        <>
            <Header />
            <main className="main-content">
                <div className="home-container">
                    <div className="hero-section">
                        <div className="hero-content">
                            <div className="greeting-text">
                                <span className="wave-emoji">👋</span>
                                <span>Hello, I'm</span>
                            </div>
                            <h1 className="hero-name">R.I. Pravin Kumar</h1>
                            <div className="typing-container">
                                <span className="typing-prefix">I'm a </span>
                                <span className="typing-text">{displayText}</span>
                                <span className="typing-cursor">|</span>
                            </div>
                            
                            <div className="about-section">
                                <h2 className="about-title">About Me</h2>
                                <div className="about-underline"></div>
                                <p className="about-description">
                                    Mechanical Engineering graduate (2024) transitioning into software development. 
                                    Combining an analytical engineering background with technical proficiency in 
                                    Full Stack Development. Skilled in building responsive web applications using 
                                    HTML, CSS, JavaScript, and ReactJS on the frontend, with a robust Node.js and 
                                    MySQL backend foundation.
                                </p>
                            </div>
                            
                            <div className="skills-highlight">
                                <div className="skill-badge">
                                    <Code size={20} color="#ff3366" />
                                    <span>Frontend</span>
                                </div>
                                <div className="skill-badge">
                                    <Server size={20} color="#ff3366" />
                                    <span>Backend</span>
                                </div>
                                <div className="skill-badge">
                                    <Database size={20} color="#ff3366" />
                                    <span>Database</span>
                                </div>
                            </div>
                            
                            <div className="hero-buttons">
                                <a href="/contact" className="btn btn-primary">
                                    Contact Me
                                    <ArrowRight size={18} />
                                </a>
                                <a href="/experience" className="btn btn-secondary">
                                    <Briefcase size={18} />
                                    Experience
                                </a>
                                <a href="/projects" className="btn btn-secondary">
                                    View Projects
                                </a>
                            </div>
                            
                            <div className="social-links">
                                <a href="https://github.com/pravinkumar-ri" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaGithub size={22} />
                                </a>
                                <a href="https://www.linkedin.com/in/pravin-kumar-ri/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaLinkedin size={22} />
                                </a>
                                <a href="https://www.instagram.com/ri__pravin/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaInstagram size={22} />
                                </a>
                                <a href="mailto:pravin7kumar200327@gmail.com" className="social-icon">
                                    <FaEnvelope size={22} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;

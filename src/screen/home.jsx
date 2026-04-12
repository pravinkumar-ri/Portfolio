import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Header from "../component/header";
import { ArrowRight, Briefcase } from 'lucide-react';
import { roles, skillBadges, socialLinks, aboutText } from "../data/homeData";

const Home = () => {
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);
    
    useEffect(() => {
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
                                <p className="about-description">{aboutText}</p>
                            </div>
                            
                            <div className="skills-highlight">
                                {skillBadges.map((badge, index) => {
                                    const IconComponent = badge.icon;
                                    return (
                                        <div key={index} className="skill-badge">
                                            <IconComponent size={20} color={badge.color} />
                                            <span>{badge.name}</span>
                                        </div>
                                    );
                                })}
                            </div>
                            
                            <div className="hero-buttons">
                                <NavLink to="/contact" className="btn btn-primary">
                                    Contact Me
                                    <ArrowRight size={18} />
                                </NavLink>
                                <NavLink to="/experience" className="btn btn-secondary">
                                    <Briefcase size={18} />
                                    Experience
                                </NavLink>
                                <NavLink to="/projects" className="btn btn-secondary">
                                    View Projects
                                </NavLink>
                            </div>
                            
                            <div className="social-links">
                                {socialLinks.map((social, index) => {
                                    const IconComponent = social.icon;
                                    return (
                                        <a 
                                            key={index}
                                            href={social.url} 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="social-icon">
                                            <IconComponent size={social.size} />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home;
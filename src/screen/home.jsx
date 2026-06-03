// screen/home.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { roles, skillBadges, socialLinks, aboutText } from '../data/homeData';
import { MagneticButton } from '../component/magneticButton';
import { ScrollReveal } from '../component/useScrollReveal';
import '../css/home.css';

const Home = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText]           = useState('');
    const [isDeleting, setIsDeleting]             = useState(false);
    const [typingSpeed, setTypingSpeed]           = useState(150);
    // Scramble state for hero name
    const [scrambled, setScrambled]               = useState('R.I. Pravin Kumar');
    const REAL_NAME = 'R.I. Pravin Kumar';
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$';

    // Name scramble-reveal on mount
    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setScrambled(
                REAL_NAME.split('').map((char, idx) => {
                    if (idx < iteration) return REAL_NAME[idx];
                    if (char === ' ' || char === '.') return char;
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                }).join('')
            );
            if (iteration >= REAL_NAME.length) clearInterval(interval);
            iteration += 0.4;
        }, 40);
        return () => clearInterval(interval);
    }, []);

    // Typing effect
    useEffect(() => {
        const role = roles[currentRoleIndex];
        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.substring(0, displayText.length + 1));
                    setTypingSpeed(145);
                } else {
                    setIsDeleting(true);
                    setTypingSpeed(2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(role.substring(0, displayText.length - 1));
                    setTypingSpeed(80);
                } else {
                    setIsDeleting(false);
                    setCurrentRoleIndex(prev => (prev + 1) % roles.length);
                    setTypingSpeed(150);
                }
            }
        }, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

    const handleDownloadResume = () => {
        const link = document.createElement('a');
        link.href = '/resume.pdf';
        link.download = 'Pravin_Kumar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    {/* Greeting */}
                    <div className="greeting-text">
                        <span className="wave-emoji">👋</span>
                        <span>Hello, I'm</span>
                    </div>

                    {/* Scramble-reveal name */}
                    <h1 className="hero-name">{scrambled}</h1>

                    {/* Typing roles */}
                    <div className="typing-container">
                        <span className="typing-prefix">I'm a&nbsp;</span>
                        <span className="typing-text">{displayText}</span>
                        <span className="typing-cursor">|</span>
                    </div>

                    {/* About — scroll-reveal */}
                    <ScrollReveal delay="0.1s" from="bottom">
                        <div className="about-section">
                            <h2 className="about-title">About Me</h2>
                            <div className="about-underline"></div>
                            <p className="about-description">{aboutText}</p>
                        </div>
                    </ScrollReveal>

                    {/* Skill badges */}
                    <ScrollReveal delay="0.15s" from="bottom">
                        <div className="skills-highlight">
                            {skillBadges.map((skill, i) => (
                                <MagneticButton key={i} strength={0.4} className="skill-badge">
                                    <skill.icon size={18} color={skill.color} />
                                    <span>{skill.name}</span>
                                </MagneticButton>
                            ))}
                        </div>
                    </ScrollReveal>

                    {/* CTA buttons — magnetic */}
                    <ScrollReveal delay="0.2s" from="bottom">
                        <div className="hero-buttons">
                            <MagneticButton strength={0.5} as={Link} to="/contact" className="btn btn-primary">
                                Contact Me ✉️
                            </MagneticButton>
                            <MagneticButton strength={0.5} style={{ display: 'inline-flex' }}>
                                <button onClick={handleDownloadResume} className="btn btn-secondary">
                                    Download Resume 📄
                                </button>
                            </MagneticButton>
                        </div>
                    </ScrollReveal>

                    {/* Social icons — magnetic */}
                    <ScrollReveal delay="0.25s" from="bottom">
                        <div className="social-links">
                            {socialLinks.map((social, i) => (
                                <MagneticButton key={i} strength={0.6}>
                                    <a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        aria-label={social.platform}
                                    >
                                        <social.icon size={social.size} />
                                    </a>
                                </MagneticButton>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Home;
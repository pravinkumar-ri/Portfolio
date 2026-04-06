import React from "react";
import Header from "../component/header";
import { Mail, Phone, User } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Contact = () => {
    return (
        <>
            <Header />
            <main className="main-content">
                <div className="contact-container">
                    <div className="contact-header">
                        <h1 className="contact-title">Contact Me</h1>
                        <div className="contact-title-underline"></div>
                    </div>
                
                    <div className="contact-info-grid">
                        <div className="contact-card">
                            <div className="contact-icon">
                                <User size={40} color="#ff3366" />
                            </div>
                            <h3>Name</h3>
                            <p>R.I. Pravin Kumar</p>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <Mail size={40} color="#ff3366" />
                            </div>
                            <h3>Email</h3>
                            <a href="mailto:pravin7kumar200327@gmail.com" className="contact-link">pravin7kumar200327@gmail.com</a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <Phone size={40} color="#ff3366" />
                            </div>
                            <h3>Phone</h3>
                            <a href="tel:+916382717224" className="contact-link">+91 63827 17224</a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <FaGithub size={40} color="#ff3366" />
                            </div>
                            <h3>GitHub</h3>
                            <a href="https://github.com/pravinkumar-ri" target="_blank" rel="noopener noreferrer" className="contact-link">
                                pravinkumar-ri
                            </a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <FaLinkedin size={40} color="#ff3366" />
                            </div>
                            <h3>LinkedIn</h3>
                            <a href="https://www.linkedin.com/in/pravin-kumar-ri/" target="_blank" rel="noopener noreferrer" className="contact-link">
                                pravin-kumar-ri
                            </a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-icon">
                                <FaInstagram size={40} color="#ff3366" />
                            </div>
                            <h3>Instagram</h3>
                            <a href="https://www.instagram.com/ri__pravin/" target="_blank" rel="noopener noreferrer" className="contact-link">
                                ri__pravin
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact;
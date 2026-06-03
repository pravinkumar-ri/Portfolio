import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logoImage from "../image/emojis.jpg";

const Header = () => {
    const [collapse, setCollapse] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setCollapse(false);
    }, [location]);

    useEffect(() => {
        if (collapse) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [collapse]);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavLinkClick = () => {
        setCollapse(false);
    };

    return (
        <div className={`nav-container ${scrolled ? 'scrolled' : ''}`}>
            <nav className="nav">
                <NavLink to="/" className="nav-logo" onClick={handleNavLinkClick}>
                    <img src={logoImage} alt="Logo" className="nav-logo-img"/>
                </NavLink>
                <ul className={collapse ? "nav-menu collapse" : "nav-menu"}>
                    <li className="nav-item">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? "nav-link highlight" : "nav-link"}
                            onClick={handleNavLinkClick}>
                            <span className="nav-link-text">Home</span>
                            <span className="nav-link-icon">🏠</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/skills"
                            className={({ isActive }) => isActive ? "nav-link highlight" : "nav-link"}
                            onClick={handleNavLinkClick}>
                            <span className="nav-link-text">Skills</span>
                            <span className="nav-link-icon">⚡</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/experience"
                            className={({ isActive }) => isActive ? "nav-link highlight" : "nav-link"}
                            onClick={handleNavLinkClick}>
                            <span className="nav-link-text">Experience</span>
                            <span className="nav-link-icon">💼</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => isActive ? "nav-link highlight" : "nav-link"}
                            onClick={handleNavLinkClick}>
                            <span className="nav-link-text">Projects</span>
                            <span className="nav-link-icon">🚀</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/education"
                            className={({ isActive }) => isActive ? "nav-link highlight" : "nav-link"}
                            onClick={handleNavLinkClick}>
                            <span className="nav-link-text">Education</span>
                            <span className="nav-link-icon">📚</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => isActive ? "nav-link highlight" : "nav-link"}
                            onClick={handleNavLinkClick}>
                            <span className="nav-link-text">Contact</span>
                            <span className="nav-link-icon">📧</span>
                        </NavLink>
                    </li>
                </ul>
                <button
                    onClick={() => setCollapse(!collapse)}
                    className={collapse ? "nav-toggler toggler" : "nav-toggler"}
                    aria-label="Toggle navigation menu"
                    aria-expanded={collapse}>
                    <div className="line line-1"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                </button>
            </nav>
        </div>
    );
};

export default Header;
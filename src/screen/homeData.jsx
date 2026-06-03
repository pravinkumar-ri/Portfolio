import { Code, Server, Database } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export const roles = ["Web Developer", "Full Stack Developer"];

export const skillBadges = [
    { name: "Frontend", icon: Code, color: "#ff3366" },
    { name: "Backend", icon: Server, color: "#ff3366" },
    { name: "Database", icon: Database, color: "#ff3366" }
];

export const socialLinks = [
    { platform: "GitHub", url: "https://github.com/pravinkumar-ri", icon: FaGithub, size: 22 },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/pravin-kumar-ri/", icon: FaLinkedin, size: 22 },
    { platform: "Instagram", url: "https://www.instagram.com/ri__pravin/", icon: FaInstagram, size: 22 },
    { platform: "Email", url: "mailto:pravin7kumar200327@gmail.com", icon: FaEnvelope, size: 22 }
];

export const aboutText = `Mechanical Engineering graduate (2024) transitioning into software development. 
Combining an analytical engineering background with technical proficiency in 
Full Stack Development. Skilled in building responsive web applications using 
HTML, CSS, JavaScript, and ReactJS on the frontend, with a robust Node.js and 
MySQL backend foundation.`;
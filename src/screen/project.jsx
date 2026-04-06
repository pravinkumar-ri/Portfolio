import React from "react";
import Header from "../component/header";
import { Globe, Cloud, Camera, Code, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
    const projects = [
        {
            id: 1,
            name: "Travelix Website",
            description: "A modern travel booking platform with beautiful UI and responsive design. Features include destination search, hotel booking, and travel packages.",
            techStack: ["React", "CSS3", "JavaScript", "REST API"],
            liveLink: "https://travelix-website-app.netlify.app/",
            githubLink: "#",
            icon: Globe,
            color: "#00CED1",
            image: "🌍"
        },
        {
            id: 2,
            name: "Gallerie",
            description: "An elegant photo gallery website showcasing beautiful images with smooth animations and lightbox functionality.",
            techStack: ["HTML5", "CSS3", "JavaScript", "Grid Layout"],
            liveLink: "https://gallerie-website.netlify.app/",
            githubLink: "#",
            icon: Camera,
            color: "#FF6B6B",
            image: "📸"
        },
        {
            id: 3,
            name: "Weather App",
            description: "Real-time weather application providing current weather conditions, 5-day forecast, and location-based weather updates.",
            techStack: ["React", "OpenWeather API", "CSS3", "Axios"],
            liveLink: "https://pravinkumar-ri.github.io/weather_app/",
            githubLink: "https://github.com/pravinkumar-ri/weather_app",
            icon: Cloud,
            color: "#4A90E2",
            image: "⛅"
        },
        {
            id: 4,
            name: "Project 4",
            description: "Coming soon... An exciting new project under development.",
            techStack: ["Coming Soon"],
            liveLink: "#",
            githubLink: "#",
            icon: Code,
            color: "#9B59B6",
            image: "🚀",
            comingSoon: true
        },
        {
            id: 5,
            name: "Project 5",
            description: "Coming soon... Another amazing project in the works.",
            techStack: ["Coming Soon"],
            liveLink: "#",
            githubLink: "#",
            icon: Code,
            color: "#E67E22",
            image: "💡",
            comingSoon: true
        },
        {
            id: 6,
            name: "Project 6",
            description: "Coming soon... Stay tuned for updates.",
            techStack: ["Coming Soon"],
            liveLink: "#",
            githubLink: "#",
            icon: Code,
            color: "#1ABC9C",
            image: "🎯",
            comingSoon: true
        },
        {
            id: 7,
            name: "Project 7",
            description: "Coming soon... More innovative solutions coming your way.",
            techStack: ["Coming Soon"],
            liveLink: "#",
            githubLink: "#",
            icon: Code,
            color: "#E74C3C",
            image: "🌟",
            comingSoon: true
        }
    ];

    return (
        <>
            <Header />
            <main className="main-content">
                <div className="projects-container">
                    <div className="projects-header">
                        <h1 className="projects-title">My Projects</h1>
                        <div className="projects-title-underline"></div>
                        <p className="projects-subtitle">Check out some of my amazing work</p>
                    </div>

                    <div className="projects-grid">
                        {projects.map((project, index) => {
                            const IconComponent = project.icon;
                            return (
                                <div 
                                    key={project.id} 
                                    className={`project-card ${project.comingSoon ? 'coming-soon' : ''}`}
                                    style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="project-image" style={{ backgroundColor: `${project.color}20` }}>
                                        <span className="project-emoji">{project.image}</span>
                                    </div>
                                    
                                    <div className="project-icon-wrapper" style={{ backgroundColor: project.color }}>
                                        <IconComponent size={24} color="#fff" />
                                    </div>
                                    
                                    <h3 className="project-name">{project.name}</h3>
                                    <p className="project-description">{project.description}</p>
                                    
                                    <div className="project-tech-stack">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="tech-tag">{tech}</span>
                                        ))}
                                    </div>
                                    
                                    <div className="project-links">
                                        {!project.comingSoon ? (
                                            <>
                                                <a 
                                                    href={project.liveLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="project-link live-link">
                                                    <ExternalLink size={18} />
                                                    Live Demo
                                                </a>
                                                {project.githubLink !== "#" && (
                                                    <a 
                                                        href={project.githubLink} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="project-link github-link">
                                                        <FaGithub size={18} />
                                                        GitHub
                                                    </a>
                                                )}
                                            </>
                                        ) : (
                                            <div className="coming-soon-badge">
                                                <Code size={18} />
                                                Coming Soon
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Project;
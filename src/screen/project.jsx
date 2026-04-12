import React from "react";
import Header from "../component/header";
import { allProjects } from "../data/projectData";
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Project = () => {
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
                        {allProjects.map((project, index) => {
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
                                                <IconComponent size={18} />
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
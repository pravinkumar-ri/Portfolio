import React from "react";
import Header from "../component/header";
import { experiences } from "../data/experienceData";
import { MapPin, Calendar, Code, Database, Server, Wrench, Brain } from 'lucide-react';

const Experience = () => {
    return (
        <>
            <Header />
            <main className="main-content">
                <div className="experience-container">
                    <div className="experience-header">
                        <h1 className="experience-title">Work Experience</h1>
                        <div className="experience-title-underline"></div>
                        <p className="experience-subtitle">My professional journey and training</p>
                    </div>

                    <div className="experience-timeline">
                        {experiences.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={item.id} className="experience-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="experience-year-badge">
                                        <Calendar size={18} color="#ff3366" />
                                        <span>{item.year}</span>
                                    </div>
                                    <div className="experience-icon" style={{ color: item.color }}>
                                        <IconComponent size={50} strokeWidth={1.5} />
                                    </div>
                                    <div className="experience-content">
                                        <h3 className="experience-role">{item.role}</h3>
                                        <p className="experience-company">{item.company}</p>
                                        <div className="experience-location">
                                            <MapPin size={14} color="#ff3366" />
                                            <span>{item.location}</span>
                                        </div>
                                        
                                        <ul className="experience-description">
                                            {item.description.map((desc, i) => (
                                                <li key={i}>{desc}</li>
                                            ))}
                                        </ul>
                                        
                                        <div className="experience-tech-stack">
                                            <div className="tech-category">
                                                <div className="tech-category-title">
                                                    <Code size={16} color="#ff3366" />
                                                    <span>Front-end:</span>
                                                </div>
                                                <div className="tech-tags">
                                                    {item.techStack.frontend.map((tech, i) => (
                                                        <span key={i} className="tech-tag">{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="tech-category">
                                                <div className="tech-category-title">
                                                    <Server size={16} color="#ff3366" />
                                                    <span>Back-end:</span>
                                                </div>
                                                <div className="tech-tags">
                                                    {item.techStack.backend.map((tech, i) => (
                                                        <span key={i} className="tech-tag">{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="tech-category">
                                                <div className="tech-category-title">
                                                    <Database size={16} color="#ff3366" />
                                                    <span>Database:</span>
                                                </div>
                                                <div className="tech-tags">
                                                    {item.techStack.database.map((tech, i) => (
                                                        <span key={i} className="tech-tag">{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="tech-category">
                                                <div className="tech-category-title">
                                                    <Wrench size={16} color="#ff3366" />
                                                    <span>Tools:</span>
                                                </div>
                                                <div className="tech-tags">
                                                    {item.techStack.tools.map((tech, i) => (
                                                        <span key={i} className="tech-tag">{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                            
                                            <div className="tech-category">
                                                <div className="tech-category-title">
                                                    <Brain size={16} color="#ff3366" />
                                                    <span>Soft skills:</span>
                                                </div>
                                                <div className="tech-tags">
                                                    {item.techStack.softSkills.map((skill, i) => (
                                                        <span key={i} className="tech-tag soft-skill">{skill}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
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

export default Experience;
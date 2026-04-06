import React from "react";
import Header from "../component/header";
import { MapPin, Calendar, Code, Laptop, Database, Server, Wrench, Brain } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            role: "Full Stack Developer (Intern)",
            company: "Shiash Info Solutions Private Limited",
            location: "Chennai, Tamil Nadu",
            year: "4 months",
            icon: Laptop,
            color: "#61DAFB",
            description: [
                "Honed full-stack development skills by building responsive web applications using ReactJS, NodeJS, and ExpressJS",
                "Collaborated with senior developers to integrate RESTful APIs and optimize database queries",
                "Improved front-end performance and ensured cross-browser compatibility"
            ],
            techStack: {
                frontend: ["HTML5", "CSS3", "JavaScript", "ReactJS"],
                backend: ["Node.js", "Express.js", "PHP"],
                database: ["MySQL"],
                tools: ["Git", "VS Code"],
                softSkills: ["Problem-solving", "Teamwork", "Quick learner"]
            }
        },
        {
            id: 2,
            role: "Full Stack Developer Trainee",
            company: "Vcentry Technologies",
            location: "Chennai, Tamil Nadu",
            year: "2024",
            icon: Code,
            color: "#ff3366",
            description: [
                "Completing comprehensive Full Stack Development training program",
                "Building responsive web applications using React.js and Node.js",
                "Working with MySQL database management and RESTful APIs",
                "Collaborating on team projects and version control using Git"
            ],
            techStack: {
                frontend: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Bootstrap"],
                backend: ["Node.js", "Express.js"],
                database: ["MySQL"],
                tools: ["Git", "VS Code", "Postman"],
                softSkills: ["Problem-solving", "Team collaboration", "Time management"]
            }
        }
    ];

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
import React from "react";
import Header from "../component/header";
import { Code, FileCode, Box, Braces, Library, Server, Zap, Database, GitBranch, SquareCode } from 'lucide-react';

const Skill = () => {
    const technicalSkills = [
        { name: "HTML5", description: "Markup Language", icon: FileCode, color: "#E34F26" },
        { name: "CSS3", description: "Responsive styling", icon: Code, color: "#1572B6" },
        { name: "JavaScript", description: "Client-side scripting", icon: Braces, color: "#F7DF1E" },
        { name: "BootStrap", description: "CSS Framework", icon: Box, color: "#7952B3" },
        { name: "React JS", description: "UI Library", icon: Library, color: "#61DAFB" },
        { name: "NodeJS", description: "JavaScript Runtime", icon: Server, color: "#339933" },
        { name: "ExpressJS", description: "Backend Framework", icon: Zap, color: "#000000" }
    ];

    const databaseSkills = [
        { name: "MySQL", description: "Relational Database", icon: Database, color: "#4479A1" }
    ];

    const toolsSkills = [
        { name: "GitHub", description: "Version Control & Collaboration", icon: GitBranch, color: "#181717" },
        { name: "VS Code", description: "Code Editor", icon: SquareCode, color: "#007ACC" }
    ];

    return (
        <>
            <Header />
            <main className="main-content">
                <div className="skills-container">
                    <div className="skills-header">
                        <h1 className="skills-title">Technical Skills</h1>
                        <div className="title-underline"></div>
                    </div>

                    <h2 style={{ color: "#ff3366", marginBottom: "1.5rem", fontSize: "1.8rem" }}>Development Skills</h2>
                    <div className="skills-grid">
                        {technicalSkills.map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.05}s` }}>
                                    <div className="skill-icon" style={{ color: skill.color }}>
                                        <IconComponent size={40} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="skill-name">{skill.name}</h3>
                                    <p className="skill-description">{skill.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <h2 style={{ color: "#ff3366", marginBottom: "1.5rem", marginTop: "3rem", fontSize: "1.8rem" }}>Database Skills</h2>
                    <div className="skills-grid">
                        {databaseSkills.map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.05 + 0.35}s` }}>
                                    <div className="skill-icon" style={{ color: skill.color }}>
                                        <IconComponent size={40} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="skill-name">{skill.name}</h3>
                                    <p className="skill-description">{skill.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <h2 style={{ color: "#ff3366", marginBottom: "1.5rem", marginTop: "3rem", fontSize: "1.8rem" }}>Tools</h2>
                    <div className="skills-grid">
                        {toolsSkills.map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <div key={index} className="skill-card" style={{ animationDelay: `${index * 0.05 + 0.4}s` }}>
                                    <div className="skill-icon" style={{ color: skill.color }}>
                                        <IconComponent size={40} strokeWidth={1.5} />
                                    </div>
                                    <h3 className="skill-name">{skill.name}</h3>
                                    <p className="skill-description">{skill.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="skills-footer">
                        Full Stack Development Toolkit
                    </div>
                </div>
            </main>
        </>
    );
}

export default Skill;
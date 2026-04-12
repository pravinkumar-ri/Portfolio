import React from "react";
import Header from "../component/header";
import { skillCategories } from "../data/skillsData";
import * as Icons from 'lucide-react';

const Skill = () => {
    const getIcon = (iconName) => {
        try {
            const Icon = Icons[iconName];
            if (Icon) {
                return <Icon size={40} strokeWidth={1.5} />;
            }
            return <Icons.Code size={40} strokeWidth={1.5} />;
        } catch (error) {
            console.warn(`Icon "${iconName}" not found, using fallback`);
            return <Icons.Code size={40} strokeWidth={1.5} />;
        }
    };

    return (
        <>
            <Header />
            <main className="main-content">
                <div className="skills-container">
                    <div className="skills-header">
                        <h1 className="skills-title">Technical Skills</h1>
                        <div className="title-underline"></div>
                    </div>

                    {skillCategories.map((category, catIndex) => (
                        <React.Fragment key={catIndex}>
                            <h2 style={{ color: "#ff3366", marginBottom: "1.5rem", marginTop: catIndex > 0 ? "3rem" : "0", fontSize: "1.8rem" }}>
                                {category.title}
                            </h2>
                            <div className="skills-grid">
                                {category.skills.map((skill, index) => (
                                    <div 
                                        key={index} 
                                        className="skill-card" 
                                        style={{ animationDelay: `${index * 0.05 + category.delayOffset}s` }}
                                    >
                                        <div className="skill-icon" style={{ color: skill.color }}>
                                            {getIcon(skill.icon)}
                                        </div>
                                        <h3 className="skill-name">{skill.name}</h3>
                                        <p className="skill-description">{skill.description}</p>
                                    </div>
                                ))}
                            </div>
                        </React.Fragment>
                    ))}

                    <div className="skills-footer">
                        Full Stack Development Toolkit
                    </div>
                </div>
            </main>
        </>
    );
}

export default Skill;
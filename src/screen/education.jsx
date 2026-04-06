import React from "react";
import Header from "../component/header";
import { GraduationCap, School, Calendar, Award, BookOpen, Code } from 'lucide-react';

const Education = () => {
    const educationData = [
        {
            id: 1,
            degree: "Full Stack Development",
            institution: "Vcentry Technologies",
            year: "2024",
            score: "Training",
            icon: Code,
            color: "#61DAFB",
            description: "Comprehensive Full Stack Development training including MERN stack"
        },
        {
            id: 2,
            degree: "B.Tech Mechanical Engineering",
            institution: "SRM Institute of Science and Technology",
            year: "2020 - 2024",
            score: "CGPA: 8.77",
            icon: GraduationCap,
            color: "#ff3366",
            description: "Bachelor of Technology in Mechanical Engineering"
        },
        {
            id: 3,
            degree: "12th Standard",
            institution: "I.V.L. Matric. Hr. Sec. School",
            year: "2020",
            score: "Percentage: 72%",
            icon: School,
            color: "#4CAF50",
            description: "Higher Secondary Education"
        },
        {
            id: 4,
            degree: "10th Standard",
            institution: "I.V.L. Matric. Hr. Sec. School",
            year: "2018",
            score: "Percentage: 85%",
            icon: BookOpen,
            color: "#FFA500",
            description: "Secondary School Education"
        }
    ];

    return (
        <>
            <Header />
            <main className="main-content">
                <div className="education-container">
                    <div className="education-header">
                        <h1 className="education-title">Education</h1>
                        <div className="education-title-underline"></div>
                    </div>

                    <div className="education-timeline">
                        {educationData.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={item.id} className="education-card" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="education-year-badge">
                                        <Calendar size={18} color="#ff3366" />
                                        <span>{item.year}</span>
                                    </div>
                                    <div className="education-icon" style={{ color: item.color }}>
                                        <IconComponent size={50} strokeWidth={1.5} />
                                    </div>
                                    <div className="education-content">
                                        <h3 className="education-degree">{item.degree}</h3>
                                        <p className="education-institution">{item.institution}</p>
                                        <div className="education-score">
                                            <Award size={16} color="#ff3366" />
                                            <span>{item.score}</span>
                                        </div>
                                        <p className="education-description">{item.description}</p>
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

export default Education;
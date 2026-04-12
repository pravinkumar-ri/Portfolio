import React from "react";
import Header from "../component/header";
import { educationData } from "../data/educationData";
import { Calendar, Award } from 'lucide-react';

const Education = () => {
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
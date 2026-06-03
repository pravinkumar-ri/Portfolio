import React from 'react';
import { educationData } from '../data/educationData';
import { useTilt } from '../component/useTilt';
import { ScrollReveal } from '../component/useScrollReveal';
import '../css/education.css';

const TiltEduCard = ({ edu, isLeft }) => {
    const { tiltProps, GlareLayer } = useTilt({ maxTilt: 10, scale: 1.02, glare: true });
    const Icon = edu.icon;

    return (
        <div
            {...tiltProps}
            className={`education-card ${isLeft ? 'left-card' : 'right-card'}`}
            style={{ ...tiltProps.style, position: 'relative', overflow: 'visible' }}
        >
            {GlareLayer && <GlareLayer />}

            <div className="education-year-badge">
                <span>📅</span>
                <span>{edu.year}</span>
            </div>
            <div className="education-icon">
                <Icon size={35} color={edu.color} />
            </div>
            <h3 className="education-degree">{edu.degree}</h3>
            <p className="education-institution">{edu.institution}</p>
            <div className="education-score">
                <span>🏆</span>
                <span>{edu.score}</span>
            </div>
            <p className="education-description">{edu.description}</p>
        </div>
    );
};

const Education = () => (
    <div className="education-container">
        <ScrollReveal from="top">
            <div className="education-header">
                <h1 className="education-title">Education</h1>
                <div className="education-title-underline"></div>
            </div>
        </ScrollReveal>

        <div className="education-timeline">
            {educationData.map((edu, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                    <ScrollReveal
                        key={edu.id}
                        delay={`${idx * 0.12}s`}
                        from={isLeft ? 'left' : 'right'}
                    >
                        <TiltEduCard edu={edu} isLeft={isLeft} />
                    </ScrollReveal>
                );
            })}
        </div>
    </div>
);

export default Education;
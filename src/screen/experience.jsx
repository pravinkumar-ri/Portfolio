import React from 'react';
import { experiences } from '../data/experienceData';
import { useTilt } from '../component/useTilt';
import { ScrollReveal } from '../component/useScrollReveal';
import '../css/experience.css';

const TiltExpCard = ({ exp, isLeft }) => {
    const { tiltProps, GlareLayer } = useTilt({ maxTilt: 10, scale: 1.02, glare: true });
    const Icon = exp.icon;

    return (
        <div
            {...tiltProps}
            className={`experience-card ${isLeft ? 'left-card' : 'right-card'}`}
            style={{ ...tiltProps.style, position: 'relative', overflow: 'visible' }}
        >
            {GlareLayer && <GlareLayer />}

            <div className="experience-year-badge">
                <span>📅</span>
                <span>{exp.year}</span>
            </div>
            <div className="experience-icon">
                <Icon size={35} color={exp.color} />
            </div>
            <h3 className="experience-role">{exp.role}</h3>
            <p className="experience-company">{exp.company}</p>
            <p className="experience-location">
                <span>📍</span> {exp.location}
            </p>
            <ul className="experience-description">
                {exp.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                ))}
            </ul>

            {exp.techStack && (
                <div className="experience-tech-stack">
                    {exp.techStack.frontend && (
                        <div className="tech-category">
                            <div className="tech-category-title"><span>🎨</span> Frontend</div>
                            <div className="tech-tags">
                                {exp.techStack.frontend.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                            </div>
                        </div>
                    )}
                    {exp.techStack.backend && (
                        <div className="tech-category">
                            <div className="tech-category-title"><span>⚙️</span> Backend</div>
                            <div className="tech-tags">
                                {exp.techStack.backend.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                            </div>
                        </div>
                    )}
                    {exp.techStack.database && (
                        <div className="tech-category">
                            <div className="tech-category-title"><span>🗄️</span> Database</div>
                            <div className="tech-tags">
                                {exp.techStack.database.map((t, i) => <span key={i} className="tech-tag">{t}</span>)}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const Experience = () => (
    <div className="experience-container">
        <ScrollReveal from="top">
            <div className="experience-header">
                <h1 className="experience-title">Work Experience</h1>
                <div className="experience-title-underline"></div>
                <p className="experience-subtitle">My professional journey and training</p>
            </div>
        </ScrollReveal>

        <div className="experience-timeline">
            {experiences.map((exp, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                    <ScrollReveal
                        key={exp.id}
                        delay={`${idx * 0.15}s`}
                        from={isLeft ? 'left' : 'right'}
                    >
                        <TiltExpCard exp={exp} isLeft={isLeft} />
                    </ScrollReveal>
                );
            })}
        </div>
    </div>
);

export default Experience;
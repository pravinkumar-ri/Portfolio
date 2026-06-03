import React from 'react';
import { projects } from '../data/projectData';
import { useTilt } from '../component/useTilt';
import { ScrollReveal } from '../component/useScrollReveal';
import { MagneticButton } from '../component/magneticButton';
import '../css/project.css';

const TiltProjectCard = ({ project }) => {
    const { tiltProps, GlareLayer } = useTilt({ maxTilt: 12, scale: 1.03, glare: true });
    const Icon = project.icon;

    return (
        <div
            {...tiltProps}
            className={`project-card ${project.comingSoon ? 'coming-soon' : ''}`}
            style={{ ...tiltProps.style, position: 'relative', overflow: 'visible' }}
        >
            {GlareLayer && <GlareLayer />}

            <div className="project-image">
                <div className="project-emoji">{project.image}</div>
            </div>
            <div className="project-icon-wrapper" style={{ background: project.color }}>
                <Icon size={24} color="white" />
            </div>

            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>

            <div className="project-tech-stack">
                {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                ))}
            </div>

            <div className="project-links">
                {!project.comingSoon ? (
                    <>
                        {project.liveLink && project.liveLink !== '#' && (
                            <MagneticButton strength={0.5}>
                                <a
                                    href={project.liveLink}
                                    className="project-link live-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Live Demo 🚀
                                </a>
                            </MagneticButton>
                        )}
                        {project.githubLink && project.githubLink !== '#' && (
                            <MagneticButton strength={0.5}>
                                <a
                                    href={project.githubLink}
                                    className="project-link github-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub 💻
                                </a>
                            </MagneticButton>
                        )}
                    </>
                ) : (
                    <div className="coming-soon-badge">
                        <span>🔜</span> Coming Soon
                    </div>
                )}
            </div>
        </div>
    );
};

const Project = () => (
    <div className="projects-container">
        <ScrollReveal from="top">
            <div className="projects-header">
                <h1 className="projects-title">My Projects</h1>
                <div className="projects-title-underline"></div>
                <p className="projects-subtitle">Some of my recent work and upcoming projects</p>
            </div>
        </ScrollReveal>

        <div className="projects-grid">
            {projects.map((project, idx) => (
                <ScrollReveal
                    key={project.id}
                    delay={`${idx * 0.08}s`}
                    from="bottom"
                >
                    <TiltProjectCard project={project} />
                </ScrollReveal>
            ))}
        </div>
    </div>
);

export default Project;
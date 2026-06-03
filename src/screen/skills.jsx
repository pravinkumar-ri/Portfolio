import React from 'react';
import { skillCategories } from '../data/skillsData';
import { useTilt } from '../component/useTilt';
import { ScrollReveal } from '../component/useScrollReveal';
import { Code, Database, GitBranch, FileCode, Braces, Box, Library, Server, Zap, SquareCode } from 'lucide-react';
import '../css/technicalSkills.css';

const iconMap = { FileCode, Code, Braces, Box, Library, Server, Zap, Database, GitBranch, SquareCode };

const TiltSkillCard = ({ skill, delay }) => {
    const { tiltProps, GlareLayer } = useTilt({ maxTilt: 16, scale: 1.06, glare: true });
    const IconComponent = iconMap[skill.icon] || Code;

    return (
        <div
            {...tiltProps}
            className="skill-card"
            style={{
                ...tiltProps.style,
                animationDelay: delay,
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {GlareLayer && <GlareLayer />}
            <div className="skill-icon">
                <IconComponent size={40} color={skill.color} />
            </div>
            <h3 className="skill-name">{skill.name}</h3>
            <p className="skill-description">{skill.description}</p>
        </div>
    );
};

const Skills = () => (
    <div className="skills-container">
        <ScrollReveal from="top">
            <div className="skills-header">
                <h1 className="skills-title">Technical Skills</h1>
                <div className="title-underline"></div>
            </div>
        </ScrollReveal>

        <div className="skills-grid">
            {skillCategories.map((category, catIdx) =>
                category.skills.map((skill, skillIdx) => {
                    const delay = `${category.delayOffset + skillIdx * 0.07}s`;
                    return (
                        <ScrollReveal
                            key={`${catIdx}-${skillIdx}`}
                            delay={`${catIdx * 0.1 + skillIdx * 0.07}s`}
                            from="bottom"
                        >
                            <TiltSkillCard skill={skill} delay={delay} />
                        </ScrollReveal>
                    );
                })
            )}
        </div>

        <ScrollReveal delay="0.5s" from="bottom">
            <div className="skills-footer">
                <p>⚡ Continuously learning and improving my skills ⚡</p>
            </div>
        </ScrollReveal>
    </div>
);

export default Skills;
// screen/contact.jsx
import React from 'react';
import { contactInfo } from '../data/contactData';
import { useTilt } from '../component/useTilt';
import { ScrollReveal } from '../component/useScrollReveal';
import { MagneticButton } from '../component/magneticButton';
import '../css/contact.css';

const TiltContactCard = ({ info }) => {
    const { tiltProps, GlareLayer } = useTilt({ maxTilt: 14, scale: 1.04, glare: true });
    const Icon = info.icon;

    return (
        <div
            {...tiltProps}
            className="contact-card"
            style={{ ...tiltProps.style, position: 'relative', overflow: 'hidden' }}
        >
            {GlareLayer && <GlareLayer />}

            <div className="contact-icon">
                <Icon size={40} color="#ff3366" />
            </div>
            <h3>{info.title}</h3>
            {info.link ? (
                <MagneticButton strength={0.3} style={{ display: 'inline-block' }}>
                    <a
                        href={info.link}
                        className="contact-link"
                        target={info.type === 'social' ? '_blank' : '_self'}
                        rel={info.type === 'social' ? 'noopener noreferrer' : ''}
                    >
                        {info.value}
                    </a>
                </MagneticButton>
            ) : (
                <p>{info.value}</p>
            )}
        </div>
    );
};

const Contact = () => (
    <div className="contact-container">
        <ScrollReveal from="top">
            <div className="contact-header">
                <h1 className="contact-title">Contact Me</h1>
                <div className="contact-title-underline"></div>
            </div>
        </ScrollReveal>

        <div className="contact-info-grid">
            {contactInfo.map((info, idx) => (
                <ScrollReveal
                    key={info.id}
                    delay={`${idx * 0.08}s`}
                    from="bottom"
                >
                    <TiltContactCard info={info} />
                </ScrollReveal>
            ))}
        </div>
    </div>
);

export default Contact;
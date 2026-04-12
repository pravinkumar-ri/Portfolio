import React from "react";
import Header from "../component/header";
import { contactInfo } from "../data/contactData";

const Contact = () => {
    return (
        <>
            <Header />
            <main className="main-content">
                <div className="contact-container">
                    <div className="contact-header">
                        <h1 className="contact-title">Contact Me</h1>
                        <div className="contact-title-underline"></div>
                    </div>
                
                    <div className="contact-info-grid">
                        {contactInfo.map((info, index) => {
                            const IconComponent = info.icon;
                            return (
                                <div key={info.id} className="contact-card" style={{ animationDelay: `${index * 0.05}s` }}>
                                    <div className="contact-icon">
                                        <IconComponent size={40} color="#ff3366" />
                                    </div>
                                    <h3>{info.title}</h3>
                                    {info.link ? (
                                        <a href={info.link} className="contact-link" target={info.type === "social" ? "_blank" : "_self"} rel="noopener noreferrer">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p>{info.value}</p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Contact;
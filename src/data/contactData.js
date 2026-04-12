import { Mail, Phone, User } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const contactInfo = [
    {
        id: 1,
        title: "Name",
        value: "R.I. Pravin Kumar",
        icon: User,
        type: "text",
        link: null
    },
    {
        id: 2,
        title: "Email",
        value: "pravin7kumar200327@gmail.com",
        icon: Mail,
        type: "email",
        link: "mailto:pravin7kumar200327@gmail.com"
    },
    {
        id: 3,
        title: "Phone",
        value: "+91 63827 17224",
        icon: Phone,
        type: "phone",
        link: "tel:+916382717224"
    },
    {
        id: 4,
        title: "GitHub",
        value: "pravinkumar-ri",
        icon: FaGithub,
        type: "social",
        link: "https://github.com/pravinkumar-ri"
    },
    {
        id: 5,
        title: "LinkedIn",
        value: "pravin-kumar-ri",
        icon: FaLinkedin,
        type: "social",
        link: "https://www.linkedin.com/in/pravin-kumar-ri/"
    },
    {
        id: 6,
        title: "Instagram",
        value: "ri__pravin",
        icon: FaInstagram,
        type: "social",
        link: "https://www.instagram.com/ri__pravin/"
    }
];
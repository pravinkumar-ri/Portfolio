import { Globe, Camera, Cloud, Code, BarChart3 } from 'lucide-react';

export const projects = [
    {
        id: 1,
        name: "Travelix Website",
        description: "A modern travel booking platform with beautiful UI and responsive design. Features include destination search, hotel booking, and travel packages.",
        techStack: ["React", "CSS3", "JavaScript", "REST API"],
        liveLink: "https://travelix-website-app.netlify.app/",
        githubLink: "#",
        icon: Globe,
        color: "#00CED1",
        image: "🌍",
        comingSoon: false
    },
    {
        id: 2,
        name: "Business Dashboard",
        description: "A comprehensive business analytics dashboard with real-time data visualization, sales tracking, and performance metrics.",
        techStack: ["React", "Chart.js", "CSS3", "REST API"],
        liveLink: "https://business-dashboard-ri-max.netlify.app/",
        githubLink: "https://github.com/pravinkumar-ri/business-dashboard",
        icon: BarChart3,
        color: "#FF6B6B",
        image: "📊",
        comingSoon: false
    },
    {
        id: 3,
        name: "Gallerie",
        description: "An elegant photo gallery website showcasing beautiful images with smooth animations and lightbox functionality.",
        techStack: ["HTML5", "CSS3", "JavaScript", "Grid Layout"],
        liveLink: "https://gallerie-website.netlify.app/",
        githubLink: "#",
        icon: Camera,
        color: "#FFA500",
        image: "📸",
        comingSoon: false
    },
    {
        id: 4,
        name: "Weather App",
        description: "Real-time weather application providing current weather conditions, 5-day forecast, and location-based weather updates.",
        techStack: ["React", "OpenWeather API", "CSS3", "Axios"],
        liveLink: "https://pravinkumar-ri.github.io/weather_app/",
        githubLink: "https://github.com/pravinkumar-ri/weather_app",
        icon: Cloud,
        color: "#4A90E2",
        image: "⛅",
        comingSoon: false
    },
    {
        id: 5,
        name: "E-Commerce Platform",
        description: "Coming soon... A full-featured e-commerce platform with cart functionality and payment integration.",
        techStack: ["React", "Node.js", "MongoDB", "Stripe"],
        liveLink: "#",
        githubLink: "#",
        icon: Code,
        color: "#9B59B6",
        image: "🛒",
        comingSoon: true
    },
    {
        id: 6,
        name: "Social Media Dashboard",
        description: "Coming soon... Analytics dashboard for social media management.",
        techStack: ["React", "D3.js", "Express", "PostgreSQL"],
        liveLink: "#",
        githubLink: "#",
        icon: Code,
        color: "#E67E22",
        image: "📊",
        comingSoon: true
    },
    {
        id: 7,
        name: "AI Content Generator",
        description: "Coming soon... AI-powered content generation tool.",
        techStack: ["React", "OpenAI API", "Node.js", "Tailwind"],
        liveLink: "#",
        githubLink: "#",
        icon: Code,
        color: "#1ABC9C",
        image: "🤖",
        comingSoon: true
    }
];

export const allProjects = projects;
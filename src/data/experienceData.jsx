import { Laptop, Code } from 'lucide-react';

export const experiences = [
    {
        id: 1,
        role: "Full Stack Developer (Intern)",
        company: "Shiash Info Solutions Private Limited",
        location: "Chennai, Tamil Nadu",
        year: "4 months",
        icon: Laptop,
        color: "#61DAFB",
        description: [
            "Honed full-stack development skills by building responsive web applications using ReactJS, NodeJS, and ExpressJS",
            "Collaborated with senior developers to integrate RESTful APIs and optimize database queries",
            "Improved front-end performance and ensured cross-browser compatibility"
        ],
        techStack: {
            frontend: ["HTML5", "CSS3", "JavaScript", "ReactJS"],
            backend: ["Node.js", "Express.js", "PHP"],
            database: ["MySQL"],
            tools: ["Git", "VS Code"],
            softSkills: ["Problem-solving", "Teamwork", "Quick learner"]
        }
    },
    {
        id: 2,
        role: "Full Stack Developer Trainee",
        company: "Vcentry Technologies",
        location: "Chennai, Tamil Nadu",
        year: "2024",
        icon: Code,
        color: "#ff3366",
        description: [
            "Completing comprehensive Full Stack Development training program",
            "Building responsive web applications using React.js and Node.js",
            "Working with MySQL database management and RESTful APIs",
            "Collaborating on team projects and version control using Git"
        ],
        techStack: {
            frontend: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Bootstrap"],
            backend: ["Node.js", "Express.js"],
            database: ["MySQL"],
            tools: ["Git", "VS Code", "Postman"],
            softSkills: ["Problem-solving", "Team collaboration", "Time management"]
        }
    }
];
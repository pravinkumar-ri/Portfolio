export const technicalSkills = [
    { name: "HTML5", description: "Markup Language", icon: "FileCode", color: "#E34F26" },
    { name: "CSS3", description: "Responsive styling", icon: "Code", color: "#1572B6" },
    { name: "JavaScript", description: "Client-side scripting", icon: "Braces", color: "#F7DF1E" },
    { name: "BootStrap", description: "CSS Framework", icon: "Box", color: "#7952B3" },
    { name: "React JS", description: "UI Library", icon: "Library", color: "#61DAFB" },
    { name: "NodeJS", description: "JavaScript Runtime", icon: "Server", color: "#339933" },
    { name: "ExpressJS", description: "Backend Framework", icon: "Zap", color: "#000000" }
];

export const databaseSkills = [
    { name: "MySQL", description: "Relational Database", icon: "Database", color: "#4479A1" }
];

export const toolsSkills = [
    { name: "GitHub", description: "Version Control & Collaboration", icon: "GitBranch", color: "#181717" },
    { name: "VS Code", description: "Code Editor", icon: "SquareCode", color: "#007ACC" }
];

export const skillCategories = [
    { title: "Development Skills", skills: technicalSkills, delayOffset: 0 },
    { title: "Database Skills", skills: databaseSkills, delayOffset: 0.35 },
    { title: "Tools", skills: toolsSkills, delayOffset: 0.4 }
];
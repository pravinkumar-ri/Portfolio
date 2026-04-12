import { GraduationCap, School, BookOpen, Code } from 'lucide-react';

export const educationData = [
    {
        id: 1,
        degree: "Full Stack Development",
        institution: "Vcentry Technologies",
        year: "2024",
        score: "Training",
        icon: Code,
        color: "#61DAFB",
        description: "Comprehensive Full Stack Development training including MERN stack"
    },
    {
        id: 2,
        degree: "B.Tech Mechanical Engineering",
        institution: "SRM Institute of Science and Technology",
        year: "2020 - 2024",
        score: "CGPA: 8.77",
        icon: GraduationCap,
        color: "#ff3366",
        description: "Bachelor of Technology in Mechanical Engineering"
    },
    {
        id: 3,
        degree: "12th Standard",
        institution: "I.V.L. Matric. Hr. Sec. School",
        year: "2020",
        score: "Percentage: 72%",
        icon: School,
        color: "#4CAF50",
        description: "Higher Secondary Education"
    },
    {
        id: 4,
        degree: "10th Standard",
        institution: "I.V.L. Matric. Hr. Sec. School",
        year: "2018",
        score: "Percentage: 85%",
        icon: BookOpen,
        color: "#FFA500",
        description: "Secondary School Education"
    }
];
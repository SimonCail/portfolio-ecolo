// src/data/cv.ts
import { Terminal, Code2, Database, Briefcase, GraduationCap, Trophy, Globe } from 'lucide-react';

export const CV_DATA = {
    profile: {
        name: "Simon Caillieret",
        role: "Développeur - BUT3 Informatique",
        status: "Recherche stage (Mars 2026)",
        location: "Lille / Lens",
        email: "simon.caillieret@gmail.com",
        linkedin: "Simon Caillieret",
        github: "SimonCail",
        phone: "06 11 13 45 66",
        details: ["Permis B", "Véhiculé"]
    },
    stats: {
        weight: "24kb", // Estimation après build
        score: "A+"
    },
    skills: [
        {
            category: "Backend & Langages",
            icon: Terminal,
            items: ["Java", "Spring", "Python", "PHP (Laravel)", "Node.js", "C"]
        },
        {
            category: "Frontend & Web",
            icon: Globe,
            items: ["React", "Vue.js", "HTML5", "CSS3", "Tailwind", "Next.js"]
        },
        {
            category: "Data & DevOps",
            icon: Database,
            items: ["SQL", "MongoDB", "Docker", "Git/CI/CD", "Linux", "Deep Learning"]
        }
    ],
    experience: [
        {
            id: 1,
            role: "Stagiaire Développeur",
            company: "Grow Your Business",
            period: "Avril - Juin 2025",
            description: "Développement d'une application mobile en Vue.js pour audits énergétiques (ERESE). Réalisation de sites vitrines WordPress. Application de la méthode Agile.",
            tags: ["Vue.js", "WordPress", "Agile"]
        },
        {
            id: 2,
            role: "Projet Universitaire",
            company: "Bomberman",
            period: "Octobre 2024",
            description: "Conception complète d'un jeu en Java. Architecture orientée objet, gestion d'événements complexes et interfaces graphiques Swing/JavaFX.",
            tags: ["Java", "POO", "Swing"]
        },
        {
            id: 3,
            role: "Challenge Technique",
            company: "Marathon du Web",
            period: "Décembre 2024",
            description: "Hackathon de 48h. Création d'un site complet avec focus Backend intensif.",
            tags: ["Hackathon", "Backend", "Teamwork"]
        },
        {
            id: 4,
            role: "Jobs Étudiants",
            company: "Divers",
            period: "2023 - 2024",
            description: "Infographiste, Agent de tri, Employé technique. Développement de la rigueur et du travail d'équipe.",
            tags: ["Polyvalence"]
        }
    ],
    education: [
        {
            degree: "BUT Informatique",
            school: "IUT Lens - Université d'Artois",
            year: "2023 - 2026",
            details: "Parcours Réalisation d'applications : conception, développement et validation."
        },
        {
            degree: "Baccalauréat Général",
            school: "Lycée Saint-Paul Lens",
            year: "2022",
            details: "Mention Bien. Spécialités Maths - NSI."
        }
    ],
    hobbies: ["Football", "Musculation", "Musique", "Voyages"]
};
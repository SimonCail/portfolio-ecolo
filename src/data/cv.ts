import { Terminal, Code2, Database, Globe } from 'lucide-react';

export const CV_DATA = {
    profil: {
        name: "Simon Caillieret",
        role: "Développeur - BUT3 Informatique",
        status: "Recherche stage (Mars - Juin 2026)",
        location: "Lille / Lens",
        email: "simon.caillieret@gmail.com",
        linkedin: "Simon Caillieret",
        github: "SimonCail",
        phone: "06 11 13 45 66",
        details: ["Permis B", "Véhiculé"]
    },
    skills: [
        {
            category: "Backend & Langages",
            icon: Terminal,
            items: ["Java", "Spring", "Python", "PHP (Laravel)", "Node.js"]
        },
        {
            category: "Frontend & Web",
            icon: Globe,
            items: ["React", "Vue.js", "HTML/CSS", "Tailwind", "Next.js", "JavaScript/TypeScript"]
        },
        {
            category: "Data & DevOps",
            icon: Database,
            items: ["SQL", "MongoDB", "Docker", "Git/CI/CD", "Linux", "Deep Learning"]
        },
        {
            category: "Outils & Méthodes",
            icon: Code2,
            items: ["Agile", "Travail d'équipe", "Insomnia", "Bruno", "Figma", "Adobe Suite", "VS Code", "Suite JetBrains"]
        }
    ],
    experience: [
        {
            id: 1,
            role: "Stages en Entreprise",
            company: "Expériences Professionnelles",
            period: "2023 - 2025",
            description: "Immersion en entreprise et application des compétences techniques en situation réelle.",
            tags: [],
            subProjects: [
                {
                    title: "Stage Développeur - Grow Your Business (Arras - 2025)",
                    description: "Avril à Juin. Développement d'une application mobile en Vue.js pour audits énergétiques (ERESE). Réalisation de sites WordPress et méthode Agile.",
                    tags: ["Vue.js", "WordPress", "Agile"]
                },
                {
                    title: "Stage Infographiste - FDB Décoration (Méricourt - 2023)",
                    description: "Avril à Juin. Conception de visuels commerciaux et supports de communication. Utilisation de la suite Adobe pour la retouche et la mise en page.",
                    tags: ["Adobe Suite", "Design", "Communication"]
                }
            ]
        },
        {
            id: 2,
            role: "Projets",
            company: "IUT Lens / Projets Personnels",
            period: "2024",
            description: "Réalisation de projets techniques mettant en œuvre l'architecture logicielle et le travail d'équipe.",
            tags: [],
            subProjects: [
                {
                    title: "Bomberman",
                    description: "Conception complète d'un jeu Bomberman en équipe de 4. Architecture orientée objet et interfaces graphiques JavaFX.",
                    tags: ["Java", "POO", "JavaFX", "Agile", "Travail d'équipe"]
                },
                {
                    title: "Marathon du Web",
                    description: "Création d'un site de carnet de voyages en 36h à 8 avec 4 personnes spécialisées dans le back-end et 4 personnes spécialisées dans le front-end.",
                    tags: ["PHP", "HTML/CSS", "JavaScript/TypeScript", "Agile", "Travail d'équipe"]
                },
                {
                    title: "Location-MaskCar",
                    description: "Application de gestion de location de véhicules. Gestion des clients, des réservations et facturation. Interface administration et client.",
                    tags: ["JavaScript/TypeScript", "HTML/CSS", "Agile", "Travail d'équipe"]
                }
            ]
        },
        {
            id: 3,
            role: "Jobs Étudiants",
            company: "Divers",
            period: "2023 - 2024",
            description: "Agent de tri, Employé technique. ",
            tags: ["Travail d'équipe"]
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
            details: "Mention Bien. Spécialités Mathématiques - Informatiques."
        }
    ],
    hobbies: ["Football", "Musculation", "Musique", "Voyages"]
};
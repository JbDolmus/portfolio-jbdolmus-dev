// data.tsx (adaptado para next-intl)

import {
    BookText,
    CodeSquare,
    HomeIcon,
    UserRound,
    Linkedin,
    Github,
    Facebook,
    Youtube,
    Computer,
    Code,
    Layout,
    Server,
    Database,
    Link2,
    BarChart,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const socialNetworks = [
    {
        id: 1,
        logo: <Youtube size={30} strokeWidth={1} />,
        src: "https://www.youtube.com/@juandolmus3574",
    },
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/juan-dolmus-094671286/",
    },
    {
        id: 3,
        logo: <Github size={30} strokeWidth={1} />,
        src: "https://github.com/JbDolmus",
    },
    {
        id: 4,
        logo: <FaWhatsapp size={30} strokeWidth={1} />,
        src: "https://wa.me/50671358700?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20profesionales.",
    },
    {
        id: 5,
        logo: <Facebook size={30} strokeWidth={1} />,
        src: "https://www.facebook.com/jb.dolmus",
    },
];

export const itemsNavbar = [
    {
        id: 1,
        titleKey: "home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        titleKey: "about",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        titleKey: "services",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        titleKey: "portfolio",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        titleKey: "technologies",
        icon: <Computer size={25} color="#fff" strokeWidth={1} />,
        link: "/technologies",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        titleKey: "1.title",
        subtitleKey: "1.subtitle",
        descriptionKey: "1.description",
        dateKey: "1.date",
    },
    {
        id: 2,
        titleKey: "2.title",
        subtitleKey: "2.subtitle",
        descriptionKey: "2.description",
        dateKey: "2.date",
    },
    {
        id: 3,
        titleKey: "3.title",
        subtitleKey: "3.subtitle",
        descriptionKey: "3.description",
        dateKey: "3.date",
    },
    {
        id: 4,
        titleKey: "4.title",
        subtitleKey: "4.subtitle",
        descriptionKey: "4.description",
        dateKey: "4.date",
    },
    {
        id: 5,
        titleKey: "5.title",
        subtitleKey: "5.subtitle",
        descriptionKey: "5.description",
        dateKey: "5.date",
    },
];

export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        textKey: "experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 3,
        textKey: "clients",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 10,
        textKey: "projects_done",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 3,
        textKey: "projects_current",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Code />,
        titleKey: "fullstack.title",
        descriptionKey: "fullstack.description",
    },
    {
        icon: <Layout />,
        titleKey: "frontend.title",
        descriptionKey: "frontend.description",
    },
    {
        icon: <Server />,
        titleKey: "backend.title",
        descriptionKey: "backend.description",
    },
    {
        icon: <Database />,
        titleKey: "database.title",
        descriptionKey: "database.description",
    },
    {
        icon: <Link2 />,
        titleKey: "api.title",
        descriptionKey: "api.description",
    },
    {
        icon: <BarChart />,
        titleKey: "powerbi.title",
        descriptionKey: "powerbi.description",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        titleKey: "1",
        image: "/image-3.jpeg",
        urlGithub: "https://github.com/JbDolmus/Project-BubbleHouse/tree/main/bubble-house-web",
        urlDemo: "#!",
    },
    {
        id: 2,
        titleKey: "2",
        image: "/image-4.jpeg",
        urlGithub: "https://github.com/JbDolmus/UpTask_UI",
        urlDemo: "https://up-task-ui-five.vercel.app/",
    },
    {
        id: 3,
        titleKey: "3",
        image: "/image-5.jpeg",
        urlGithub: "https://github.com/JbDolmus/patient-management",
        urlDemo: "https://jbdev-patient-management.netlify.app/",
    },
    {
        id: 4,
        titleKey: "4",
        image: "/image-6.jpeg",
        urlGithub: "https://github.com/JbDolmus/control-gastos",
        urlDemo: "https://jbdev-expense-control.netlify.app/",
    },
    {
        id: 5,
        titleKey: "5",
        image: "/image-7.jpeg",
        urlGithub: "https://github.com/JbDolmus/quiosco_next_app",
        urlDemo: "https://quiosco-next-app-lilac.vercel.app/",
    },
    {
        id: 6,
        titleKey: "6",
        image: "/image-8.jpeg",
        urlGithub: "https://github.com/JbDolmus/calorie-counter",
        urlDemo: "https://devjb-calorie-manager.netlify.app/",
    },
];

export const dataTechnologies = [
    {
        id: 1,
        nameKey: "Java",
        descriptionKey: "java",
        imageUrl: "/java.png",
    },
    {
        id: 2,
        nameKey: "Springboot",
        descriptionKey: "springboot",
        imageUrl: "/springboot.png",
    },
    {
        id: 3,
        nameKey: "Javascript",
        descriptionKey: "javascript",
        imageUrl: "/javascript.png",
    },
    {
        id: 4,
        nameKey: "HTML",
        descriptionKey: "html",
        imageUrl: "/html.png",
    },
    {
        id: 5,
        nameKey: "CSS",
        descriptionKey: "css",
        imageUrl: "/css.png",
    },
    {
        id: 6,
        nameKey: "React",
        descriptionKey: "react",
        imageUrl: "/react.png",
    },
    {
        id: 7,
        nameKey: "next",
        descriptionKey: "next",
        imageUrl: "/nextjs.png",
    },
    {
        id: 8,
        nameKey: "MS SQL",
        descriptionKey: "mssql",
        imageUrl: "/mssql.png",
    },
    {
        id: 9,
        nameKey: "MySQL",
        descriptionKey: "mysql",
        imageUrl: "/mysql.png",
    },
    {
        id: 10,
        nameKey: "PHP",
        descriptionKey: "php",
        imageUrl: "/php.png",
    },
    {
        id: 11,
        nameKey: "Laravel",
        descriptionKey: "laravel",
        imageUrl: "/laravel.png",
    },
    {
        id: 12,
        nameKey: "Power BI",
        descriptionKey: "powerbi",
        imageUrl: "/powerbi.png",
    },
    {
        id: 13,
        nameKey: "Dotnet",
        descriptionKey: "dotnet",
        imageUrl: "/dotnet.png",
    },
    {
        id: 14,
        nameKey: "Tailwind",
        descriptionKey: "tailwind",
        imageUrl: "/tailwind.png",
    },
];

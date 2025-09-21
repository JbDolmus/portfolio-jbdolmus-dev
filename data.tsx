import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Github, Facebook, Youtube, Computer, Code, Layout, Server, Database, Link2, BarChart } from "lucide-react";
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
        titleEnglish: "Home",
        titleSpanish: "Inicio",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        titleEnglish: "About me",
        titleSpanish: "Sobre mí",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        titleEnglish: "Services",
        titleSpanish: "Servicios",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        titleEnglish: "Portfolios",
        titleSpanish: "Portafolios",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        titleEnglish: "Technologies",
        titleSpanish: "Tecnologías",
        icon: <Computer size={25} color="#fff" strokeWidth={1} />,
        link: "/technologies",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Full Stack",
        subtitle: "BeGreat",
        description: "En febrero de 2023, colaboré en equipo para desarrollar un sistema web para la gestión de cursos, inscripción de estudiantes y profesores, entre otras funcionalidades. Se utilizó Java con Spring Boot en el backend y ReactJS en el frontend, incorporando librerías de seguridad como JWT.",
        date: "Feb 2023",
    },
    {
        id: 2,
        title: "Desarrollador Full Stack",
        subtitle: "Aplicación móvil para Restaurante",
        description: "En febrero de 2024, trabajé junto a un equipo en el diseño de una aplicación móvil usando MAUI .NET en el frontend y .NET en el backend, ofreciendo una experiencia fluida y moderna para la gestión de un restaurante.",
        date: "Feb 2024",
    },
    {
        id: 3,
        title: "Frontend Developer",
        subtitle: "App de compra e intercambio de tickets",
        description: "En julio de 2024, diseñé junto a un equipo una aplicación multiplataforma para gestionar compra e intercambio de tickets, utilizando Django en el backend, ReactJS en el frontend web y React Native en el frontend móvil.",
        date: "Jul 2024",
    },
    {
        id: 4,
        title: "Frontend Developer",
        subtitle: "App para Restaurante",
        description: "En noviembre de 2024, desarrollé todo el frontend de una aplicación para un restaurante usando ReactJS, asegurando interfaces intuitivas y funcionales, trabajando en conjunto con otro desarrollador.",
        date: "Nov 2024",
    },
    {
        id: 5,
        title: "Práctica Profesional",
        subtitle: "Adnet Soluciones S.A.",
        description: "En noviembre de 2024, desarrollé un sistema de gestión de tickets tipo Trello, utilizando ReactJS, librerías como MUI para estilos, y conectando con la REST API de Unsplash para consumo de imágenes, aportando a un proyecto real durante mi práctica profesional.",
        date: "Nov 2024",
    },
];


export const dataCounter = [
    {
        id: 0,
        endCounter: 2,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 3,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 10,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 3,
        text: "Proyectos en curso",
        lineRight: false,
        lineRightMobile: false,
    },
];

export const serviceData = [
    {
        icon: <Code />,
        title: "Desarrollo Full Stack",
        description:
            "Construcción de aplicaciones web completas y escalables, desde el frontend hasta el backend, aplicando tecnologías modernas y buenas prácticas.",
    },
    {
        icon: <Layout />,
        title: "Frontend Development",
        description:
            "Diseño y desarrollo de interfaces responsivas, intuitivas y centradas en la experiencia del usuario, utilizando ReactJS y frameworks modernos.",
    },
    {
        icon: <Server />,
        title: "Backend Development",
        description:
            "Implementación de arquitecturas sólidas y seguras en el servidor, con experiencia en Java Spring Boot y .NET, garantizando rendimiento y escalabilidad.",
    },
    {
        icon: <Database />,
        title: "Gestión de Bases de Datos",
        description:
            "Diseño, optimización y administración de bases de datos SQL, asegurando integridad, eficiencia y disponibilidad de la información.",
    },
    {
        icon: <Link2 />,
        title: "Integración de APIs",
        description:
            "Conexión de aplicaciones con APIs externas y servicios de terceros, como REST APIs y Unsplash, para enriquecer la funcionalidad de cada proyecto.",
    },
    {
        icon: <BarChart />,
        title: "Dashboards e Informes en Power BI",
        description:
            "Desarrollo de reportes interactivos y dashboards claros en Power BI para análisis y toma de decisiones.",
    },
]


export const dataPortfolio = [
    {
        id: 1,
        title: "Sistema Web BubbleHouse",
        image: "/image-3.jpeg",
        urlGithub: "https://github.com/JbDolmus/Project-BubbleHouse/tree/main/bubble-house-web",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Sistema de Administración de Tareas",
        image: "/image-4.jpeg",
        urlGithub: "https://github.com/JbDolmus/UpTask_UI",
        urlDemo: "https://up-task-ui-five.vercel.app/",
    },
    {
        id: 3,
        title: "Web de Gestión de Pacientes",
        image: "/image-5.jpeg",
        urlGithub: "https://github.com/JbDolmus/patient-management",
        urlDemo: "https://jbdev-patient-management.netlify.app/",
    },
    {
        id: 4,
        title: "App Control de Gastos",
        image: "/image-6.jpeg",
        urlGithub: "https://github.com/JbDolmus/control-gastos",
        urlDemo: "https://jbdev-expense-control.netlify.app/",
    },
    {
        id: 5,
        title: "App de Restaurante",
        image: "/image-7.jpeg",
        urlGithub: "https://github.com/JbDolmus/quiosco_next_app",
        urlDemo: "https://quiosco-next-app-lilac.vercel.app/",
    },
    {
        id: 6,
        title: "Contador de Calorías",
        image: "/image-8.jpeg",
        urlGithub: "https://github.com/JbDolmus/calorie-counter",
        urlDemo: "https://devjb-calorie-manager.netlify.app/",
    }
];

export const dataTechnologies = [
    {
        id: 1,
        name: "Java",
        description:
            "Lenguaje de programación robusto y orientado a objetos, ideal para el desarrollo de aplicaciones empresariales y backend.",
        imageUrl: "/java.png",
    },
    {
        id: 2,
        name: "Spring Boot",
        description:
            "Framework de Java que simplifica la creación de microservicios y aplicaciones escalables de manera ágil y eficiente.",
        imageUrl: "/springboot.png",
    },
    {
        id: 3,
        name: "JavaScript",
        description:
            "Lenguaje esencial para la web moderna, utilizado en el desarrollo de interfaces dinámicas e interactivas.",
        imageUrl: "/javascript.png",
    },
    {
        id: 4,
        name: "HTML",
        description:
            "Lenguaje base para la estructura de páginas web, garantizando accesibilidad y semántica en los proyectos.",
        imageUrl: "/html.png",
    },
    {
        id: 5,
        name: "CSS",
        description:
            "Lenguaje de estilos que permite diseñar interfaces atractivas, responsivas y adaptadas a cualquier dispositivo.",
        imageUrl: "/css.png",
    },
    {
        id: 6,
        name: "React JS",
        description:
            "Biblioteca de JavaScript enfocada en la construcción de interfaces de usuario rápidas, escalables y modulares.",
        imageUrl: "/react.png",
    },
    {
        id: 7,
        name: "Next JS",
        description:
            "Framework de React que facilita el desarrollo de aplicaciones web con renderizado híbrido (SSR y SSG).",
        imageUrl: "/nextjs.png",
    },
    {
        id: 8,
        name: "MS SQL Server",
        description:
            "Sistema de gestión de bases de datos relacional de Microsoft, confiable para proyectos empresariales.",
        imageUrl: "/mssql.png",
    },
    {
        id: 9,
        name: "MySQL",
        description:
            "Base de datos relacional ampliamente utilizada en aplicaciones web, conocida por su rendimiento y estabilidad.",
        imageUrl: "/mysql.png",
    },
    {
        id: 10,
        name: "PHP",
        description:
            "Lenguaje de programación ampliamente usado en el desarrollo web backend, especialmente en aplicaciones dinámicas.",
        imageUrl: "/php.png",
    },
    {
        id: 11,
        name: "Laravel",
        description:
            "Framework de PHP moderno y elegante que facilita el desarrollo de aplicaciones seguras y escalables.",
        imageUrl: "/laravel.png",
    },
    {
        id: 12,
        name: "Power BI",
        description:
            "Herramienta de Microsoft para análisis de datos y visualización interactiva, ideal para la toma de decisiones empresariales.",
        imageUrl: "/powerbi.png",
    },
    {
        id: 13,
        name: ".NET",
        description:
            "Framework de Microsoft para el desarrollo de aplicaciones multiplataforma, con soporte para backend y escritorio.",
        imageUrl: "/dotnet.png",
    },
    {
        id: 14,
        name: "Tailwind CSS",
        description:
            "Framework de CSS basado en utilidades que permite construir interfaces modernas y personalizadas con rapidez.",
        imageUrl: "/tailwind.png",
    },
];

import { FaCode, FaServer, FaDatabase, FaBolt } from "react-icons/fa";

export const personalInfo = {
    name: "Jan Díez de los Ríos",
    role: "Fullstack Developer",
    email: "jan10drp@gmail.com",
    phone: "+34 689 79 16 01",
    birthday: "April 12, 2005",
    location: "Barcelona, Spain",
    
    aboutMe: [
        "I am a passionate Fullstack Developer with expertise in building responsive, efficient, and visual web applications. With a solid background in both frontend interface design and backend API architecture, I thrive on solving complex development challenges.",
        "My goal is to craft digital solutions that are not only performant and secure but also provide users with smooth, premium experiences. I enjoy collaborating on creative projects and always aim to implement clean, maintainable code structures."
    ],
    
    services: [
        {
            icon: <FaCode className="text-3xl text-[#ffdb70]" />,
            title: "Web Development",
            description: "High-quality development of modern web applications using React, Next.js, and TypeScript."
        },
        {
            icon: <FaServer className="text-3xl text-[#ffdb70]" />,
            title: "Backend Services",
            description: "Building robust backend architectures, RESTful APIs, and server integrations with Node.js and Express."
        },
        {
            icon: <FaDatabase className="text-3xl text-[#ffdb70]" />,
            title: "Database Design",
            description: "Creating efficient database schemas, relational data structures, and optimized queries in PostgreSQL."
        },
        {
            icon: <FaBolt className="text-3xl text-[#ffdb70]" />,
            title: "Performance & SEO",
            description: "Optimizing web asset loading, caching, SEO scores, and maintaining highly responsive systems."
        }
    ],
    
    technologies: [
        "React", "Next.js", "Node.js", "Express", "PostgreSQL", "Tailwind CSS", "TypeScript", "Git"
    ]
};
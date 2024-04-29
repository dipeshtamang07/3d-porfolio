import { zerozilla, ctrlsave, kapslock } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    twitter,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    // {
    //     imageUrl: sass,
    //     name: "Sass",
    //     type: "Frontend",
    // },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Software Developer",
        company_name: "Zerozilla Infotech Pvt. Ltd.",
        company_address: "Bangalore, Karnatake, India",
        icon: zerozilla, // TODO: add icon
        iconBg: "#accbe1",
        date: "October 2022 - March 2024",
        points: [
            "Designed and implemented microservice architecture for scalable and efficient solutions.",
            "Developed robust APIs to facilitate seamless communication between different components of the system.",
            "Designed and created databases, both SQL and NoSQL, optimizing performance and ensuring data integrity.",
            "Integrated external systems via webhooks, streamlining processes and enhancing functionality.",
            "Implemented cron jobs to synchronize data from diverse sources, ensuring data consistency and reliability.",
            "Developed modern web applications using React, Next.js, and Redux, delivering intuitive user experiences and responsive interfaces."
        ],
    },
    {
        title: "Full Stack Software Developer",
        company_name: "CtrlSave Pvt. Ltd.",
        company_address: "Navelim, Goa, India",
        icon: ctrlsave,
        iconBg: "#000000",
        date: "April 2021 - March 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Developer",
        company_name: "Kapslock",
        company_address: "Fatorda, Goa, India",
        icon: kapslock,
        iconBg: "#b7e4c7",
        date: "Jan 2021 - March 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/dipeshtamang07',
    },
    {
        name: 'Twitter',
        iconUrl: twitter,
        link: 'https://twitter.com/dipesh_the_dev',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/dipesh-tamang-562854177',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Sterling Accuris',
        description: 'E-commerce platform built for India’s one of the best pathology labs for blood test & full body checkup. Built using modern development tools such as Crafter CMS, NextJs, ReactJs, NestJs, Kafka etc.',
        link: 'https://sterlingaccuris.com/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-black',
        name: 'Gain Access',
        description: 'E-commerce platform built for buying tickets for various sports matches and events. Built using ReactJS, NodeJS, MongoDB etc.',
        link: 'https://gainaccess.projectzerozilla.com/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Typing App',
        description: 'Web application created using React JS and Typscript for practicing your touch typing. Free quotes API is used to fetch random quotes from famous people around the world to serve as sample texts for typing.',
        link: 'https://typing-app-react.vercel.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-green',
        name: 'Wordle Clone',
        description: 'A clone of the famous Wordle Game created with React JS. A five letter word is chosen from the word bank. You have to guess what the word is. Enjoy!!!',
        link: 'https://wordle-clone-black.vercel.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-blue',
        name: 'Music APP',
        description: 'Web Application developed using ReactJS, Redux Toolkit, TailwindCSS and Rapid API.',
        link: 'https://react-music-app-woad.vercel.app/',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-yellow',
        name: 'MyCloud - Static Website',
        description: 'A static website for a dummy cloud hosting site called myCloud developed using html, css and vanilla javascript.',
        link: 'https://quirky-ardinghelli-f49035.netlify.app/',
    },
    // {
    //     iconUrl: pricewise,
    //     theme: 'btn-back-red',
    //     name: 'Amazon Price Tracker',
    //     description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    //     link: 'https://github.com/adrianhajdin/pricewise',
    // },
    // {
    //     iconUrl: threads,
    //     theme: 'btn-back-green',
    //     name: 'Full Stack Threads Clone',
    //     description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    //     link: 'https://github.com/adrianhajdin/threads',
    // },
    // {
    //     iconUrl: car,
    //     theme: 'btn-back-blue',
    //     name: 'Car Finding App',
    //     description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    //     link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    // },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    // {
    //     iconUrl: estate,
    //     theme: 'btn-back-black',
    //     name: 'Real-Estate Application',
    //     description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    //     link: 'https://github.com/adrianhajdin/projects_realestate',
    // },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];
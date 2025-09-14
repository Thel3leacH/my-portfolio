import { IProject } from '@/types';

export const GENERAL_INFO = {
    email: 'Contact: jiradech3007@gmail.com',

    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Jiradech, I am reaching out to you because...',

    // oldPortfolio: 'https://www.legacy.me.toinfinite.dev',
    upworkProfile:
        'https://drive.google.com/file/d/1QBScLQ38ZD9UPn1lQ3DP6lAP0w563pH4/view',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Thel3leacH' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/jiradech' },
    { name: 'facebook', url: 'https://www.facebook.com/baba.boss.56' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'JavaScript',
            icon: '/logo/js.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'TypeScript (basic)',
            icon: '/logo/ts.png',
        },
        {
            name: 'Next.js (basic)',
            icon: '/logo/next.png',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
    ],
};

export const PROJECTS: IProject[] = [
    // {
    //     title: 'MTI Electronics',
    //     slug: 'mti-electronics',
    //     liveUrl: 'https://mti-electronics.vercel.app/',
    //     year: 2025,
    //     description: `
    //   A complete agency portfolio platform built for MTI Electronics to showcase their services, blog content, and product offerings. <br/> <br/>

    //   Key Features:<br/>
    //   <ul>
    //     <li>🛠️ Service Display System: Interactive service showcase with synchronized sliders</li>
    //     <li>✍️ Blog Management: SEO-friendly blog with categorization and search</li>
    //     <li>🛒 Product Catalog: Organized product display with filtering capabilities</li>
    //     <li>📱 Fully Responsive: Optimized for all device sizes</li>
    //     <li>⚡ Fast Performance: Optimized Next.js frontend with ISR (Incremental Static Regeneration)</li>
    //   </ul><br/>

    //   Technical Highlights:
    //   <ul>
    //     <li>Implemented complex slider synchronization logic using Swiper.js</li>
    //     <li>Customized Payload CMS admin panel for intuitive content management</li>
    //     <li>Developed reusable UI components with shadcn for design consistency</li>
    //     <li>Configured efficient data fetching strategies in Next.js</li>
    //   </ul>
    //   `,
    //     role: `
    //   Full-Stack Developer <br/>
    //   Owned the entire development lifecycle:
    //   <ul>
    //     <li>✅ Backend: Configured Payload CMS with custom collections for services, blogs, and products</li>
    //     <li>🎨 Frontend: Built all UI components using Tailwind CSS and shadcn</li>
    //     <li>🔄 State Management: Implemented client-side data fetching and caching</li>
    //     <li>🖥️ CMS Customization: Created admin interfaces for content editors</li>
    //     <li>🚀 Deployment: Set up CI/CD pipeline for Vercel hosting</li>
    //     <li>🧩 Third-Party Integration: Added Swiper.js for interactive sliders</li>
    //   </ul>
    //   `,
    //     techStack: [
    //         'Next.js',
    //         'Payload CMS',
    //         'Tailwind CSS',
    //         'shadcn',
    //         'Swiper.js',
    //         'React Hook Form',
    //         'Vercel',
    //     ],
    //     thumbnail: '/projects/thumbnail/mti-electronics.webp',
    //     longThumbnail: '/projects/long/mti-electronics.webp',
    //     images: [
    //         '/projects/images/mti-electronics-1.webp',
    //         '/projects/images/mti-electronics-2.webp',
    //     ],
    // },
    // {
    //     title: 'Epikcart',
    //     slug: 'epikcart',
    //     techStack: [
    //         'React',
    //         'Redux',
    //         'React i18n',
    //         'Tailwind CSS',
    //         'Framer Motion',
    //         'debouncing',
    //         'Api Integration',
    //     ],
    //     thumbnail: '/projects/thumbnail/epikcart.jpg',
    //     longThumbnail: '/projects/long/epikcart.jpg',
    //     images: [
    //         '/projects/images/epikcart-1.png',
    //         '/projects/images/epikcart-2.png',
    //         '/projects/images/epikcart-3.png',
    //         '/projects/images/epikcart-4.png',
    //         '/projects/images/epikcart-5.png',
    //     ],
    //     liveUrl: 'https://demo.epikcart.siphertech.com/',
    //     year: 2023,
    //     description: `Epikcart is a feature-rich, scalable e-commerce platform tailored for large businesses. It features dynamic product filtering, multi-language support with RTL, advanced inventory management, order tracking, and refund systems, offering a comprehensive solution for multi-vendor operations.`,
    //     role: `As the frontend developer in a team of five, I: <br/>
    //     - Built the frontend from scratch using React, Redux, RTK Query, and Tailwind CSS.<br/>
    //     - Developed dynamic filtering logic for the product search page with admin-configurable parameters.<br/>
    //     - Integrated multi-language support with React i18n, including RTL handling.<br/>
    //     - Delivered a responsive, user-friendly interface in collaboration with the UI/UX designer.`,
    // },
    // {
    //     title: 'Resume Roaster',
    //     slug: 'resume-roaster',
    //     techStack: [
    //         'GPT-4',
    //         'Next.js',
    //         'Postgressql',
    //         'Prisma',
    //         'Tailwind CSS',
    //     ],
    //     thumbnail: '/projects/thumbnail/resume-roaster.jpg',
    //     longThumbnail: '/projects/long/resume-roaster.jpg',
    //     images: [
    //         '/projects/images/resume-roaster-1.png',
    //         '/projects/images/resume-roaster-2.png',
    //         '/projects/images/resume-roaster-3.png',
    //     ],
    //     liveUrl: 'https://resume-roaster.vercel.app/',
    //     year: 2023,
    //     description:
    //         'Resume Roaster is a web application designed to provide tailored resume feedback and professional writing services. Built with Next.js, PostgreSQL, Prisma, and Tailwind CSS, it integrates GPT-4 for AI-powered recommendations. The platform also includes peer-to-peer reviews with a points-based system, fostering a collaborative and engaging experience. Targeting freshers, experienced professionals, and programmers, it helps optimize resumes for job-specific success.',
    //     role: `As the sole developer and business owner, I:<br/>
    //     - Designed and developed the platform end-to-end using Next.js, PostgreSQL, Prisma, and Tailwind CSS.<br/>
    //     - Integrated GPT-4 for AI-driven feedback and insights.<br/>
    //     - Implemented complex SQL queries, including one to identify the top two resumes based on user points.`,
    // },
    // {
    //     title: 'Real Estate',
    //     slug: 'property-pro',
    //     techStack: [
    //         'React.js',
    //         'Redux',
    //         'Tailwind CSS',
    //         'React i18n',
    //         'Framer Motion',
    //     ],
    //     thumbnail: '/projects/thumbnail/property-pro.jpg',
    //     longThumbnail: '/projects/long/property-pro.jpg',
    //     images: [
    //         '/projects/images/property-pro-1.png',
    //         '/projects/images/property-pro-2.png',
    //         '/projects/images/property-pro-3.png',
    //     ],
    //     liveUrl: 'https://demo.propertypro.siphertech.com/',
    //     year: 2023,
    //     description:
    //         'PropertyPro is a real estate management platform offering users a seamless experience to explore, manage, and view property listings. The application emphasizes accessibility and responsive design, ensuring a smooth interface across devices.',
    //     role: `As the frontend developer, I:<br/>
    //     - Built the frontend using React, Redux, RTK Query, Framer Motion, and Tailwind CSS.<br/>
    //     - Integrated dynamic state management for efficient handling of property data.<br/>
    //     - Implemented multi-language support with React i18n to cater to diverse audiences.<br/>
    //     - Enhanced user interaction with animations and transitions using Framer Motion.`,
    // },
    // {
    //     title: 'Consulting Finance',
    //     slug: 'crenotive',
    //     techStack: ['HTML', 'CSS & SCSS', 'Javascript', 'Bootstrap'],
    //     thumbnail: '/projects/thumbnail/consulting-finance.jpg',
    //     longThumbnail: '/projects/long/consulting-finance.jpg',
    //     images: [
    //         '/projects/images/consulting-finance-1.png',
    //         '/projects/images/consulting-finance-2.png',
    //         '/projects/images/consulting-finance-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/crenotive',
    //     liveUrl: 'https://crenotive.netlify.app/',
    //     year: 2023,
    //     description:
    //         'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
    //     role: ``,
    // },
    // {
    //     title: 'devLinks',
    //     slug: 'devLinks',
    //     techStack: ['Next.js', 'Formik', 'Drag & Drop', 'Tailwind CSS'],
    //     thumbnail: '/projects/thumbnail/devLinks.jpg',
    //     longThumbnail: '/projects/long/devLinks.jpg',
    //     images: [
    //         '/projects/images/devLinks-1.png',
    //         '/projects/images/devLinks-2.png',
    //         '/projects/images/devLinks-3.png',
    //     ],
    //     sourceCode: 'https://github.com/Tajmirul/devsLink',
    //     liveUrl: 'https://devlinks-demo.vercel.app/auth/signin',
    //     year: 2023,
    //     description: `One of the most challenging projects in Frontend Mentor.<br/><br/>

    //         I developed a LinkSharing App as part of the Frontend Mentor challenge, utilizing React, Redux, and Tailwind CSS to create a responsive and feature-rich platform. The app allows users to share, save, and explore links, with a focus on intuitive design and smooth navigation. Advanced state management ensures efficient data handling for user interactions.`,
    //     role: ``,
    // },
    {
        title: 'GadMe E-commerce',
        slug: 'Gadgets',
        techStack: ['Node.js', 'React', 'MongoDB', 'Express.js'],
        thumbnail: '/projects/thumbnail/Gadme_ecommerce.png',
        longThumbnail: '/projects/long/Gadme_ecommerce.png',
        images: [
            '/projects/images/gadme_ecommerce-1.png',
            '/projects/images/gadme_ecommerce-2.png',
            '/projects/images/gadme_ecommerce-3.png',
        ],
        sourceCode: 'https://github.com/Thel3leacH/Gadme-Ecommerce',
        liveUrl: 'https://gadme-ecommerce-frontend.vercel.app',
        year: 2025,
        description:
            'I developed Crenotive, a portfolio website using Html, SASS, and jQuery to showcase services and expertise. The design focuses on responsive user experience and effective presentation of professional achievements.',
        role: ``,
    },
    {
        title: 'Rag-Notes AI Driven',
        slug: 'Rag-Notes',
        techStack: ['Node.js', 'React', 'MongoDB', 'OpenAI GPT'],
        thumbnail: '/projects/thumbnail/rag-notes-app_.png',
        longThumbnail: '/projects/long/rag-notes-app_.png',
        images: [
            '/projects/images/rag-notes-app-1.png',
            '/projects/images/rag-notes-app-2.png',
            '/projects/images/rag-notes-app-3.png',
        ],
        sourceCode: 'https://github.com/Thel3leacH/rag-notes-app-frontend',
        liveUrl: 'https://rag-notes-app-frontend.vercel.app',
        year: 2025,
        description: `The challenging project for connect frontend and backend together.<br/><br/>

            The Notes App is an educational project designed to demonstrate the implementation of a full-stack web application. It allows users to create, manage, and share notes. The app also includes advanced features such as semantic search and AI-powered question answering based on user notes.`,
        role: ``,
    },
    {
        title: 'Tracky',
        slug: 'Tracky',
        techStack: ['React', 'TailwindCSS', 'Node.js', 'MongoDB', 'OpenAI GPT'],
        thumbnail: '/projects/thumbnail/tracky.png',
        longThumbnail: '/projects/long/Tracky_dashboard.png',
        images: [
            '/projects/images/Tracky_dashboard-1.png',
            '/projects/images/Tracky_dashboard-2.png',
            '/projects/images/Tracky_dashboard-3.png',
        ],
        sourceCode:
            'https://github.com/Thel3leacH/JRD-personal-project-Thel3leacH',
        liveUrl: 'https://jrd-personal-project-thel3leac-h.vercel.app',
        year: 2025,
        description: `Web application for managing tasks, tracking habits, and viewing productivity overview with AI Assistant that helps assess user mood and prioritize tasks to increase work efficiency and mental health.<br/><br/>`,
        role: ``,
    },
];

export const MY_EXPERIENCE = [
    {
        title: 'Junior Software Developer (Learner Cohort 10)',
        company: 'Generation Thailand',
        duration: 'Jun 2025 - Present',
    },
    {
        title: 'Plant Engineer (Utility)',
        company: 'Fujikura Ltd.',
        duration: 'Apr 2024 - Dec 2024',
    },
    {
        title: 'Datacenter Operator',
        company: 'Internet Thailand Public Company Limited',
        duration: 'Oct 2019 - Sep 2024',
    },
];

import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInbox, faGlobe, faServer, faMobileScreenButton, faBrain, faPenRuler, faFaceGrinTongue, faPhone, faLocationDot, faFileLines } from '@fortawesome/free-solid-svg-icons';

export const navItems = ["About", "Services", "Experience", "Projects", "Contact"];
export const TagFilters = ["All", "Frontend", "Backend", "Mobile", "AI", "UI/UX", "Animation"];
const photoBasePath = "https://raw.githubusercontent.com/LanceAziz/personal-portfolio/refs/heads/main/public/images"
export const text = {
    heading: {
        photo: `${photoBasePath}/personal-photo.jpg`,
        name: "Lance Aziz",
        title: "Full Stack Developer",
        links: [
            {
                icon: faInbox,
                label: "Email",
                url: "mailto:lancemohebsamir@gmail.com",
            },
            {
                icon: faGithub,
                label: "Github",
                url: "https://github.com/LanceAziz/",
            },
            {
                icon: faLinkedin,
                label: "Linkedin",
                url: "https://www.linkedin.com/in/lance-aziz-316945316/",
            },
            {
                icon: faFileLines,
                label: "Resume",
                url: "https://docs.google.com/document/d/14tzhicIfH_qGyoVze6qGKLw4eLjATuHmRNwul2mI5Rw/export?format=pdf",
            },

        ]
    },
    about: {
        title: "About Me",
        content: {
            p1: "I'm Lance Aziz, a Full Stack Developer skilled in frontend, backend, and mobile development, with experience using React, Next.js, Flask, Django, Jetpack Compose, and React Native. Alongside my development work, I have a strong foundation in 2D and 3D animation and motion graphics, using tools like Photoshop, After Effects, Illustrator, Adobe Animator, Cinema 4D, and Blender. This blend of creativity and technical skill has fueled my passion for solving complex problems.",
            p2: "I'm currently expanding my knowledge in AI, exploring advanced applications in machine learning and computer vision. The journey is just beginning—let’s see what the future has in store."
        }
    },
    sevices: {
        title: "Services",
        list: [
            {
                icon: faGlobe,
                title: "Frontend Development",
                Description: "Creating responsive and user-friendly interfaces using React, Next.js, and other modern frameworks."
            },
            {
                icon: faServer,
                title: "Backend Development",
                Description: "Building robust server-side applications with Flask, Django, and other backend technologies."
            },
            {
                icon: faMobileScreenButton,
                title: "Mobile Development",
                Description: "Developing cross-platform mobile applications using React Native and Jetpack Compose."
            },
            {
                icon: faBrain,
                title: "AI & Machine Learning",
                Description: "Implementing AI solutions and machine learning models to enhance application functionality."
            },
            {
                icon: faPenRuler,
                title: "UI/UX",
                Description: "Crafting user-centric interfaces that deliver clarity, consistency, and measurable engagement."
            },
            {
                icon: faFaceGrinTongue,
                title: "Animation",
                Description: "Creating captivating animations and motion graphics for web and mobile applications."
            }
        ]
    },
    experience: {
        title: "Experience & Education",
        list: [
            {
                "title": "Full Stack Developer",
                "company": "Cypod Solutions",
                "duration": {
                    "start": "May 2025",
                    "end": "Present"
                },
                "isCurrent": true,
                "description": [
                    "Built and scaled full-stack solutions by developing a <b>Next.js</b> web dashboard for real-time control, analytics, and reporting, alongside backend services primarily in <b>Python (Flask)</b> and selected services in <b>Golang</b>, handling business logic, device operations, authentication, and integrations, with performance optimization through <b>Redis-based caching</b>.",
                    "Designed and implemented <b>Pub/Sub–based, event-driven architectures</b> to decouple services and improve scalability, leveraging <b>MQTT</b> topic-based communication implemented using <b>Node.js</b> and <b>Golang</b> for real-time IoT messaging, <b>Apache Kafka</b> for high-throughput event streaming between services, and <b>RabbitMQ</b> with <b>Celery</b> for reliable asynchronous processing and background job execution.",
                    "Took ownership of the mobile application built with <b>React Native</b>, leading feature development, API integration, bug fixing, and production readiness, and successfully deployed ETIT2GO to both the <a href=\"https://apps.apple.com/eg/app/etit2go/id6751882502\" target=\"_blank\" rel=\"noopener noreferrer\">Apple App Store</a> and <a href=\"https://play.google.com/store/apps/details?id=com.cyfleet&hl=ar\" target=\"_blank\" rel=\"noopener noreferrer\">Google Play Store</a>, managing build pipelines, configurations, store compliance, and release cycles.",
                    "Took responsibility for <b>DevOps and production infrastructure</b>, managing <b>Docker</b> images on physical (on-premise) machines, including offline image distribution and deployment workflows, and implementing centralized logging and observability using <b>Grafana Loki</b> to support monitoring, debugging, and system stability in production environments."
                ]
            },
            {
                "title": "Android Developer",
                "company": "Atos",
                "duration": {
                    "start": "Oct 2024",
                    "end": "Jan 2025"
                },
                "isCurrent": false,
                "description": [
                    "Developed \"Tweety Tube\", a native Android app for movie display using <b>Java</b>, <b>Kotlin</b>, <b>MVVM</b>, <b>clean architecture</b>, and <b>Jetpack Compose</b>, delivering a seamless user experience.",
                    "Collaborated with integration and backend teams to implement authentication systems.",
                    "Strengthened skills in Agile methodologies and state management, <u>attending workshops including one led by Philip Lackner.</u>"
                ]
            },
            {
                "title": "Junior Animator",
                "company": "Squares for media production",
                "duration": {
                    "start": "Dec 2022",
                    "end": "Jan 2024"
                },
                "isCurrent": false,
                "description": [
                    "<u>3-month virtual internship with Pixar</u> (online due to COVID-19) focused on character animation and motion design.",
                    "Created 2D & 3D characters and assets using <b>Photoshop</b>, <b>Illustrator</b>, <b>Blender</b>, and <b>Cinema 4D</b>.",
                    "Produced animations and motion graphics with <b>After Effects</b> and <b>Character Animator</b> using keyframe animation."
                ]
            },
            {
                "title": "Junior Motion Graphics",
                "company": "Kinetics Egypt",
                "duration": {
                    "start": "Jul 2021",
                    "end": "Aug 2021"
                },
                "isCurrent": false,
                "description": [
                    "Completed a two-week intensive training program focusing on motion graphics design for social media.",
                    "Developed and delivered a complete project independently, utilizing tools like Adobe <b>After Effects</b> and <b>Illustrator</b>.",
                    "Assisted in creating visually appealing posters and animations that aligned with client branding and marketing strategies."
                ]
            },
            {
                "title": "Network Engineer",
                "company": "Saint Fatima Language School",
                "duration": {
                    "start": "Jul 2020",
                    "end": "Oct 2020"
                },
                "isCurrent": false,
                "description": [
                    "Diagnosed and repaired hardware/software issues on school computers, minimizing downtime.",
                    "Managed the school's network (routers, switches, Wi-Fi, LAN/WAN) using knowledge from <b>Cisco Networking Fundamentals</b>."
                ]
            },
            {
                "title": "B.S, Computers and Artificial Intelligence",
                "company": "Modern university for technology and information (MTI)",
                "duration": {
                    "start": "Oct 2020",
                    "end": "Jul 2024"
                },
                "isCurrent": false,
                "description": "Completed a Bachelor's degree in Computers and Artificial Intelligence with a <b>GPA of 3.13</b>, including my graduation project: <a href=\"https://github.com/LanceAziz/Human-Gait-Identification\" target=\"_blank\" rel=\"noopener noreferrer\">Human Gait Identification</a>."
            }
        ]
    },
    projects: {
        title: "Projects",
        list: [
            {
                photo: `${photoBasePath}/Projects/Photo12.png`,
                title: "Football Live Scoring",
                description: "A fullstack website that lets users simulate live football matches.",
                tags: ["Fullstack", "Frontend", "Backend", "UI/UX", "Next.js", "Bootstrap", "App Scripts", "JavaScript", "Firebase"],
                date: "Jul 2025",
                link: "https://github.com/LanceAziz/football-scoring"
            },
            {
                photo: `${photoBasePath}/Projects/Photo11.png`,
                title: "Map Game",
                description: "A fullstack website that simulates a game of winning coutries by answering questions about them.",
                tags: ["Fullstack", "Frontend", "Backend", "UI/UX", "Next.js", "Bootstrap", "App Scripts", "JavaScript", "Redux"],
                date: "Jun 2025",
                link: "https://github.com/LanceAziz/Map-Game"
            },
            {
                photo: `${photoBasePath}/Projects/Photo10.png`,
                title: "Tweety Tube",
                description: "A native mobile application that manages movies using Jectpack compose.",
                tags: ["Mobile", "Android", "Java", "Kotlin", "Jetpack Compose", "MVVM", "Clean Architecture", "UI/UX"],
                date: "Jan 2025",
                link: "https://github.com/LanceAziz/tweety-tube"
            },
            {
                photo: `${photoBasePath}/Projects/Photo9.png`,
                title: "Queueing System",
                description: "A fullstack Deployed Website that organize and manage the queue of clients.",
                tags: ["Fullstack", "Frontend", "Backend", "Next.js", "Tailwind", "Python", "Django", "JWT", "MySQL", "Docker", "TTS", "JavaScript", "Embedded Systems", "UI/UX"],
                date: "Oct 2024",
                link: "https://github.com/LanceAziz/queueing-system"
            },
            {
                photo: `${photoBasePath}/Projects/Photo8.png`,
                title: "Human Gait Identification",
                description: "A fullstack Deep learning graduation project that uses the humman pattern of walking as a biometric identifier.",
                tags: ["Fullstack", "Frontend", "Backend", "DeepLearning", "Computer Vision", "AI", "Next.js", "Flask", "Python", "JavaScript", "UI/UX"],
                date: "Jul 2024",
                link: "https://github.com/LanceAziz/Human-Gait-Identification"
            },
            {
                photo: `${photoBasePath}/Projects/Photo7.png`,
                title: "Numerical Analysis Calculator",
                description: "A frontend mini-project that calculates difficult and advanced mathematical problems.",
                tags: ["Frontend", "Algorithms", "HTML", "Bootstrap", "JavaScript", "Math.js", "UI/UX"],
                date: "Jun 2023",
                link: "https://github.com/LanceAziz/Numerical-Analysis-Calculator"
            },
            {
                photo: `${photoBasePath}/Projects/Photo6.png`,
                title: "GunShop",
                description: "A fullstack e-commerce mini-project that sells guns applying CRUD operations.",
                tags: ["Fullstack", "Frontend", "Backend", "HTML", "CSS", "JavaScript", "PHP"],
                date: "May 2023",
                link: "https://github.com/LanceAziz/GunShop"
            },
            {
                photo: `${photoBasePath}/Projects/Photo5.png`,
                title: "Holy Week",
                description: "A 2D animated hymn broadcasted on TV during Holy Week.",
                tags: ["Animation", "2D", "Illustration", "Illustrator", "After Effects"],
                date: "Apr 2023",
                link: "https://www.behance.net/gallery/168087339/Project-Illustration-Holy-Week-2023"
            },
            {
                photo: `${photoBasePath}/Projects/Photo4.png`,
                title: "Debo",
                description: "A 2D animated show series designed for kids, where a cartoon character interacts live with a person to share fun and meaningful life lessons.",
                tags: ["Animation", "2D", "Character Design", "Illustration", "Rigging", "Illustrator", "After Effects", "Character Animator"],
                date: "Jan 2023",
                link: "https://www.behance.net/gallery/167985119/Project-Illustration-Debo"
            },
            {
                photo: `${photoBasePath}/Projects/Photo3.png`,
                title: "Wakko",
                description: "Produced a live animated experience for kids, featuring real-time interaction with a cartoon character designed to entertain and engage young audiences.",
                tags: ["Animation", "3D", "Character Design", "Modeling", "Texturing", "Rigging", "Morph shapes", "Apple AR Kit", "Blender", "Unreal Engine"],
                date: "Dec 2022",
                link: "https://www.behance.net/gallery/167989191/Project-3D-14"
            },
            {
                photo: `${photoBasePath}/Projects/Photo2.png`,
                title: "Mello",
                description: "Prototype Test, featuring real-time interaction with a cartoon character designed to entertain and engage young audiences.",
                tags: ["Animation", "3D", "Character Design", "Modeling", "Texturing", "Rigging", "Morph shapes", "Blender"],
                date: "Aug 2022",
                link: "https://www.behance.net/gallery/167988683/Project-3D-11"
            },
            {
                photo: `${photoBasePath}/Projects/Photo1.png`,
                title: "Remy the rat",
                description: "Created a captivating short animated movie, blending storytelling and visual effects to deliver an engaging cinematic experience.",
                tags: ["Animation", "3D", "Modeling", "Texturing", "Rigging", "Blender"],
                date: "May 2020",
                link: "https://www.behance.net/gallery/167989191/Project-3D-14"
            },
        ]
    },
    contact: {
        title: "Contact Me",
        isBusy: null,
        details: [
            {
                icon: faInbox,
                title: "Email",
                value: "lancemohebsamir@gmail.com"
            },
            {
                icon: faPhone,
                title: "Phone",
                value: "+201206388842"
            },
            {
                icon: faLocationDot,
                title: "Location",
                value: "Cairo, Egypt"
            },
        ]
    }
}
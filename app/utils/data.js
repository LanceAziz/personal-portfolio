import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInbox, faGlobe, faServer, faMobileScreenButton, faBrain, faPenRuler, faFaceGrinTongue } from '@fortawesome/free-solid-svg-icons';

export const navItems = ["About", "Services", "Experince", "Projects", "Testimonials", "Contact"];
export const text = {
    heading: {
        photo: "/images/personal-photo.jpg",
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
        ]
    },
    about: {
        title: "About Me",
        content: {
            p1: "I'm Lance Aziz, a Full Stack Developer skilled in frontend, backend, and mobile development, with experience using React, Next.js, Flask, Django, Jetpack Compose, and React Native. Alongside my development work, I have a strong foundation in 2D and 3D animation and motion graphics, using tools like Photoshop, After Effects, Illustrator, Adobe Animator, Cinema 4D, and Blender. This blend of creativity and technical skill has fueled my passion for solving complex problems—most notably in my graduation project on human identification using gait recognition.",
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
                "description": "Contributed to IoT-based B2B solutions by developing and maintaining software to manage physical devices such as Cy-Tag, Cy-Seal, and Cy-Lock. Built and enhanced the Cypod Dashboard using Next.js to provide clients with real-time control and analytics. Developed backend services in Python Flask to handle device operations and business logic. Implemented MQTT broker logic in Node.js, enabling secure communication between IoT devices and the server using topic-based subscriptions. Supported the mobile application using React Native, ensuring seamless integration with device APIs and dashboard features."
            },
            {
                "title": "Android Developer",
                "company": "Atos",
                "duration": {
                    "start": "Oct 2024",
                    "end": "Jan 2025"
                },
                "isCurrent": false,
                "description": "Developed 'Tweety Tube', a native Android app for movie display using Java, Kotlin, MVVM, clean architecture, and Jetpack Compose, delivering a seamless user experience. Collaborated with integration and backend teams to implement authentication systems. Strengthened skills in Agile methodologies and state management, attending workshops including one led by Philip Lackner."
            },
            {
                "title": "Part-Time Junior Animator",
                "company": "Squares Smart Solutions",
                "duration": {
                    "start": "Dec 2022",
                    "end": "Jan 2024"
                },
                "isCurrent": false,
                "description": "Collaborated in a dynamic team environment to create both 2D and 3D animated characters and objects. Utilized advanced animation software to develop detailed animations and visual effects. Applied principles of motion graphics and keyframe animation to enhance storytelling."
            },
            {
                "title": "Junior Motion Graphics Trainee",
                "company": "Kinetics Egypt",
                "duration": {
                    "start": "Jul 2021",
                    "end": "Aug 2021"
                },
                "isCurrent": false,
                "description": "Completed a two-week intensive training program focusing on motion graphics design for social media. Developed and delivered a complete project independently, utilizing tools like Adobe After Effects and Illustrator. Assisted in creating visually appealing posters and animations that aligned with client branding and marketing strategies."
            },
            {
                "title": "IT Trainee",
                "company": "Saint Fatima Language School",
                "duration": {
                    "start": "Jul 2020",
                    "end": "Oct 2020"
                },
                "isCurrent": false,
                "description": "Diagnosed and repaired hardware and software issues on school computers, ensuring minimal downtime. Managed and maintained the school's network infrastructure, including troubleshooting connectivity issues and optimizing network performance. Provided technical support and training to staff, enabling them to efficiently use software tools to improve workflow and productivity."
            },
            {
                "title": "B.S, Computers and Artificial Intelligence",
                "company": "Modern University for Technology and Information",
                "duration": {
                    "start": "Oct 2020",
                    "end": "Jul 2024"
                },
                "isCurrent": false,
                "description": "Completed a Bachelor's degree in Computers and Artificial Intelligence with a GPA of 3.13."
            }
        ]
    },
}
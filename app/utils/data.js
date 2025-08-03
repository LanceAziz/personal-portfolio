import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

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
                url: "lancemohebsamir@gmail.com",
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
        content:{
            p1: "I'm Lance Aziz, a Full Stack Developer skilled in frontend, backend, and mobile development, with experience using React, Next.js, Flask, Django, Jetpack Compose, and React Native. Alongside my development work, I have a strong foundation in 2D and 3D animation and motion graphics, using tools like Photoshop, After Effects, Illustrator, Adobe Animator, Cinema 4D, and Blender. This blend of creativity and technical skill has fueled my passion for solving complex problems—most notably in my graduation project on human identification using gait recognition.",
            p2: "I'm currently expanding my knowledge in AI, exploring advanced applications in machine learning and computer vision. The journey is just beginning—let’s see what the future has in store."
        }
    },
}
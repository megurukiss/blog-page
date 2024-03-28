// Backend Expertise
import NodeIcon from "assets/devicon/node.svg?component";
// Frontend Expertise
import VueIcon from "assets/devicon/vuejs.svg?component";
import NuxtIcon from "assets/devicon/nuxt.svg?component";
import JavaIcon from "assets/devicon/java.svg?component";
import JavascriptIcon from "assets/devicon/javascript.svg?component";
import SpringIcon from "assets/devicon/springio-icon.svg?component";
import MySqlIcon from "assets/devicon/mysql-icon.svg?component";
import RedisIcon from "assets/devicon/redis-logo-svgrepo-com.svg?component";
// Timeline
import Home from "assets/icons/home.svg?component";
import Academy from "assets/icons/academy.svg?component";

const author = {
    author_image: "/author.png",
    name: "Chenze Fan",
    position: "Student at UCSD",
    email: "chf007@ucsd.edu",
    location: "San Diego, CA",
    github: "megurukiss",
    socials: {
        github:"https://github.com/megurukiss",
        twitter: "#",
        stackoverflow: "#",
        youtube: "#",
        linkedin: "#",
        facebook: "#",
    },
    expertises: {
        "Frontend": [
            // {
            //     name: "Bootstrap",
            //     icon: BootstrapIcon,
            //     description: "",
            // },
            // {
            //     name: "Tailwind",
            //     icon: TailwindCssIcon,
            //     description: "",
            // },
            {
                name: "Javascript",
                icon: JavascriptIcon,
                description: "",
            },
            {
                name: "VueJS",
                icon: VueIcon,
                description: "",
            },
            {
                name: "Nuxt 3",
                icon: NuxtIcon,
                description: "",
            }
        ],
        "Backend": [
            // {
            //     name: "Laravel",
            //     icon: LaravelIcon,
            //     description: "",
            // },
            {
                name: "NodeJs",
                icon: NodeIcon,
                description: "",
            },
            {
                name: "Java",
                icon: JavaIcon,
                description: "",
            },
            {
                name: "Spring",
                icon: SpringIcon,
                description: "",
            },
            {
                name: "MySql",
                icon: MySqlIcon,
                description: "",
            },
            {
                name: "Redis",
                icon: RedisIcon,
                description: "",
            }
        ]
    },
    timeline: [
        {
            icon: Academy,
            currently: true,
            title: "2023 - University of California, San Diego",
            subtitle: "2023-Currently",
            description: "Studying \"MS in Data Science\" in University of California, San Diego. Also working as a research assistant in MOSAIC Lab."
        },
        {
            icon: Academy,
            title: "Machine Learning Engineer Intern at Microport Medical",
            subtitle: "2022.06-2022.11",
            description: "Responsible for the development of machine learning algorithms for medical images classfication.",
        },
        {
            icon: Academy,
            title: "2018 - Tongji University ",
            subtitle: "2018 - 2022",
            description: "Studied \"BSC in Statistics \" in Tongji University.",
        },
        {
            icon: Home,
            title: "Born in 2000, March 03",
            subtitle: "Zhenjiang, China",
            description: "",
        }
    ],
};

export default author;

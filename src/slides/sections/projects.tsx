import Slide from "../../components/slide";
import SectionNavBar from "../../components/sectionNavBar";

import { SocialIcons } from "../../assests/Icons/socialIcons";
import { useAppSelector, useAppDispatch } from "../../states/hooks";
import { closeSection } from "../../states/sectionSlice";
import { useEffect, useState } from "react";
import Helper from "../../helper/helper";

import projectImagePlaceHolder from "../../assests/project-image-holder.png";
import fullstackAdminMern from "../../assests/project_images/fullstack-admin-mern.png";
import markdownEditor from "../../assests/project_images/Markdown-Editor-0.2v.png";
import todoApp from "../../assests/project_images/todo_app.png";
import calculatorApp from "../../assests/project_images/calculator_app.png";
import garageManagementSystem from "../../assests/project_images/gms.png";
import crmSystem from "../../assests/project_images/crm-system.jpg";
import dataScrapingSoftware from "../../assests/project_images/Data-Scraping-0.1v.png"


interface props {
    ViewportSize: number[],
    className?: string,
    ismobile?: boolean
}
interface ismobile {
    ismobile?: boolean
}
type childrenProps = props & ismobile;

const iconColor = "#ffffff";

const projectList = [
    {
        name: 'Fullstack Admin Panel',
        date: '2023/12',
        details: 'Modern and responsive admin panel with dynamic dashboards, data visualization, and client management, ensuring seamless control over business operations.',
        imageURL: fullstackAdminMern,
        technology: ['NodeJS', 'Javascript', 'Docker', 'MongoDB', 'Express', 'ReactJS'],
        socialIconList: [
            {
                icon: SocialIcons(iconColor).github,
                url: "https://github.com/aselapasinduD/fullstack-admin-mern",
                title: 'GitHub'
            },
            {
                icon: SocialIcons(iconColor).web,
                url: "https://admin-frontend-wjs8.onrender.com",
                title: 'Published Website'
            },
        ]
    },
    {
        name: 'Markdown Editor',
        date: '2023/12',
        details: 'Feature-rich Markdown editor built with TypeScript and Electron, offering live preview, syntax highlighting, and seamless formatting for enhanced content creation.',
        imageURL: markdownEditor,
        technology: ['NodeJS', 'TypeScript', 'Express', 'Vite', 'ReactJS'],
        socialIconList: [
            {
                icon: SocialIcons(iconColor).github,
                url: "https://github.com/aselapasinduD/Markdown-Editor-electron",
                title: 'GitHub'
            }
        ]
    },
    {
        name: 'Python Todo App',
        date: '2023/03',
        details: 'This is a personal project I created for fun using Python and the Tkinter library to build a simple and functional Todo App.',
        imageURL: todoApp,
        technology: ['Python', 'Tkinter'],
        socialIconList: [
            {
                icon: SocialIcons(iconColor).github,
                url: "https://github.com/aselapasinduD/Todo_App",
                title: 'GitHub'
            }
        ]
    },
    {
        name: 'Calculator App',
        date: '2023/02',
        details: 'This calculator app, built using JavaScript, HTML, and CSS, features a sleek design with intuitive functionality, ideal for learning and exploring front-end development basics.',
        imageURL: calculatorApp,
        technology: ['HTML', 'CSS', 'Javascript'],
        socialIconList: [
            {
                icon: SocialIcons(iconColor).github,
                url: "https://github.com/aselapasinduD/Calculator-app-javascript",
                title: 'GitHub'
            },
            {
                icon: SocialIcons(iconColor).codePen,
                url: "https://codepen.io/aselapasinduD/full/NWBXJzL",
                title: 'Codepen'
            },
            {
                icon: SocialIcons(iconColor).web,
                url: "https://aselapasindud.github.io/Calculator-app-javascript",
                title: 'Published Website'
            }
        ]
    },
    {
        name: 'Garage Management System',
        date: '2024/01',
        details: 'This Garage Management System was created as a prototype to modernize garage operations, streamline services, and empower admins to oversee employee activities while managing services and billing effectively.',
        imageURL: garageManagementSystem,
        technology: ['C#', 'TSQL', '.NET'],
        socialIconList: [
            {
                icon: SocialIcons(iconColor).github,
                url: "https://github.com/aselapasinduD/Garage-Management-System",
                title: 'GitHub'
            },
            {
                icon: SocialIcons(iconColor).linkedin,
                url: "https://www.linkedin.com/posts/asela-pasindu-dias_im-happy-to-share-this-garage-management-activity-7164057467511853057-N-ZB?utm_source=share&utm_medium=member_desktop",
                title: 'LinkedIn'
            }
        ]
    },
    {
        name: 'CRM Web App with Django',
        date: '2024/02',
        details: 'This CRM Web App, built with Django, features user authentication, CRUD functionality, superuser controls, and supports both MySQL (development) and PostgreSQL (production) databases. Easily deployable via Render.',
        imageURL: crmSystem,
        technology: ['Django','Python', 'HTML'],
        socialIconList: [
            {
                icon: SocialIcons(iconColor).github,
                url: "https://github.com/aselapasinduD/Garage-Management-System",
                title: 'GitHub'
            },
            {
                icon: SocialIcons(iconColor).linkedin,
                url: "https://www.linkedin.com/posts/asela-pasindu-dias_djangodeveloper-pythonprogramming-webdevelopment-activity-7165579219257810944-D-9X?utm_source=share&utm_medium=member_desktop",
                title: 'LinkedIn'
            },
            {
                icon: SocialIcons(iconColor).web,
                url: "https://crm-web-app-hi7g.onrender.com",
                title: 'Published Website'
            }
        ]
    },
    {
        name: 'Data Scraping Software for Telegram(CLI)',
        date: '2023/10',
        details: 'Developed a tool specifically for Telegram to extract user data. Key features include listing Telegram channels/groups, automating user addition, and managing users via CSV files for seamless data handling.',
        imageURL: dataScrapingSoftware,
        technology: ['Python', 'Telethon Python Lib'],
        socialIconList: [
            {
                icon: SocialIcons(iconColor).github,
                url: "https://github.com/aselapasinduD/Data_Scraping_Software",
                title: 'GitHub'
            }
        ]
    }
]

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {ViewportSize, className, ismobile} = childrenProps;
    const dispatch = useAppDispatch();
    const helper = new Helper();

    const isOpenProjectsSection = useAppSelector((state) => state.section.projectsSection);

    const [titleAnimate, setTitleAnimate] = useState<string[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [titleIndex, setTitleIndex] = useState<number>(0);

    const title = "PROJECTS";

    useEffect(() => {
        if(isOpenProjectsSection){
            helper.StringAnimation(0.2, title, titleIndex, counter, setTitleIndex, setCounter, setTitleAnimate, true, false)
        } else {
            setCounter(0);
            setTitleIndex(0);
        }
    }, [counter, titleIndex, isOpenProjectsSection]);

    const projectCardStyle = {
        '--card-width': '290px',
        '--card-height': '450px',
        '--card-height-mobile': '380px'
    } as React.CSSProperties;

    return(
        <div className="bg-black w-[100%] h-[100%] overflow-y-scroll pb-[15%] sm:pb-[10%]">
            <SectionNavBar title={titleAnimate[0]} handleBackButton={() => dispatch(closeSection('projectsSection'))} ismobile={ismobile} classNameForBackButton='z-10' />
            <div className="project-list flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4 p-3 sm:p-4" style={projectCardStyle}>
                {projectList.map((project, index) =>
                    <div key={index} className="project-card relative w-full sm:w-[var(--card-width)] h-[var(--card-height-mobile)] sm:h-[var(--card-height)] border border-[var(--secondary-color)] overflow-hidden">
                        <div className="project-card-top relative h-1/2 bg-[#ffffff] flex justify-center items-center overflow-hidden">
                            <img src={project.imageURL !== ''? project.imageURL : projectImagePlaceHolder} alt="Project Main Image" className="project-card-image h-full w-full object-cover"/>
                            <div className="project-card-inside absolute w-[140%] aspect-square bg-[var(--secondary-color)] top-1/2 left-1/2 translate-x-[calc(var(--card-width)/2)] translate-y-[calc(var(--card-height)/4)] rounded-[999999px]">
                            </div>
                        </div>
                        <div className="relative h-1/2 p-2 bg-[var(--primary-color)]">
                            <hr />
                            <div className="flex justify-between items-center mt-1">
                                <h4 className="text-[1.1rem] font-semibold leading-none">{project.name}</h4>
                                <p className="text-[0.8rem]">{project.date}</p>
                            </div>
                            <div className="flex gap-x-1 flex-wrap w-4/5">
                                {project.technology.map((technology, index) =>
                                    <p key={index} className="text-[0.8rem] leading-none">{technology}{index != project.technology.length - 1? '/':''}</p>
                                )}
                            </div>
                            <div className="flex gap-2 my-1">
                                {project.socialIconList.map((socialIcon, index) =>
                                    <span key={index} className="socialIcon block [&_svg]:w-[25px] [&_svg]:h-[25px]">
                                        <a href={socialIcon.url} title={socialIcon.title} target="_blank">{socialIcon.icon}</a>
                                    </span>
                                )}
                            </div>
                            <div className="h-3/5 overflow-y-auto py-1 [scrollbar-width:thin]">
                                <p className="text-[1rem] leading-[1.1] px-1">{project.details}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const Projects = (props: props) => {
    const {ViewportSize} = props;
    const isOpenSection = useAppSelector((state) => state.section.projectsSection);

    const closeSection = () => {
        const contactElement = document.getElementById("projects")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
        if(contactElement) contactElement.transitionDuration = '0.5s';
    }
    const openSection = () => {
        const contactElement = document.getElementById("projects")?.style;
        if(contactElement) contactElement.bottom = '0px';
        if(contactElement) contactElement.transitionDuration = '0.2s';
    }

    if(isOpenSection){
        openSection();
    } else {
        closeSection();
    }

    return(
        <Slide id="projects" className={`translate-x-[-4px] sm:translate-x-[-12px] xl:translate-x-[-50px]`} >
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Projects;
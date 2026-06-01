import Slide from "../components/slide";
import SectionNavBar from "../components/sectionNavBar";
import ContactButtons from "../components/contactButtons";

import Experiences from "./sections/experiences";
import Projects from "./sections/projects";
import Skills from "./sections/skills";

import "./styles/aboutme.css";
import "./styles/sectionsSlideAnimation.css";

import { useEffect, useState } from "react";
import Helper from "../helper/helper";
import { useAppSelector, useAppDispatch } from "../states/hooks";
import { closeSection, toggleSection } from "../states/sectionSlice";

interface props {
    ViewportSize: number[];
    className?: string;
}

interface ismobile {
    ismobile?: boolean
}

type childrenProps = props & ismobile;

type SectionKeys = 'skills' | 'experiences' | 'projects';

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {ViewportSize, className, ismobile} = childrenProps;
    const isOpenAboutSection = useAppSelector((state) => state.section.aboutMeSection);
    const dispatch = useAppDispatch();
    const helper = new Helper();

    const [skillsSection, setSkillsSection] = useState<string[]>([]);
    const [counterSkillsSection, setCounterSkillsSection] = useState<number>(0);
    const [skillsSectionIndex, setSkillsSectionIndex] = useState<number>(0);

    const [experiencesSection, setExperiencesSection] = useState<string[]>([]);
    const [counterExperiencesSection, setCounterExperiencesSection] = useState<number>(0);
    const [experiencesSectionIndex, setExperiencesSectionIndex] = useState<number>(0);

    const [projectsSection, setProjectsSection] = useState<string[]>([]);
    const [counterProjectsSection, setCounterProjectsSection] = useState<number>(0);
    const [projectsSectionIndex, setProjectsSectionIndex] = useState<number>(0);

    const [titleAnimate, setTitleAnimate] = useState<string[]>([]);
    const [counterTitle, setCounterTitle] = useState<number>(0);
    const [titleIndex, setTitleIndex] = useState<number>(0);

    const sectionList = ["SKILLS", "EXPERIENCES", "PROJECTS"];

    const title = "WHO AM I";

    useEffect(() => {
        if(isOpenAboutSection){
            helper.StringAnimation(0.5, sectionList[0], skillsSectionIndex, counterSkillsSection, setSkillsSectionIndex, setCounterSkillsSection, setSkillsSection, true, false)
        } else {
            setCounterSkillsSection(0);
            setSkillsSectionIndex(0);
        };
    }, [counterSkillsSection, skillsSectionIndex, isOpenAboutSection]);
    useEffect(() => {
        if(isOpenAboutSection){
            helper.StringAnimation(0.3, sectionList[1], experiencesSectionIndex, counterExperiencesSection, setExperiencesSectionIndex, setCounterExperiencesSection, setExperiencesSection, true, false)
        } else {
            setCounterExperiencesSection(0);
            setExperiencesSectionIndex(0);
        };
    }, [counterExperiencesSection, experiencesSectionIndex, isOpenAboutSection]);
    useEffect(() => {
        if(isOpenAboutSection){
            helper.StringAnimation(0.4, sectionList[2], projectsSectionIndex, counterProjectsSection, setProjectsSectionIndex, setCounterProjectsSection, setProjectsSection, true, false)
        } else {
            setCounterProjectsSection(0);
            setProjectsSectionIndex(0);
        };
    }, [counterProjectsSection, projectsSectionIndex, isOpenAboutSection]);
    useEffect(() => {
        if(isOpenAboutSection){
            helper.StringAnimation(0.2, title, titleIndex, counterTitle, setTitleIndex, setCounterTitle, setTitleAnimate, true, false)
        } else {
            setCounterTitle(0);
            setTitleIndex(0);
        }
    }, [counterTitle, titleIndex, isOpenAboutSection]);

    return (
        <div className={`aboutme flex flex-col bg-black w-[100%] h-[100%] ${className? className : ""}`}>
            <SectionNavBar title={titleAnimate[0]} handleBackButton={() => dispatch(closeSection('aboutMeSection'))} ismobile={ismobile} />
            <div className="
                text-[1.2rem] flex flex-col absolute right-[12px] top-[76px]
                [&_h1]:leading-[3rem] [&_h1]:text-left
                mb390:text-[1.4rem] mb390:[&_h1]:leading-tight mb390:top-[92px]
                sm:text-[1.8rem] sm:mr-[50px]
                md:text-[1.9rem] md:top-[100px] md:right-[45px]
                lg:top-[180px] lg:text-[2rem] lg:right-[60px]
            ">
                <button type="button" onClick={() => dispatch(toggleSection('skillsSection'))}>
                    <h1 className="transition-opacity duration-200 hover:opacity-70">{skillsSection[0]}</h1>
                </button>
                <button type="button" onClick={() => dispatch(toggleSection('experiencesSection'))}>
                    <h1 className="transition-opacity duration-200 hover:opacity-70">{experiencesSection[0]}</h1>
                </button>
                <button type="button" onClick={() => dispatch(toggleSection('projectsSection'))}>
                    <h1 className="transition-opacity duration-200 hover:opacity-70">{projectsSection[0]}</h1>
                </button>
            </div>
            <div className="
                flex-grow flex flex-col justify-around leading-none
                mb-[54px] text-[0.9rem] px-[2px]
                mb390:px-[6px] mb390:text-[1.1rem]
                sm:text-[1.4rem]
                md:justify-evenly md:text-[1.5rem]
                lg:text-[1.5rem] lg:ml-[80px] lg:mb-[20px]
            ">
                <p className={`
                    w-[50%] font-bold
                    lg:w-[500px]
                `}>
                    Hello. I'm Asela Pasindu Dias. I am genuinely passionate about full-stack development and am dedicated to improving my skills through both university education and self-study.
                </p>
                <p className={`
                    font-light
                    lg:w-[500px] lg:ml-[100px]
                `}>
                    While I am still learning, I have gained industry-level experience with a range of programming languages and frameworks. I prefer problem-solving, research, and continual progress, and I am always eager to take on new challenges and improve my skills.
                </p>
                <p className={`
                    font-light
                    lg:w-[640px] lg:ml-[200px]
                `}>
                    I prefer not to use my past work to define who I am. I define myself by the work I want to do. Although personality cannot be taught, skills can. I prefer to continue learning, to challenge myself, and to engage in worthwhile activities.
                </p>
                <p className={`
                    font-light
                    lg:w-fit lg:ml-[200px]
                `}>
                    I'm passionate about learning new things and conducting research. I have published on Medium.com about my research and my ideas. I'm an enthusiast of science, quantum physics, astronomy, and UAP (UFO).
                </p>
                <p className={`
                    w-fit font-light
                    lg:w-[650px]
                `}>
                    Over the course of my life and profession, I like to gain competence in a variety of subjects. I am an ENFJ-T personality type. I now conduct remote work with a chosen group of freelancing clients, but I'm always interested in new opportunities.
                </p>
            </div>
            <div className={`
                absolute ml-[10px] top-[210px] blur-[2px] [&>svg]:w-[230px]
                lg:top-[280px] lg:ml-[30px] lg:blur-[0px]
            `}>
                <svg height="385">
                    <polygon points="2,6 2,260 220,380" fill="transparent" stroke="#ff6600" strokeWidth="3" />
                </svg>
            </div>
            <ContactButtons ismobile={ismobile} ViewportSize={ViewportSize} className="z-[9999]" />
            <Skills ViewportSize={ViewportSize} ismobile={ismobile} />
            <Experiences ViewportSize={ViewportSize} ismobile={ismobile} />
            <Projects ViewportSize={ViewportSize} ismobile={ismobile} />
        </div>
    );
}

const AboutMe = (props: props) => {
    const {ViewportSize} = props;
    const isOpenAboutSection = useAppSelector((state) => state.section.aboutMeSection);

    const closeSection = () => {
        const contactElement = document.getElementById("aboutme")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
        if(contactElement) contactElement.transitionDuration = '0.5s';
    }
    const openSection = () => {
        const contactElement = document.getElementById("aboutme")?.style;
        if(contactElement) contactElement.bottom = '0px';
        if(contactElement) contactElement.transitionDuration = '0.2s';
    }

    if(isOpenAboutSection){
        openSection();
    } else {
        closeSection();
    }
    
    return(
        <Slide id="aboutme">
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default AboutMe;
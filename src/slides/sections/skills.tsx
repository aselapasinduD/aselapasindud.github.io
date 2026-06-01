import Slide from "../../components/slide";
import SectionNavBar from "../../components/sectionNavBar";

import { useAppSelector, useAppDispatch } from "../../states/hooks";
import { closeSection } from "../../states/sectionSlice";
import { useEffect, useState } from "react";
import Helper from "../../helper/helper";

import skillImageHolder from "../../assests/skill-image-holder.png";
import problemSolving from "../../assests/skill_images/problem_solving.jpg";
import researchAndDevelopment from "../../assests/skill_images/research_and_development.jpg";
import designing from "../../assests/skill_images/designing.jpg";
import solutionArchitecture from "../../assests/skill_images/solution_architecture_diagram.jpg";
import fullStackDevelopment from "../../assests/skill_images/full_stack_development_diagram.jpg";
import communication from "../../assests/skill_images/communication.jpg";

interface props {
    ViewportSize: number[],
    className?: string,
    ismobile?: boolean
}
interface ismobile {
    ismobile?: boolean
}
type childrenProps = props & ismobile;

const SkillList = [
    {
        name: 'Problem Solving',
        details: 'I approach complex challenges analytically, breaking them down into manageable parts. I enjoy finding efficient, elegant solutions through research, experimentation, and persistence.',
        spanSizeCol: 1,
        spanSizeRow: 1,
        imageURL: problemSolving
    },
    {
        name: 'Research & Development',
        details: 'I actively research emerging technologies and publish findings on Medium. From quantum computing to UAP studies, curiosity drives me to explore beyond the conventional boundaries of software development.',
        spanSizeCol: 2,
        spanSizeRow: 1,
        imageURL: researchAndDevelopment
    },
    {
        name: 'Design & Planning',
        details: 'I plan projects from the ground up — defining architecture, wireframing interfaces, and mapping user flows before writing a single line of code. Good design starts long before development.',
        spanSizeCol: 1,
        spanSizeRow: 2,
        imageURL: designing
    },
    {
        name: 'Solution Architecture',
        details: 'I design scalable, maintainable system architectures that balance performance with practicality. I consider database design, API structure, and deployment strategy as part of every project.',
        spanSizeCol: 1,
        spanSizeRow: 1,
        imageURL: solutionArchitecture
    },
    {
        name: 'Full-Stack Development',
        details: 'Proficient across the full stack — from React and TypeScript on the frontend to Node.js, Python, Django, PHP, and C# on the backend, with experience in both SQL and NoSQL databases.',
        spanSizeCol: 1,
        spanSizeRow: 1,
        imageURL: fullStackDevelopment
    },
    {
        name: 'Communication',
        details: 'As an ENFJ-T, communication is natural to me. I work effectively with clients and teams, translating technical concepts into clear language and ensuring everyone stays aligned throughout a project.',
        spanSizeCol: 1,
        spanSizeRow: 1,
        imageURL: communication
    },
]

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {className, ismobile} = childrenProps;
    const dispatch = useAppDispatch();

    const isOpenSkillsSection = useAppSelector((state) => state.section.skillsSection);

    const [titleAnimate, setTitleAnimate] = useState<string[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [titleIndex, setTitleIndex] = useState<number>(0);
    const helper = new Helper();

    const title = "SKILLS";

    useEffect(() => {
        if(isOpenSkillsSection){
            helper.StringAnimation(0.2, title, titleIndex, counter, setTitleIndex, setCounter, setTitleAnimate, true, false)
        } else {
            setCounter(0);
            setTitleIndex(0);
        }
    }, [counter, titleIndex, isOpenSkillsSection]);
    

    return(
        <div className={`bg-black w-[100%] h-[100%] overflow-y-scroll sm:overflow-hidden ${className? className : "" }`}>
            <SectionNavBar title={titleAnimate[0]} handleBackButton={() => dispatch(closeSection('skillsSection'))} ismobile={ismobile} classNameForBackButton='z-10' />
            <div className="
                px-6 sm:px-0
                grid
                grid-cols-[repeat(1,1fr)] sm:grid-cols-[repeat(3,1fr)] lg:grid-cols-[repeat(4,1fr)]
                grid-rows-[repeat(6,130px)] mb390:grid-rows-[repeat(6,150px)] sm:grid-rows-[repeat(3,186px)] lg:grid-rows-[repeat(2,186px)]
                gap-x-4 lg:gap-x-6
            ">
                {SkillList.map((skill, index) =>
                        <div key={index} className="skill-card h-full" style={{gridColumn: "span " + skill.spanSizeCol, gridRow: "span " + skill.spanSizeRow}}>
                            <div className="relative h-[calc(100%-1.5rem)] overflow-hidden [&>div]:hover:left-0 [&>div]:sm:hover:left-0">
                                <img src={`${skill.imageURL !== ""? skill.imageURL : skillImageHolder}`} className="w-full h-full object-cover" alt="Skill Image" />
                                <div className="absolute h-full w-full p-2 top-0 bg-[#27272aba] -left-[100%] transition-all easy-in-out duration-500 overflow-auto">
                                    <p>{skill.details}</p>
                                </div>
                            </div>
                            <h2 className="leading-none text-[1.5rem] sm:text-[1.2rem] md:text-[1.5rem] text-center sm:text-left">{skill.name.toUpperCase()}</h2>
                        </div>
                    )
                }
            </div>
        </div>
    );
}

const Skills = (props: props) => {
    const {ViewportSize} = props;
    const isOpenSection = useAppSelector((state) => state.section.skillsSection);

    const closeSection = () => {
        const contactElement = document.getElementById("skills")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
        if(contactElement) contactElement.transitionDuration = '0.5s';
    }
    const openSection = () => {
        const contactElement = document.getElementById("skills")?.style;
        if(contactElement) contactElement.bottom = '0px';
        if(contactElement) contactElement.transitionDuration = '0.2s';
    }

    if(isOpenSection){
        openSection();
    } else {
        closeSection();
    }

    return(
        <Slide id="skills" className={`translate-x-[-4px] sm:translate-x-[-12px] xl:translate-x-[-50px]`}>
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Skills;
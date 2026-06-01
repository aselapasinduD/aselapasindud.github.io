import Slide from "../../components/slide";
import SectionNavBar from "../../components/sectionNavBar";

import { useAppSelector, useAppDispatch } from "../../states/hooks";
import { closeSection } from "../../states/sectionSlice";
import { useEffect, useState } from "react";
import Helper from "../../helper/helper";

interface props {
    ViewportSize: number[],
    className?: string,
    ismobile?: boolean
}
interface ismobile {
    ismobile?: boolean
}
type childrenProps = props & ismobile;

const educations = [
    {
        title: "University Of Moratuwa - Bachelor of Information Technology",
        courseList: [
            {
                name: "Undergraduate"
            }
        ]
    },
    {
        title: "UOM Open Learning - Full Stack Development",
        courseList: [
            {
                name: "Python-1"
            },
            {
                name: "Python-2"
            },
            {
                name: "Web Development-1"
            },
            {
                name: "Web Development-2"
            },
            {
                name: "Web Development-3"
            }
        ]
    },
    {
        title: "FreeCodeCamp",
        courseList: [
            {
                name: "Responsive Web Design"
            },
            {
                name: "JavaScript Algorithms and Data Structures"
            },
            {
                name: "Scientific Computing With Python"
            },
            {
                name: "Foundational C# With Microsoft"
            }
        ]
    }
]

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {className, ismobile} = childrenProps;
    const isOpenEducationsSection = useAppSelector((state) => state.section.experiencesSection);
    const dispatch = useAppDispatch();

    const title = "EXPERIENCES";

    const [titleAnimate, setTitleAnimate] = useState<string[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [titleIndex, setTitleIndex] = useState<number>(0);
    const helper = new Helper();

    useEffect(() => {
        if(isOpenEducationsSection){
            helper.StringAnimation(0.2, title, titleIndex, counter, setTitleIndex, setCounter, setTitleAnimate, true, false)
        } else {
            setCounter(0);
            setTitleIndex(0);
        }
    }, [counter, titleIndex, isOpenEducationsSection]);

    const programmingLanguageList = ['C#', 'C++', 'PHP', 'PYTHON', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'JAVA'];

    const programmingLanguageListStyle = {"--width": '300px', "--height": '72px', "--quantity": programmingLanguageList.length} as React.CSSProperties;
    const programmingLanguageList1 = {"--item-position": 1} as React.CSSProperties;
    const programmingLanguageList2 = {"--item-position": 2} as React.CSSProperties;


    return(
        <div className="bg-black w-[100%] h-[100%] overflow-hidden">
            <SectionNavBar title={titleAnimate[0]} handleBackButton={() => dispatch(closeSection('experiencesSection'))} ismobile={ismobile} />
            <div className="bg-[#d9d9d920] w-full h-full flex flex-col">
                <div className="programmingLanguageList relative w-9/12 flex h-[--height] mx-auto my-4 overflow-hidden" style={programmingLanguageListStyle}>
                    <div className="absolute flex gap-5 h-[--height] left-[100%]" style={programmingLanguageList1}>
                        {programmingLanguageList.map((programmingLanguage, index) => {
                            return <h1 key={index} id={`programmingLanguageListItem-${index}`} className="text-[3rem] text-center text-[var(--secondary-color)]">{programmingLanguage}</h1>
                        })}
                    </div>
                    <div className="absolute hidden md:flex gap-5 h-[--height] left-[100%]" style={programmingLanguageList2}>
                        {programmingLanguageList.map((programmingLanguage, index) => {
                            return <h1 key={index} id={`programmingLanguageListItem-${index}`} className="text-[3rem] text-center text-[var(--secondary-color)]">{programmingLanguage}</h1>
                        })}
                    </div>
                </div>
                <div className="w-11/12 md:w-9/12 m-auto overflow-auto flex-1">
                    {educations.map((education, index) => 
                        <div key={index}>
                            <h4 className="text-center text-600 text-[1.8rem]">{education.title}</h4>
                            <div className="flex flex-wrap gap-5 justify-center">
                                {education.courseList.map((course, index) =>
                                    <p key={index} className="w-[200px] text-center text-[1.15rem]">{course.name}</p>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

const Experiences = (props: props) => {
    const {ViewportSize} = props;
    const isOpenSection = useAppSelector((state) => state.section.experiencesSection);
    
    const closeSection = () => {
        const contactElement = document.getElementById("experiences")?.style;
        if(contactElement) contactElement.bottom = `-${ViewportSize[1]}px`;
        if(contactElement) contactElement.transitionDuration = '0.5s';
    }
    const openSection = () => {
        const contactElement = document.getElementById("experiences")?.style;
        if(contactElement) contactElement.bottom = '0px';
        if(contactElement) contactElement.transitionDuration = '0.2s';
    }

    if(isOpenSection){
        openSection();
    } else {
        closeSection();
    }

    return(
        <Slide id="experiences" className={`translate-x-[-4px] sm:translate-x-[-12px] xl:translate-x-[-50px]`}>
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Experiences;
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../states/hooks";
import { toggleSection } from "../states/sectionSlice";
import Helper from "../helper/helper";

interface props {
    ismobile?: boolean,
    className?: string,
    ViewportSize: number[],
}

const ContactButtons = (props: props) => {
    const {ismobile, ViewportSize, className} = props;
    const isWebsiteLoaded = useAppSelector((state) => state.section.isWebsiteLoaded);
    const dispatch = useAppDispatch();
    const helper = new Helper();

    const buttons = ['CONTACT ME'];

    const [contactButton, setContactButton] = useState<string[]>([]);
    const [counterContactButton, setCounterContactButton] = useState<number>(0);
    const [contactButtonIndex, setContactButtonIndex] = useState<number>(0);

    useEffect(() => {
        if(isWebsiteLoaded) helper.StringAnimation(0.3, buttons[0], contactButtonIndex, counterContactButton, setContactButtonIndex, setCounterContactButton, setContactButton, true, false);
    }, [counterContactButton, contactButtonIndex, isWebsiteLoaded]);

    function handleMouseEnterContactButton(){
        if(buttons[0] === contactButton[0]){
            setCounterContactButton(0);
            setContactButtonIndex(0);
        }
    }

    return(
        <div className={
            `w-max absolute left-[70%] translate-x-[-70%] bottom-[5%]
            [&>button]:bg-orange [&>button]:rounded-[8px] [&>button]:px-[16px]
            sm:text-[1.4rem]
            lg:translate-x-[40%] lg:text-[1.6rem] lg:gap-[60px]
            ${className? className : ""}
        `}>
            <button className="w-[110px] sm:w-[140px] lg:w-[160px]" onClick={() => dispatch(toggleSection('contactSection'))} onMouseEnter={handleMouseEnterContactButton}><h3>{contactButton}</h3></button>
        </div>
    );
}

export default ContactButtons;
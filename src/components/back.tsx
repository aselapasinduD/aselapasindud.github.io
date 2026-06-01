import React from "react";

const backArrow =   <svg width="35" height="38" viewBox="0 0 35 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M32.8473 37.3962C33.9519 37.3962 34.8473 36.5008 34.8473 35.3962V15.555C34.8473 12.1483 32.4346 8.8402 28.5616 8.8402H7.79809L13.3924 3.43881C14.187 2.67158 14.2092 1.40545 13.442 0.610821C12.6747 -0.183807 11.4086 -0.206013 10.614 0.561218L0 10.8093L10.583 21.4815C11.3608 22.2659 12.6271 22.2712 13.4114 21.4934C14.1957 20.7156 14.2011 19.4493 13.4233 18.665L7.64721 12.8402H28.5616C29.7536 12.8402 30.8473 13.854 30.8473 15.555V35.3962C30.8473 36.5008 31.7427 37.3962 32.8473 37.3962Z" fill="white"/>
                    </svg>

interface props {
    handleBackButton: () => void,
    ismobile?: boolean,
    className?: string
}

const Back: React.FC<props> = ({handleBackButton, ismobile, className}) => {
    return(
        <div className={
            `absolute p-[5px] h-[48px] left-[10px] top-[4px] [&_svg]:w-[20px]
            sm:[&_svg]:w-[30px]
            md:top-[14px]
            lg:left-[50px]
            xl:left-[100px] xl:top-[26px]
            ${className? className : ""}
        `}>
            <button type="button" onClick={handleBackButton}>
                {backArrow}
            </button>
        </div>
    );
}

export default Back;
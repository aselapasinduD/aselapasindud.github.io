import Slide from "../components/slide";
import SectionNavBar from "../components/sectionNavBar";

import "./styles/contact.css";
import { useAppDispatch, useAppSelector } from "../states/hooks";
import { closeSection } from "../states/sectionSlice";
import { useEffect, useState } from "react";
import Helper from "../helper/helper";

interface props {
    ViewportSize: number[],
    className?: string
}

interface ismobile {
    ismobile?: boolean
}

type childrenProps = props & ismobile;

const ChildrenWithProps = (childrenProps: childrenProps) => {
    const {ViewportSize, className, ismobile} = childrenProps;
    const [formData, setFormData] = useState({firstName: "", lastName: "", email: "", phone: "", subject: "", message: ""});
    const dispatch = useAppDispatch();

    const isOpenContactSection = useAppSelector((state) => state.section.contactSection);

    const title = "CONTACT";

    const [titleAnimate, setTitleAnimate] = useState<string[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [titleIndex, setTitleIndex] = useState<number>(0);
    const helper = new Helper();

    useEffect(() => {
        if(isOpenContactSection){
            helper.StringAnimation(0.2, title, titleIndex, counter, setTitleIndex, setCounter, setTitleAnimate, true, false)
        } else {
            setCounter(0);
            setTitleIndex(0);
        }
    }, [counter, titleIndex, isOpenContactSection]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        const {firstName, lastName, email, phone, subject, message} = formData;

        const emailSubject = subject.trim() || `Portfolio Inquiry from ${firstName} ${lastName}`;

        const emailBody = `
Hello Asela,

You have received a new inquiry through your portfolio website.

━━━━━━━━━━━━━━━━━━━━
CONTACT INFORMATION
━━━━━━━━━━━━━━━━━━━━

Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not Provided"}

━━━━━━━━━━━━━━━━━━━━
MESSAGE
━━━━━━━━━━━━━━━━━━━━

${message}

━━━━━━━━━━━━━━━━━━━━
END OF MESSAGE
━━━━━━━━━━━━━━━━━━━━

This message was sent through your portfolio contact form.
`;

        window.location.href = `mailto:asela.pasindu.dias17@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    };

    return (
        <div className={`contact ${className? className: ""} bg-black w-[100%] h-[100%]`}>
            <SectionNavBar title={titleAnimate[0]} handleBackButton={() => dispatch(closeSection('contactSection'))} ismobile={ismobile} />
            <div className="flex flex-col items-center overflow-y-auto pt-[80px] md:pt-[100px] pb-[40px]">
                
                {/* First Name + Last Name row */}
                <div className="flex gap-[8px] w-[90%] max-w-[636px]">
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="contact-input w-1/2"
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="contact-input w-1/2"
                    />
                </div>

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input w-[90%] max-w-[636px] mt-[8px]"
                />

                {/* Phone */}
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number (Optional)"
                    value={formData.phone}
                    onChange={handleChange}
                    className="contact-input w-[90%] max-w-[636px] mt-[8px]"
                />

                {/* Subject */}
                <input
                    type="text"
                    name="subject"
                    placeholder="Subject or Title (Optional)"
                    value={formData.subject}
                    onChange={handleChange}
                    className="contact-input w-[90%] max-w-[636px] mt-[8px]"
                />

                {/* Message */}
                <textarea
                    name="message"
                    placeholder="Type your message..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-input w-[90%] max-w-[636px] mt-[8px] resize-none"
                />

                {/* Submit row */}
                <div className="flex justify-end w-[90%] max-w-[636px] mt-[8px] items-center gap-[20px]">
                    <p className="text-[0.85rem]">I will respond as quickly as possible.</p>
                    <button
                        type="button"
                        onClick={handleSubmit}
                        className="bg-orange px-[18px] py-[4px] rounded-[6px] text-[1rem] uppercase"
                    >
                        Submit
                    </button>
                </div>

            </div>
        </div>
    );
}

const Contact = (props: props) => {
    const { ViewportSize } = props;
    const isOpenContactSection = useAppSelector((state) => state.section.contactSection);

    const closeContactSection = () => {
        const contactElement = document.getElementById("contact")?.style;
        if(contactElement) contactElement.top = `-${ViewportSize[1]}px`;
        if(contactElement) contactElement.transitionDuration = "0.5s";
    }
    const openContactSection = () => {
        const contactElement = document.getElementById("contact")?.style;
        if(contactElement) contactElement.top ="0";
        if(contactElement) contactElement.transitionDuration = "0.2s";
    }
    if(isOpenContactSection){
        openContactSection();
    } else {
        closeContactSection();
    }

    return(
        <Slide id="contact" className=" z-[9999]">
            <ChildrenWithProps {...props} />
        </Slide>
    );
}

export default Contact;
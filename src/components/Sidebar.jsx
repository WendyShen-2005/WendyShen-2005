import { useState, useEffect } from "react";
import { 
    IconArrowLeft,
    IconArrowRight,
    IconArrowUp,
    IconChartDots3,
    IconClipboardText,
    IconDeviceLaptop, 
    IconUser,
    IconSchool,
    IconStar
} from "@tabler/icons-react";

import "./Sidebar.scss";

const Sidebar = () => {
    const sections = [
        {title: "Who I Am", href: "#who-i-am-container", id: "who-i-am-container", icon:<IconUser/>},
        {title:"Goals", href:"#goals-page", id:"goals-page", icon:<IconStar/>},
        {title: "Experience", href: "#experience-container", id: "experience-container", icon:<IconClipboardText/>},
        {title: "Education", href: "#education-container", id: "education-container", icon:<IconSchool/>},
        {title: "Projects", href: "#projects-container", id: "projects-container", icon:<IconDeviceLaptop/>},
        {title: "Socials", href: "#socials-container", id: "socials-container", icon:<IconChartDots3/>},
        {title: "Back to the top...", href: "#personal-website-intro-container", id: "personal-website-intro-container", icon:<IconArrowUp/>}
    ]
    const [open, setOpen] = useState(true);
    const [activeSection, setActiveSection] = useState("personal-website-intro-container");

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-50% 0px -50% 0px",
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const openClose = () => {
        setOpen(!open);
    }

    return (
        <div id="sidebar-container">
            {open && <div id="sidebar-buttons-container">
                {sections.map((sect) => 
                    <a href={sect.href}>
                        {sect.icon} 
                        <>
                            <div className="sidebar-icon-space"/>
                            {sect.title}
                        </>
                    </a>
                )}
                <div id="sidebar-width-definer"/>
            </div>}
            {!open && <div onClick={openClose} id="sidebar-buttons-container">
                {sections.map((sect) => 
                    <a href={sect.href}>
                        {sect.icon} 
                    </a>
                )}
            </div>}

            {open && <button id="sidebar-open-button" onClick={openClose}><IconArrowLeft/></button>}
            {!open && <button id="sidebar-open-button-closed" onClick={openClose}><IconArrowRight/></button>}

        </div>
    )
}

export default Sidebar;
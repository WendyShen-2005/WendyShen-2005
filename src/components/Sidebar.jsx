import { useState } from "react";
import { 
    IconArrowLeft,
    IconArrowRight,
    IconChartDots3,
    IconClipboardText,
    IconDeviceLaptop, 
    IconUser
} from "@tabler/icons-react";

import "./Sidebar.scss";

const Sidebar = () => {
    const sections = [
        {title: "Who I Am", href: "", icon:<IconUser/>},
        {title: "Experience", href: "", icon:<IconClipboardText/>},
        {title: "Projects", href: "#projects-container", icon:<IconDeviceLaptop/>},
        {title: "Socials", href: "#socials-container", icon:<IconChartDots3/>}
    ]
    const [open, setOpen] = useState(true);

    const openClose = () => {
        setOpen(!open);
        // const element = document.getElementById("sidebar-buttons-container");

        //     element.classList.toggle("active");
        // } else {
        //     element.classList.toggle("inactive");
        // }
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
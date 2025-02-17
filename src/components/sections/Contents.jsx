import Projects from "./subcomponents/Projects.jsx";
import Socials from "./subcomponents/Socials.jsx";
import "./Contents.scss"
import WhoIAm from "./subcomponents/WhoIAm.jsx";
import Experience from "./subcomponents/Experience.jsx";

const Contents = () => { 

    return (
        <div id="contents-container">
            <WhoIAm/>
            <Experience/>
            <Projects/>
            <Socials/>
        </div>
    )
}

export default Contents;
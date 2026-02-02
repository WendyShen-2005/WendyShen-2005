import Projects from "./subcomponents/Projects.jsx";
import Socials from "./subcomponents/Socials.jsx";
import "./Contents.scss"
import WhoIAm from "./subcomponents/WhoIAm.jsx";
import Experience from "./subcomponents/Experience.jsx";
import Education from "./subcomponents/Education.jsx";
import GoalsPage from "./subcomponents/goals/GoalsPage.jsx";

const Contents = () => { 

    return (
        <div id="contents-container">
            <WhoIAm/>
            <GoalsPage/>
            <Experience/>
            <Education/>
            <Projects/>
            <Socials/>
        </div>
    )
}

export default Contents;
import Projects from "./subcomponents/Projects.jsx";
import Socials from "./subcomponents/Socials.jsx";
import "./Contents.scss"

const Contents = () => { 

    return (
        <div id="contents-container">
            <Projects/>
            <Socials/>
        </div>
    )
}

export default Contents;
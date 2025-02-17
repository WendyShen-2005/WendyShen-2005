import { IconArrowDown } from "@tabler/icons-react"
import "./Intro.scss"

const Intro = () => {
    return (
        <div id="personal-website-intro-container">
            <div id="personal-website-intro-small">Hello, my name is...</div>
            <div id="personal-website-intro-big">Wendy</div>
            <a href="#sidebar-container" id="intro-down-button">
                <IconArrowDown size={50}/>
            </a>
        </div>
    )
}
export default Intro;
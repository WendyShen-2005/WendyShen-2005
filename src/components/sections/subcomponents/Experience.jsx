import { experienceData } from "./experienceData.ts";
import ExperienceListing from "./subSubComponents/ExperienceListing.jsx";
import "./Pages.scss";

const Experience = () => {
    return (
        <div className="section-container">
            <h1 className="headers">My experiences...</h1>

            {experienceData.map((exp) => 
                <ExperienceListing data={exp}/>
            )}
        </div>
    )
}
export default Experience;
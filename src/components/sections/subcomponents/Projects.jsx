import "./subSubComponents/WebsiteListing.jsx";
import { websites } from "./projectsData.ts";
import WebsiteListing from "./subSubComponents/WebsiteListing.jsx";
import "./Pages.scss";

const Projects = () => {
    return (
        <div className="section-container">
            <h1 className="headers">Websites</h1>

            {websites.map((site) => {
                return (
                    <WebsiteListing data={site}/>
                )
            })}
        </div>
    )
}
export default Projects
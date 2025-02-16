import "./WebsiteListing";
import { websites } from "./projectsData.ts";
import WebsiteListing from "./WebsiteListing";

const Projects = () => {
    return (
        <div id="projects-container">
            <h1>Websites</h1>
            {websites.map((site) => {
                return (
                    <WebsiteListing data={site}/>
                )
            })}
        </div>
    )
}
export default Projects
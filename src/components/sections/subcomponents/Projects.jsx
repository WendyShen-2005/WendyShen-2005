import "./subSubComponents/ProjectListing.jsx";
import { websites, applicationProjects, hackathonProjects } from "./projectsData.ts";
import ProjectListing from "./subSubComponents/ProjectListing.jsx";
import "./Pages.scss";
import "./Projects.scss";

const Projects = () => {
    return (
        <div className="section-container" id="projects-container">
            <h1 className="headers">Projects</h1>

            <div id="projects-section-container">
                <div className="projects-section-col">
                    <h2 className="headers">Websites</h2>
                    {websites.map((site) => {
                        return (
                            <ProjectListing data={site} type={0}/>
                        )
                    })}
                    
                    <br/>

                    <h2 className="headers">Hackathon Projects</h2>
                    {hackathonProjects.map((site) => {
                        return (
                            <ProjectListing data={site} type={2}/>
                        )
                    })}
                </div>
                <div className="projects-section-middle-space"/>
                <div className="projects-section-col">
                    <h2 className="headers">Applications</h2>
                    {applicationProjects.map((site) => {
                        return (
                            <ProjectListing data={site} type={1}/>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}
export default Projects
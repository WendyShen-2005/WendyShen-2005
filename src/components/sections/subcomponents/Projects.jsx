import "./subSubComponents/ProjectListing.jsx";
import { websites, applicationProjects, hackathonProjects } from "./projectsData.ts";
import ProjectListing from "./subSubComponents/ProjectListing.jsx";
import "./Pages.scss";
import "./Projects.scss";
// import { } from 'react';

const Projects = () => {
    const allProjects = [...websites, ...applicationProjects, ...hackathonProjects];

    return (
        <div className="section-container" id="projects-container">
            <div className="projects-header-row">
              <h1 className="headers">Projects</h1>
            </div>

            <div id="projects-section-container">
                <div className="projects-section-col">
                    <h2 className="headers">Websites</h2>
                    {websites.map((site, i) => (
                        <ProjectListing data={site} type={0} />
                    ))}
                    
                    <br/>

                    <h2 className="headers">Hackathon Projects</h2>
                    {hackathonProjects.map((site, idx) => (
                      <ProjectListing data={site} type={2} />
                    ))}
                </div>
                <div className="projects-section-middle-space"/>
                <div className="projects-section-col">
                    <h2 className="headers">Applications</h2>
                    {applicationProjects.map((site, idx2) => (
                      <ProjectListing data={site} type={1} />
                    ))}
                </div>
            </div>

        </div>
    )
}
export default Projects
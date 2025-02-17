import "./ProjectListing.scss";

const ProjectListing = ({data, type}) => {
    /*
    0 = website
    1 = project
    2 = hackathon
    */

    var weblink = null;
    var devpostlink = null;

    if(type == 0) {
        if(data.link == null)
            weblink = <a className="project-section-listing-a-disabled" aria-disabled>Website</a>
        else
            weblink = <a href={data.link} target="_blank" className="project-section-listing-a-enabled" aria-disabled>Website</a>
    }

    if(type == 2) {
        // if(data.link == null)
        devpostlink = <a href={data.devPost} target="_blank" className="project-section-listing-a-enabled">DevPost</a>
        // else
        //     weblink = <a className="project-section-listing-a-enabled" aria-disabled>Website</a>
    }
    

    return (
        <>
            <div className="project-section-listing">
                <div className="project-section-listing-header">
                    <div className="project-section-listing-title">{data.title}</div>
                    <div>
                        {weblink}
                        {devpostlink}
                        <a className="project-section-listing-a-enabled" href={data.repo} target="_blank">Github Repo</a>
                    </div>
                </div>
                <div className="project-section-listing-tech">{data.tech}</div>
                <div className="project-section-listing-desc">{data.desc}</div>
            </div>
        </>
    )
}

export default ProjectListing;
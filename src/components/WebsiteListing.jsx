import "./WebsiteListing.scss";

const WebsiteListing = ({data}) => {
    return (
        <div className="website-listing">
            <div>
                <div>
                    <div className="title">{data.title}</div>
                    <a target="_blank" href={data.link}>Website</a>
                </div>

                <p>{data.desc}</p>
                <p className="tech-stack">Tech Stack: {data.techStack}</p>
            </div>
            <div>
                <iframe src={data.link}/>
            </div>
        </div>
    )
}

export default WebsiteListing;
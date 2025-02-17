import { IconCircle } from "@tabler/icons-react";
import "./ExperienceListing.scss";

const ExperienceListing = ({data}) => {
    return (
        <div className="experience-listing-container">
            <div className="experince-listing-left-border-container">
                <div className="experience-listing-vertical-line"/>
                <IconCircle/>
                <div className="experience-listing-vertical-line"/>
            </div>
            <div className="experience-listing-data-container">
                <div className="experience-listing-title">{data.title} | {data.company}</div>
                <div className="experience-listing-tech">{data.tech}</div>
                <ul className="experience-listing-points">
                    {data.work.map((w) => 
                        <li className="experience-listing-point">{w}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
export default ExperienceListing;
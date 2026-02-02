import "./Pages.scss";
import resumePdf from "../../assets/resume.pdf";

const Education = () => {
    return (
        <div className="section-container" id="education-container">
            <h1 className="headers">Education</h1>
            <div className="education-content">
                <img 
                    src="https://www.library.yorku.ca/web/wp-content/uploads/2023/06/Horizontal-York-Logo-1200x675-1.jpg" 
                    alt="York University logo" 
                    className="education-logo"
                />
                <div className="education-details">
                    <h2>York University</h2>
                    <div>BA in Computer Security</div>
                    <div>2023 - 2027</div>
                </div>
            </div>

            <div className="education-resume">
                <h3>Resume Preview</h3>
                <div className="education-resume-preview-wrap">
                    <object data={resumePdf} type="application/pdf" className="education-resume-preview">
                        <a href={resumePdf} target="_blank" rel="noreferrer">Open resume in new tab</a>
                    </object>
                </div>
                <a className="education-download-button" href={resumePdf} download="WendyShen_Resume_Cybersecurity.pdf">Download Resume</a>
            </div>
        </div>
    )
}

export default Education;

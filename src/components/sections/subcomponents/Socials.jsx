import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin, IconMail } from "@tabler/icons-react";
import "./Pages.scss";
import "./Social.scss"

const Socials = () => {

    const socialMedia = [
        {name: "Email", link: "wendys05@my.yorku.ca", icon: <IconMail className="social-link-icon"/>},
        {name: "Github", link: "https://github.com/WendyShen-2005", icon: <IconBrandGithub className="social-link-icon"/>},
        {name: "LinkedIn", link: "https://www.linkedin.com/in/wendy-shen-720117312/", icon: <IconBrandLinkedin className="social-link-icon"/>},
    ]

    return (
        <div id="socials-container">
            <h1 id="socials-header">Connect with me!</h1>
            <div id="social-links-container">
                {socialMedia.map((social, i) => {
                    if (i != socialMedia.length - 1)
                        return <div className="social-link">
                                    {social.icon}
                                    <a href={social.link}>{social.name}</a>
                                </div>
                    else 
                        return <div className="social-link" id="social-link-last">
                                    {social.icon}
                                    <a href={social.link}>{social.name}</a>
                                </div>
                })}  
            </div>             
        </div>
    )
}

export default Socials;
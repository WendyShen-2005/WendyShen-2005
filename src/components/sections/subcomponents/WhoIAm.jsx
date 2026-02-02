import "./Pages.scss";
import pfp from "../../assets/professionalpfp.png";
import whyMe from "../../assets/whyme.mp4";


const WhoIAm = () => {
    return (
        <div className="section-container" id="who-i-am-container">
            <h1 className="headers">Who I Am</h1>
            <div style={{display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"center", gap:"40px"}}>
                <img src={pfp} alt="profile" style={{width:"400px", borderRadius:"50%"}}/>
                <div id="who-i-am-text">
                    I’m Wendy Shen, a software and security developer who believes technology should reduce noise, not add to it. My vision is to build tools that make decisions clearer, automate what doesn’t need human attention, and give people the space to focus on what truly matters. With a background shaped by both creativity and logic, I gravitate toward systems that are intentional, efficient, and human-centered. I’m especially interested in the intersection of software, security, and user clarity, designing solutions that remain reliable long after deployment and that quietly support people in their day-to-day lives.
                    <br/><br/>
My experience ranges from startup development work to my co-op at Citco as an Application Support Intern, where I learned how large systems are maintained, secured, and refined in real-world environments. There, I gained a deeper understanding of post-deployment support, automation opportunities, and the importance of clear communication across teams. Growing up as a first-generation Canadian taught me independence, initiative, and the value of making the most of every opportunity, traits that guide how I work and collaborate today. Ultimately, I aim to build software that is secure, accessible, and purposeful, helping both users and organizations cut through complexity and focus on what matters most.
                </div>
            </div>
            <iframe title="Wendy Shen Introduction Video" width="560" height="315" src={whyMe} frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{marginTop:"40px"}}></iframe>
            
        </div>
    )
}
export default WhoIAm;
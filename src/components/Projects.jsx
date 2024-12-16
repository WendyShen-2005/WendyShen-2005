// import axios from 'axios';
// import { useEffect, useState } from 'react';

import { websites } from "./data.ts";
import WebsiteListing from "./WebsiteListing";

const Projects = () => { 

    return (
        <div>
            <h1>Websites</h1>
            {websites.map((site) => {
                return (
                    <WebsiteListing data={site}/>
                )
            })}
        </div>
    )
}

export default Projects;
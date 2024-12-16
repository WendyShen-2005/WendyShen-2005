import axios from 'axios';
import { useEffect, useState } from 'react';

// var data = require('json!./ProjectsDB.json');

const Projects = () => { 

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/data.json").then((res) => {
            setData(res.data.Projects);
        })
    }, []);

    return (
        <div>
            <h1>Websites</h1>
            {data.map((data) => 
                <div>
                    <h2>{data.title}</h2>
                    <a href={data.link}>Link</a>
                    <img src={data.img}/>

                    <p>{data.tech}</p>
                    <p>{data.desc}</p>
                </div>
            )}
        </div>
    )
}

export default Projects;
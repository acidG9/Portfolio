import React from "react";
import Canbas from "./Canbas"

const Project = () => {
    const [index, setIndex]= React.useState(0);

    const listOfProject= [
        {
            name: "CuraScan",
            techName: "AI Health Diagnosis System",
            summary: "A full-stack AI-powered health diagnosis app that predicts possible medical conditions based on user-inputted symptoms and test results. It also recommends the appropriate type of doctor for further consultation.",
            liveSite: "https://curascan.vercel.app/",
            techStack: "React, Node, Express, MongoDB",
            logo: "curascan.png",
            video: "/project/project1.mp4"
        },{
            name: "Breezer",
            techName: "Weather Forecasting App",
            summary: "A responsive weather web app that displays real-time and forecast weather data, including air quality, UV index, and astronomy details, using WeatherAPI. It adapts local time using moment-timezone and features an interactive UI.",
            liveSite: "https://breez3r.vercel.app/",
            techStack: "HTML, CSS, JS, React",
            logo: "breezer.png",
            video: "/project/project2.mp4"
        },{
            name: "Portfolio",
            techName: "Interactive 3D Portfolio",
            summary: "A personal portfolio website with interactive 3D visuals and animations. Uses custom 3D scenes from Three.js and Spline to showcase projects in a modern, engaging format.",
            liveSite: "https://akshansh.vercel.app/",
            techStack: "ThreeJS, React Three Fiber, Spline, GSAP",
            logo: "portfolio.png",
            video: "/project/project3.mp4"
        }
    ];

    function setForward(){
        if( listOfProject.length == (index+1) ){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    };

    function setBackward(){
        if( index == 0 ){
            setIndex(listOfProject.length-1);
        }else{
            setIndex(index-1);
        }
    };

    function handleClick(){
        window.open( listOfProject[index]?.liveSite, "_blank" );
    };
    
    return (
        <div className="project-container">
            <h1>Projects</h1>
            <div className="project-details">
                <button onClick={() => setBackward()}><img src="backward.png"></img></button>
                <div>
                    <div className="proj-det-1">
                        <img src={ listOfProject[index]?.logo } alt="logo" />
                        <div>
                            <h2>{ listOfProject[index]?.name }</h2>
                            <h5>{ listOfProject[index]?.techName }</h5>
                        </div>
                    </div>
                    <p>{ listOfProject[index]?.summary }</p>
                    <div className="proj-det-2">
                        <h3><em>Skills: {listOfProject[index]?.techStack}</em></h3>
                        <button className="live-site" onClick={handleClick} >Live website</button>
                    </div>

                </div>
                <button onClick={() => setForward()}><img src="forward.png"></img></button>
            </div>
            <div className="canvas">
                <Canbas texture={ listOfProject[index]?.video } />
            </div>
        </div>
    );
};

export default Project;
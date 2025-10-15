import { useState } from "react";
import Canbas from "./Canbas";

const Project = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      id: 1,
      name: "CuraScan",
      techName: "AI Health Diagnosis System",
      summary:
        "A full-stack AI-powered health diagnosis app that predicts possible medical conditions based on user-inputted symptoms and test results. It also recommends the appropriate type of doctor for further consultation.",
      techStack: "React, Node, Express, MongoDB",
      liveSite: "https://curascan.vercel.app/",
      video: "/project/project1.mp4",
    },
    {
      id: 2,
      name: "DocNow",
      techName: "Healthcare Appointment Platform",
      summary:
        "A full-stack doctor appointment scheduling system with role-based login, real-time calendar slot booking, patient-doctor notifications, and earnings tracking. Ensures secure access and smooth user experience for both doctors and patients.",
      techStack: "React, Node, Express, MongoDB",
      liveSite: "https://nowdoc.vercel.app/",
      video: "/project/project2.mp4",
    },
    {
      id: 3,
      name: "AI Translate",
      techName: "Language Chatbot",
      summary:
        "AI Translate is an artificial intelligence powered chatbot capable of translating text from any language into another.",
      techStack: "React, Node, Express, MongoDB",
      liveSite: "https://languagebot.vercel.app/",
      video: "/project/project3.mp4",
    },
    {
      id: 4,
      name: "Breezer",
      techName: "Weather Forecasting App",
      summary:
        "A responsive weather web app that displays real-time and forecast weather data, including air quality, UV index, and astronomy details, using WeatherAPI. It adapts local time using moment-timezone and features an interactive UI.",
      techStack: "HTML, CSS, JS, React",
      liveSite: "https://breez3r.vercel.app/",
      video: "/project/project4.mp4",
    },
  ];

  const nextProject = () => {
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const currentProject = projects[activeProject];

  return (
    <section className="projects-container">
      <h2 className="section-title">Projects</h2>

      <div className="project-details">
        <button className="nav-btn prev arrow-pc" onClick={prevProject}>
          <span>&lt;</span>
        </button>

        <div className="project-card">
          <div className="project-header">
            <div className="project-icon id-pc">{currentProject.id}</div>
            <div>
              <h3>{currentProject.name}</h3>
              <p className="tech-name">{currentProject.techName}</p>
            </div>
          </div>

          <div className="project-description">
            <p>{currentProject.summary}</p>
          </div>

          <div className="project-footer">
            <p className="tech-stack">
              <span>Tech Stack:</span> {currentProject.techStack}
            </p>
            <a
              href={currentProject.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="live-site live-pc"
            >
              Live Website
            </a>
            <a
              href={currentProject.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="live-site live-mobile"
            >
              Live
            </a>
          </div>
        </div>

        <button className="nav-btn next arrow-pc" onClick={nextProject}>
          <span>&gt;</span>
        </button>
      </div>

      <div className="arrow-mobile">
        <button className="nav-btn prev" onClick={prevProject}>
          <span>&lt;</span>
        </button>
        <button className="nav-btn next" onClick={nextProject}>
          <span>&gt;</span>
        </button>
      </div>

      <div className="canvas">
        <Canbas texture={currentProject?.video} />
      </div>
    </section>
  );
};

export default Project;

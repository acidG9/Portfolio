
const AboutME = () => {
    return (
        <section className="about-me">
            <h1>Let Me Introduce Myself</h1>
            <div className="about-me-div1">
                <div className="about-me-intro">
                  <p>Hi, I’m Akshansh Vaishnav—a full stack web developer with a passion for building intuitive and impactful web applications.</p>
                  <p>I specialize in both frontend and backend development, working with technologies like React, Node.js, and MongoDB to deliver seamless digital solutions. My focus is on creating scalable, user-friendly products.</p>
                </div>
                <div className="about-me-hero">
                    <img src="me.jpg" alt="me" />
                </div>
            </div>
            <button className="cv">Download CV</button>
            <div className="about-me-div2">
                 <div>
                   <h2>Core Skills:</h2>
                   <ul>
                       <li>Language: Java, Javascript</li>
                       <li>Frontend: React.js, Tailwind CSS, Material UI, Zustand</li>
                       <li>Backend: Node.js, Express.js, MongoDB</li>
                       <li>Tools: Git, GitHub, Postman</li>
                   </ul>
                </div>
                <div>
                    <h2>My hobbies</h2>
                    <ul>
                        <li>Playing PC games, mostly FPS</li>
                        <li>Outdoor games like cricket and volleyball</li>
                        <li>Cooking</li>
                        <li>Travelling</li>
                    </ul> 
                </div>
            </div>
        </section>
    );
};

export default AboutME;
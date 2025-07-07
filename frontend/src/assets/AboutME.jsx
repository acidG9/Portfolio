
const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="section-title">About Me</h2>
      
      <div className="about-content">
        <div className="about-text">
          <p>Hi, I'm Akshansh Vaishnav—a full stack web developer with a passion for building intuitive and impactful web applications.</p>
          <p>I specialize in both frontend and backend development, working with technologies like React, Node.js, and MongoDB to deliver seamless digital solutions. My focus is on creating scalable, user-friendly products.</p>
          <a href="/akshansh_vaishnav.pdf" download className="btn">Download CV</a>
        </div>
        
        <div className="about-image">
          <div className="profile-img">
            <img className="me" src="me.jpg" alt="me" />
          </div>
        </div>
      </div>
      
      <div className="about-details">
        <div className="skills-box">
          <h3>Core Skills</h3>
          <ul className="skills-list">
            <li><span>Language:</span> Java, JavaScript</li>
            <li><span>Frontend:</span> React.js, Tailwind CSS, Three.js</li>
            <li><span>Backend:</span> Node.js, Express.js, MongoDB</li>
            <li><span>Tools:</span> Git, GitHub, Postman</li>
          </ul>
        </div>
        
        <div className="hobbies-box">
          <h3>My Hobbies</h3>
          <ul className="hobbies-list">
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

export default AboutMe;

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Crafting Next-Gen <span>Web Experiences</span></h1>
          <p>Building Seamless Web Solutions</p>
          <div className="hero-btns">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn outline">Contact Me</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="code-snippet">
            <div className="code-line">
              <span className="keyword">const</span> 
              <span className="var"> developer</span> 
              <span className="operator"> = </span> 
              <span className="func">createDeveloper</span>
              <span className="paren">(</span>
              <span className="bracket">{"{"}</span>
            </div>
            <div className="code-line">
              <span className="prop">  name</span>
              <span className="operator">: </span>
              <span className="string">'Akshansh Vaishnav'</span>,
            </div>
            <div className="code-line">
              <span className="prop">  role</span>
              <span className="operator">: </span>
              <span className="string">'Full Stack Developer'</span>,
            </div>
            <div className="code-line">
              <span className="prop">  skills</span>
              <span className="operator">: </span>
              <span className="bracket">[</span>
              <span className="string">'React'</span>, 
              <span className="string">'Node.js'</span>, 
              <span className="string">'MongoDB'</span>
              <span className="bracket">]</span>
            </div>
            <div className="code-line">
              <span className="bracket">{"}"}</span>
              <span className="paren">)</span>
              <span className="operator">;</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-bg">
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
      </div>
    </section>
  );
};

export default HeroSection;
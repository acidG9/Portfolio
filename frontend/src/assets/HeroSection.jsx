import Spline from "@splinetool/react-spline"

const HeroSection = () => {

    return (
        <section className="hero-section">
            <div className="intro">
                <h1>Crafting Next-Gen <br/> Web Experiences</h1>
                <p>Building Seamless Web Solutions</p>
            </div>
            <Spline className="hero" scene="https://prod.spline.design/o2qIR6MZ2ObEwKk4/scene.splinecode" />
        </section>
    );
};

export default HeroSection;
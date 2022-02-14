import photoGrid from "../images/photo-grid.png";
const Hero = () => {
  return (
    <section className="hero">
      <img className="hero--img" src={photoGrid} alt="photo-grid" />
      <h1 className="hero--title">Online Experiences</h1>
      <p classname="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home
      </p>
    </section>
  );
};

export default Hero;

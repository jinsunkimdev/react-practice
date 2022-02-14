import profileImage from "../images/my_profile_image.jpeg";
const Header = () => {
  return (
    <div>
      <img className="Profile-image" src={profileImage} alt="my profile:)" />
      <div className="Profile-text">
        <h1>Jinsun Kim</h1>
        <h2>Frontend Developer</h2>
        <h4>https://github.com/jinsunkimdev</h4>
      </div>
      <div className="Button-container">
        <button>📬 Email</button>
        <button>👤 Linkedin</button>
      </div>
    </div>
  );
};

export default Header;

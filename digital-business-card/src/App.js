import "./App.css";
import profileImage from "./images/my_profile_image.jpeg";
//
function App() {
  return (
    <div className="App">
      <div className="Card-container">
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
        <div className="Paragraph-container">
          <div className="First-paragraph">
            <h3>About</h3>
            <p>
              I think Microsoft named .Net so it wouldn’t show up in a Unix
              directory listing. (Oktal)
            </p>
          </div>
          <div>
            <h3>Interests</h3>
            <p>
              If Java had true garbage collection, most programs would delete
              themselves upon execution. (Robert Sewell)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

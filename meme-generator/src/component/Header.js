import useState from "react";
import memesData from "../memesData";

const Header = () => {
  const [randomImg, setRandomImg] = useState(
    "https://i.kym-cdn.com/entries/icons/mobile/000/023/920/thumb.jpg"
  );
  const getMemeImage = () => {
    const getMemeArr = memesData.data.memes;
    const getRandomNumber = Math.floor(Math.random() * getMemeArr.length);
    setRandomImg(getMemeArr[getRandomNumber].url);
  };
  return (
    <main className="header">
      <form>
        <input placeholder="Top text" type="text" className="form--input" />
        <input placeholder="Bottom text" type="text" className="form--input" />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🤡
        </button>
        <img src={randomImg} alt="meme" />
      </form>
    </main>
  );
};

export default Header;

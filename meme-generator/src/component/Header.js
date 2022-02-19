import { useState } from "react";
import memesData from "../memesData";

const Header = () => {
  const [randomImg, setRandomImg] = useState(
    "https://i.kym-cdn.com/entries/icons/mobile/000/023/920/thumb.jpg"
  );

  const getMemeImage = (e) => {
    e.preventDefault();
    const memeArr = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArr.length);
    setRandomImg(memeArr[randomNumber].url);
  };

  return (
    <main className="header">
      <form>
        <input placeholder="Top text" type="text" className="form--input" />
        <input placeholder="Bottom text" type="text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🤡
        </button>
        <img src={randomImg} alt="meme" />
      </form>
    </main>
  );
};

export default Header;

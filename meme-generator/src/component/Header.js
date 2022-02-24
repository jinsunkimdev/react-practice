import { useState, useEffect } from "react";
import axios from "axios";

const Header = () => {
  const [memesData, setMemesData] = useState({});

  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "https://i.imgflip.com/261o3j.jpg",
  });

  useEffect(() => {
    const getMemesData = async () => {
      const res = await axios(process.env.REACT_APP_MEME_API);
      const data = await res;
      setMemesData(data.data);
    };
    getMemesData();
  }, []);

  const getMemeImage = (e) => {
    e.preventDefault();
    const memeArr = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArr.length);
    const url = memesData.data.memes[randomNumber].url;
    setMeme((prevElement) => {
      return {
        ...prevElement,
        randomImg: url,
      };
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prevElement) => {
      return { ...prevElement, [name]: value };
    });
  };

  return (
    <main className="header">
      <form>
        <input
          placeholder="Top text"
          type="text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          placeholder="Bottom text"
          type="text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🤡
        </button>
      </form>
      <div className="meme">
        <img className="header--image" src={meme.randomImg} alt="meme" />
        <h2 className="meme--text topText">{meme.topText}</h2>
        <h2 className="meme--text bottomText">{meme.bottomText}</h2>
      </div>
    </main>
  );
};

export default Header;

import katie from "../images/katie-zaferes.png";
import star from "../images/star.png";

const Card = () => {
  return (
    <div cassName="card">
      <div className="card--profile">
        <div className="card--profile__status">SOLD OUT</div>
        <img className="card--profile__img" src={katie} alt="katie-zaferes" />
        <div className="card--profile__star">
          <img src={star} alt="star" />
          <span>5.0</span>
          <span className="color--grey">
            (6)<strong> · </strong>USA
          </span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <span className="card--profile__cost">
          <strong>From $136</strong>{" "}
          <span className="color--grey">/ person</span>
        </span>
      </div>
    </div>
  );
};

export default Card;

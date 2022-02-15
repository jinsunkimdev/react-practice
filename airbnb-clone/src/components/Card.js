import katie from "../images/katie-zaferes.png";
import star from "../images/star.png";

const Card = ({ rating, reviewCount, country, title, price }) => {
  return (
    <div cassName="card">
      <div className="card--profile">
        <div className="card--profile__status">SOLD OUT</div>
        <img className="card--profile__img" src={katie} alt="katie-zaferes" />
        <div className="card--profile__star">
          <img src={star} alt="star" />
          <span>{rating}</span>
          <span className="color--grey">
            ({reviewCount})<strong> · </strong>
            {country}
          </span>
        </div>
        <p>{title}</p>
        <span className="card--profile__cost">
          <strong>From {price}$</strong>
          <span className="color--grey">/ person</span>
        </span>
      </div>
    </div>
  );
};

export default Card;

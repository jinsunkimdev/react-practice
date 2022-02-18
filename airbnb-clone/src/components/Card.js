import star from "../images/star.png";

const Card = ({ openSpots, location, coverImg, stats, price, title }) => {
  let badgeText;
  if (openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      <div className="card--profile">
        {badgeText && <div className="card--profile__status">{badgeText}</div>}
        <img
          className="card--profile__img"
          src={`../images/${coverImg}`}
          alt="{img}"
        />
        <div className="card--profile__star">
          <img src={star} alt="star" />
          <span>{stats.rating}</span>
          <span className="color--grey">
            ({stats.reviewCount})<strong> · </strong>
            {location}
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

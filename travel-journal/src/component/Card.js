import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompass } from "@fortawesome/free-solid-svg-icons";
const Card = ({
  description,
  endDate,
  startDate,
  title,
  imageUrl,
  location,
  googleMapsUrl,
}) => {
  return (
    <section className="card">
      <img className="card--image" src={`../images/${imageUrl}`} alt={title} />
      <div className="card--container">
        <div className="card--location">
          <FontAwesomeIcon className="card--location__icon" icon={faCompass} />
          <div>{location}</div>
          <a href={googleMapsUrl}>View on Google Maps</a>
        </div>
        <h1>{title}</h1>
        <h3>{`${startDate} ~ ${endDate}`}</h3>
        <p className="card--description">{description}</p>
      </div>
    </section>
  );
};
export default Card;

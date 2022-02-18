import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookAtlas } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <h2 className="navbar--title">
          <FontAwesomeIcon className="navbar--title__icon" icon={faBookAtlas} />
          <p>My Travel Journal</p>
        </h2>
      </nav>
    </div>
  );
};
export default Navbar;

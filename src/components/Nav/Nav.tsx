import { Link } from "react-router-dom";
import Checklist from "../../assets/images/checklist-svgrepo-com.svg";
import "./Nav.scss";

const Nav = () => (
  <div className="nav">
    <Link to="/" className="nav__heading">
      Home
    </Link>
    <Link to="/tickets" className="nav__heading">
      Ticker Tracker
    </Link>
    <img className="nav__image" alt="Image of checklist" src={Checklist}></img>
  </div>
);

export default Nav;

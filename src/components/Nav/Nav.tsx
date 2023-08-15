import Checklist from "../../assets/images/checklist-svgrepo-com.svg";
import "./Nav.scss"


const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav__heading">Ticket Tracker</h1>
      <img
        className="nav__image"
        alt="Image of checklist"
        src={Checklist}
      ></img>
    </div>
  );
};

export default Nav;

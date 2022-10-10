import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            wale.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+234 7060 633 729</span>
          </div>

          <div className="itemContainer">
            <Mail className="icon" />
            <span>waleramson124@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hanburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

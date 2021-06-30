/* import { useHide } from "../hooks/useHide"; */
import { Link } from "react-router-dom";
/* import AdsButton from "./AdsButton"; */

export const Header = () => {
  /* const [state, toggleState] = useHide(); */

  return (
    <nav className="nav-bloc">
      <div className="nav-wrapper">
        <Link to="/">
          <span className="nav-logo">Normalis IMMO</span>
        </Link>
        {/* <div className="navbar">
          <ul className={`navbar-menu ${!state ? "hidden" : ""}`}>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                Accueil
              </a>
            </li>
            <li className="navbar-item">
              <a href="/" className="navbar-link">
                A propos
              </a>
            </li>
          </ul>

          <AdsButton className="navbar-link" title="Déposer une annonce" />

          <div className="hamburger-btn" onClick={toggleState}>
            <span className="hamburger"></span>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

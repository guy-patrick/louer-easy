import { useHide } from "../hooks/useHide";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOutStart } from "../redux/user/user.actions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selectors";
import AdsButton from "./AdsButton";

const Header = ({ currentUser, signOutStart }) => {
  const [state, toggleState] = useHide();

  return (
    <nav className="nav-bloc">
      <div className="nav-wrapper">
        <Link to="/">
          <span className="nav-logo">Normalis IMMO</span>
        </Link>
        <div className="navbar">
          <ul className={`navbar-menu ${!state ? "hidden" : ""}`}>
            <li className="navbar-item" onClick={toggleState}>
              <Link to="/" className="navbar-link">
                Accueil
              </Link>
            </li>
            <li className="navbar-item" onClick={toggleState}>
              {currentUser ? (
                <div className="navbar-link" onClick={signOutStart}>
                  Se déconnecter
                </div>
              ) : (
                <Link to="/signin" className="navbar-link">
                  Se connecter
                </Link>
              )}
            </li>
          </ul>

          <AdsButton
            className="navbar-link"
            page="signin"
            title="Déposer une annonce"
          />

          <div className="hamburger-btn" onClick={toggleState}>
            <span className="hamburger"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

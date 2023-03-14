import {
  faArrowRightToBracket,
  faHouseChimney,
  faList,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import HeaderStyled from "./HeaderStyles";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <div className="header__logo">
        <Logo className="header__ere" aria-label="logo" />
      </div>
      <div className="header__navigation">
        <NavLink to="/my-list">
          <FontAwesomeIcon
            icon={faList}
            className="header__to-my-list"
            aria-label="my-list"
          />
        </NavLink>

        <NavLink to="/login" aria-label="login">
          <FontAwesomeIcon
            icon={faArrowRightToBracket}
            className="header__log-in"
          />
        </NavLink>

        <NavLink to="/">
          <FontAwesomeIcon
            icon={faXmark}
            className="header__log-out"
            aria-label="logout"
          />
        </NavLink>

        <NavLink to="/home">
          <FontAwesomeIcon
            icon={faHouseChimney}
            className="header__to-home"
            aria-label="home"
          />
        </NavLink>
      </div>
    </HeaderStyled>
  );
};

export default Header;

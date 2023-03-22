import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileCirclePlus,
  faHouse,
  faRightFromBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

import { useAppSelector } from "../../store/hooks";
import HeaderStyled from "./HeaderStyles";
import useUserApi from "../../hooks/useUserApi/useUserApi";

const Header = (): JSX.Element => {
  const { isLogged } = useAppSelector((state) => state.user);
  const { logOutUser } = useUserApi();

  return (
    <HeaderStyled className="header">
      <div className="header__logo">
        <Logo
          className="header__logo"
          aria-label="logo of a brain with sentio written on the bottom"
        />
      </div>
      <div className="header__navigation">
        {isLogged && (
          <NavLink to="/create" aria-label="link to create">
            <FontAwesomeIcon
              className="header__create header__icon"
              aria-label="create image"
              icon={faFileCirclePlus}
              size={"2x"}
            />
          </NavLink>
        )}

        {!isLogged && (
          <NavLink to="/login" aria-label="link to login">
            <FontAwesomeIcon
              className="header__login header__icon"
              aria-label="login"
              icon={faUserPlus}
              size={"2x"}
            />
          </NavLink>
        )}

        {isLogged && (
          <NavLink to="/home" aria-label="logout link">
            <FontAwesomeIcon
              onClick={logOutUser}
              className="header__logout header__icon"
              aria-label="logout"
              icon={faRightFromBracket}
              size={"2x"}
            />
          </NavLink>
        )}

        <NavLink to="/home" aria-label="link to home">
          <FontAwesomeIcon
            className="header__home header__icon"
            aria-label="home"
            icon={faHouse}
            size={"2x"}
          />
        </NavLink>
      </div>
    </HeaderStyled>
  );
};

export default Header;

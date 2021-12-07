import NavbarLogout from "./NavbarSubMenu";

import { ReactComponent as HomeSVG } from "../../assets/svg/home.svg";
import { ReactComponent as MessengerSVG } from "../../assets/svg/messenger.svg";
import { ReactComponent as AddPostSVG } from "../../assets/svg/addPost.svg";
import { ReactComponent as PositionSVG } from "../../assets/svg/position.svg";
import { ReactComponent as HeartSVG } from "../../assets/svg/heart.svg";
import { Link } from "react-router-dom";

const NavbarIcons = () => {
  return (
    <ul className="Navbar-List">
      <Link to="/home">
        <HomeSVG />
      </Link>
      <li>
        <MessengerSVG />
      </li>
      <li>
        <AddPostSVG />
      </li>
      <li>
        <PositionSVG />
      </li>
      <li>
        <HeartSVG />
      </li>
      <NavbarLogout />
    </ul>
  );
};

export default NavbarIcons;

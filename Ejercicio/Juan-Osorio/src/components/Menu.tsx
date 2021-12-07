import React from 'react';
import "../styles/menu.scss";
import {ReactComponent as Home} from "../images/home.svg";
import {ReactComponent as Inbox} from "../images/inbox.svg";
import {ReactComponent as Explore} from "../images/explore.svg";
import {ReactComponent as Activity} from "../images/activity.svg";
import image from "../images/profile.png";
import ProfileIcon from "./ProfileIcon";

const Menu = () => {
    return (
        <div className="menu">
            <Home className="icon" />
            <Inbox className="icon"/>
            <Explore className="icon" />
            <Activity className="icon" />
            <ProfileIcon iconSize="small" image={image} />
        </div>
    )
}

export default Menu

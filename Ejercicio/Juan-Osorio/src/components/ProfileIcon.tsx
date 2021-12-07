import React from 'react';
import "../styles/profileIcon.scss";
import imagen3 from "../images/profile4.png";

interface props {
    iconSize: any,
    storyBorder: any,
    image: any
}

const ProfileIcon = (props: any) => {
    let profileImage = props.image
    return (
        <div className={props.storyBorder ? "storyBorder" : ""}>
            <img className={`profileIcon ${props.iconSize}`} src={profileImage} alt="profile" />
        </div>
    )
}

export default ProfileIcon

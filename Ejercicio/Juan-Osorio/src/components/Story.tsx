import React from 'react'
import "../styles/story.scss";
import ProfileIcon from './ProfileIcon';
import users from "../data/users";
import imagen4 from "../images/profile5.jpg";




const Story = () => {

    let accountName = users[Math.floor(Math.random() * users.length)].username;

    if (accountName.length > 10) {
        accountName = accountName.substring(0, 10) + "...";
    }

    return (
        <div className="story">
            <ProfileIcon iconSize="big" storyBorder={true} image={imagen4} />
            <span className="accountName">{accountName}</span>
        </div>
    )
}

export default Story

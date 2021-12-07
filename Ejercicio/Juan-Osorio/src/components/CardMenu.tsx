import React from 'react';
import "../styles/cardMenu.scss";
import { ReactComponent as Message } from "../images/message.svg";
import { ReactComponent as Comments } from "../images/comments.svg";
import { ReactComponent as Notificactions } from "../images/notifications.svg";
import { ReactComponent as Bookmark } from "../images/bookmark.svg";
const CardMenu = () => {
    return (
        <div className="cardMenu">
            <div className="interactions">
                <Notificactions className="icon" />
                <Comments className="icon" />
                <Message className="icon" />
            </div>
            <Bookmark className="icon" />
        </div>
    )
}

export default CardMenu

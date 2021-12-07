import "../styles/card.scss";
import React, { Profiler } from 'react';
import Profile from "./Profile";
import { ReactComponent as CardButton } from "../images/cardButton.svg";
import { ReactComponent as Reaction } from "../images/reaction.svg";
import CardMenu from "./CardMenu";
import imagen2 from "../images/profile3.jpg";
import imagen5 from "../images/profile6.png";

interface Props {
    comments: any,
    accountName: any,
}

const Card = (props: any) => {

    const {
        storyBorder,
        image,
        likedByText,
        likedByNumber,
        hours,
    } = props;

    return (
        <div className="card">
            <header>
                <Profile iconSize="medium" storyBorder={storyBorder} image={imagen2} />
                <CardButton className="cardButton" />
            </header>
            <img className="cardImage" src={image} alt="card content" />
            <CardMenu />
            <div className="likedBy">
                <Profile iconSize="small" hideAccountName={true} image={imagen5} />
                <span>
                    Les gusta a <strong>{likedByText}</strong> y {" "}
                    <strong>{likedByNumber} personas más </strong>
                </span>
            </div>
            <div className="watchComment"> Ver 1 Comentario</div>
            <div className="timePosted">HACE {hours} HORAS</div>
            <div className="addComment">
                <Reaction className="icon" />
                <div className="commentText">Agregar un comentario...</div>
                <div className="postText">Publicar</div>
            </div>
        </div>
    )

}

export default Card

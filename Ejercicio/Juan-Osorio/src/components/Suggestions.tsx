import React from 'react';
import "../styles/suggestions.scss"
import Profile from "./Profile";
import imagen from "../images/profile2.jpg";
import imagen2 from "../images/profile3.jpg";
import imagen3 from "../images/profile4.png";
import imagen4 from "../images/profile5.jpg";
import imagen5 from "../images/profile6.png";

const Suggestions = () => {
    return (
        <div className="suggestions">
            <div className="titleContainer">
                <div className="title">Sugerencias Para tí</div>
                <a href="/">Ver todo</a>
            </div>

            <Profile caption="albeiro sigue esta cuenta"
                urlText="Seguir" iconSize="medium"
                captionSize="small" image={imagen} storyBorder={true} />

            <Profile caption="Bernar sigue esta cuenta"
                urlText="Seguir" iconSize="medium"
                captionSize="small" image={imagen2} storyBorder={true} />

            <Profile caption="Alape sigue esta cuenta"
                urlText="Seguir" iconSize="medium"
                captionSize="small" image={imagen3} />

            <Profile caption="Jhon sigue esta cuenta"
                urlText="Seguir" iconSize="medium"
                captionSize="small" image={imagen4} storyBorder={true} />

            <Profile caption="Juan sigue esta cuenta"
                urlText="Seguir" iconSize="medium"
                captionSize="small" image={imagen5} />
        </div>
    )
}

export default Suggestions

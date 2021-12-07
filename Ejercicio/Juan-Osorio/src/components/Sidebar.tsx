import React from 'react'
import "../styles/sidebar.scss";
import Profile from "./Profile";
import Suggestions from "./Suggestions";
import Footer from "./Footer";
import imagen from "../images/profile.png"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Profile username="jjoso21" caption="Juan Osorio" urlText="Cambiar"
                iconSize="big"
                image={imagen}
            />
            <Suggestions />
            <Footer />
        </div>
    )
}

export default Sidebar

import React from 'react';
import "../styles/navigation.scss"
import logo from "../images/logo.png";
import searchIcon from "../images/searchIcon.png";
import Menu from "./Menu";


const Navigation = () => {
    return (
        <div className="navigation">
            <div className="container">
                <img className="logo" src={logo} alt="instagram logo" />
                <div className="search_bar">
                    <img className="searchIcon" src={searchIcon} alt="seacrh icon" />
                    <span className="searchText">Buscar</span>
                </div>
                <Menu />
            </div>
        </div>
    )
}

export default Navigation

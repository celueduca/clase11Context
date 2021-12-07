import React from 'react';
import Navigation from "../components/Navigation";
import Cards from "../components/Cards";
import Sidebar from "../components/Sidebar";
import "../styles/App.scss";

const MainPage = () => {
    return (
        <div className="App">
            <Navigation />
            <main>
                <div className="container">
                    <Cards />
                    <Sidebar />
                </div>
            </main>
        </div>
    )
}

export default MainPage;

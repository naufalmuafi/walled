import React from "react";

import Navbar from "../components/common/Navbar";
import Hero from "../components/Hero";
import Account from "../components/Account";

import "../styles/hero.css";

function Home() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Account />
        </div>
    );
}

export default Home;

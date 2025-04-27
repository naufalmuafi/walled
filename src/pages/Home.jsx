import React from "react";
import Navbar from "../components/common/Navbar";
import Hero from "../components/Hero";
import "../styles/hero.css";

function Home() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
        </div>
    );
}

export default Home;

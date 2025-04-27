import React from "react";

import Navbar from "../components/common/Navbar";
import Hero from "../components/Hero";
import Account from "../components/Account";

import "../styles/hero.css";
import Transactions from "../components/Transactions";

function Home() {
    return (
        <div className="app">
            <Navbar />
            <Hero />
            <Account />
            <Transactions />
        </div>
    );
}

export default Home;

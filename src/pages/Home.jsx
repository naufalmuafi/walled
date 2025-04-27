import React from "react";

import Navbar from "../components/common/Navbar";
import Hero from "../components/Hero";
import Account from "../components/Account";
import Transactions from "../components/Transactions";

import "../styles/hero.css";

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

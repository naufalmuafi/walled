import React, { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/common/Navbar";
import Hero from "../components/Hero";
import Account from "../components/Account";
import Transactions from "../components/Transactions";

import "../styles/hero.css";

function Home() {
    const userUrl = "http://localhost:3000/user";
    const transactionsUrl = "http://localhost:3000/transactions";

    const [userData, setUserData] = useState({
        name: "",
        accountNumber: "",
        balance: "",
        currency: "",
    });
    const [transactionsData, setTransactionsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getUserData = async () => {
        setIsLoading(true);
        await axios.get(userUrl).then((response) => {
            console.log("user", response.data);

            const { name, accountNumber, balance, currency } = response.data;
            setUserData({
                name,
                accountNumber,
                balance,
                currency,
            });
            setIsLoading(false);
        });
    };

    const getTransactionsData = async () => {
        setIsLoading(true);
        await axios.get(transactionsUrl).then((response) => {
            console.log("transaction", response.data);
            setTransactionsData(response.data);
            setIsLoading(false);
        });
    };

    useEffect(() => {
        // Fetch user data from the API
        getUserData();
        getTransactionsData();
    }, []);

    return (
        <div className="app">
            <Navbar />
            <Hero userData={userData} isLoading={isLoading} />
            <Account userData={userData} isLoading={isLoading} />
            <Transactions
                transactionsData={transactionsData}
                isLoading={isLoading}
            />
        </div>
    );
}

export default Home;

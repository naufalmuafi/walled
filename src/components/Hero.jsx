import React from "react";
import profPict from "../assets/chelsea.jpg";
import "../styles/Hero.css";

function Hero(userData, isLoading) {
    const userName = userData.userData.name;
    const firstName = userName.split(" ")[0];

    return (
        <div className="hero p-5">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="greeting col-md-9">
                        <h1 className="display-4 fw-bold mb-3">
                            Good Morning,{" "}
                            <span className="text-primary">
                                {isLoading ? (
                                    <div
                                        class="spinner-border"
                                        role="status"
                                    ></div>
                                ) : (
                                    firstName + "!"
                                )}
                            </span>
                        </h1>
                        <p className="lead mb-4">
                            Check all your incoming and outgoing transactions
                            here
                        </p>
                    </div>
                    <div className="my-account col-md-3 ms-auto">
                        <div className="row align-items-center justify-content-end">
                            <div className="col text-end">
                                {isLoading ? (
                                    <div class="spinner-border" role="status">
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                ) : (
                                    <>
                                        <p className="fw-bold mb-1">
                                            {userName}
                                        </p>
                                        <p className="text-secondary small">
                                            Personal Account
                                        </p>
                                    </>
                                )}
                            </div>

                            <div className="col-auto">
                                <img
                                    src={profPict}
                                    alt="Profile Picture"
                                    className="rounded-circle profile-image"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;

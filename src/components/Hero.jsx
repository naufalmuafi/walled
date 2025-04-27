import React from "react";
import profPict from "../assets/chelsea.jpg";
import "../styles/Hero.css";

function Hero() {
    return (
        <div className="hero p-5">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="greeting col-md-9">
                        <h1 className="display-4 fw-bold mb-3">
                            Good Morning,{" "}
                            <span className="text-primary">Chelsea!</span>
                        </h1>
                        <p className="lead mb-4">
                            Check all your incoming and outgoing transactions
                            here
                        </p>
                    </div>
                    <div className="my-account col-md-3 ms-auto">
                        <div className="row align-items-center justify-content-end">
                            <div className="col text-end">
                                <p className="fw-bold mb-1">
                                    Chelsea Immanuela
                                </p>
                                <p className="text-secondary small">
                                    Personal Account
                                </p>
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

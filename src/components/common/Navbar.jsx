import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid mx-5 py-2">
                <a href="#" className="navbar-brand d-flex align-items-center">
                    <img src="walled_logo.svg" alt="logo_walled" />
                </a>
                <button
                    className="navbar-toggler mt-3 ms-auto"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div
                    className="collapse navbar-collapse ms-auto justify-content-end"
                    id="navbarCollapse"
                >
                    <ul className="navbar-nav text-end py-3">
                        <li className="nav-item mx-4">
                            <a
                                href="#"
                                className="nav-link text-primary active fw-bold"
                            >
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item mx-4">
                            <a href="#" className="nav-link">
                                Transfer
                            </a>
                        </li>
                        <li className="nav-item mx-4">
                            <a href="#" className="nav-link">
                                Topup
                            </a>
                        </li>
                        <li className="nav-item mx-4">
                            <a href="#" className="nav-link">
                                Sign Out
                            </a>
                        </li>
                        <li className="nav-item border-start">
                            <a href="#" className="nav-link mx-4">
                                <i className="bi bi-sun text-warning h4"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

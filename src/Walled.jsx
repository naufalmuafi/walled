// import { useState } from "react";
// import "./App.css";

function App() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a href="#" className="navbar-brand">
                        <img src="walled_logo.svg" alt="Logo Walled" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav">
                        <a href="#" className="nav-item nav-link bg-primary">
                            Dashboard
                        </a>
                        <a href="#" className="nav-item nav-link">
                            Transfer
                        </a>
                        <a href="#" className="nav-item nav-link">
                            Topup
                        </a>
                        <a href="#" className="nav-item nav-link">
                            Sign Out
                        </a>
                    </div>
                </div>
            </nav>

            <h1>My React App</h1>
            <p>This is a simple React application.</p>
            <p>It uses Vite for fast development and build.</p>
            <p>Enjoy coding!</p>
        </>
    );
}

export default App;

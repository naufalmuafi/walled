import React from "react";
import Home from "./pages/Home";
import Transfer from "./pages/Transfer";
import TopUp from "./pages/TopUp";
import Login from "./pages/Login";

import LoginForm from "./LoginForm";
import { AuthProvider, useAuth } from "./context/AuthContext";

const AppContent = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Home /> : <LoginForm />;
};

function App() {
    return (
        <AuthProvider>
            {/* <Login /> */}
            {/* <Home /> */}
            {/* <Transfer /> */}
            {/* <TopUp /> */}

            <div className="app">
                <AppContent />
            </div>
        </AuthProvider>
    );
}

export default App;

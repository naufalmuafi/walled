import { AuthProvider, useAuth } from "./context/AuthContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Transfer from "./pages/Transfer";
import TopUp from "./pages/TopUp";
import Login from "./pages/Login";
import LoginForm from "./LoginForm";

const AppContent = () => {
    const { isAuthenticated } = useAuth();

    return isAuthenticated ? <Home /> : <LoginForm />;
};

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppContent />} />
                    <Route path="/transfer" element={<Transfer />} />
                    <Route path="/topup" element={<TopUp />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;

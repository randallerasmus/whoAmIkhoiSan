import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignUpForm } from "./features/SignUpForm/SignUpForm";
import { LoginForm } from "./features/LoginForm/LoginForm";
import { UserDashboardForm } from "./features/Dashboard/Dashboard";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="app-container">
                <div className="floating-text">
                    <h1 className="title">KhoiSan Heritage DNA Discovery</h1>
                    <p className="subtitle">Rediscover Your Roots</p>
                </div>
                <Routes>
                    <Route path="/" element={<SignUpForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/dashboard" element={<UserDashboardForm />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

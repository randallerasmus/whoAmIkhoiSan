import React from "react";
import styled, { keyframes } from "styled-components";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import backgroundImage from "./assets/img.png"; // Import the background image
import { SignUpForm } from "./features/SignUpForm/SignUpForm";
import { LoginForm } from "./features/LoginForm/LoginForm"; // Import the LoginForm
import { UserDashboard } from "./features/Dashboard/Dashboard"; // Import the UserDashboard

// Define a floating animation
const float = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
    100% {
        transform: translateY(0);
    }
`;

// Background with an ancient image
const AppContainer = styled.div`
    text-align: center;
    font-family: "Arial, sans-serif";
    background: url(${backgroundImage}) no-repeat center center fixed;
    background-size: cover;
    color: white;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`;

const FloatingText = styled.div`
    animation: ${float} 3s ease-in-out infinite;
    margin-bottom: 2rem;
`;

const Title = styled.h1`
    font-size: 3.5rem;
    margin: 0;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    margin: 0.5rem 0 1.5rem;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7);

    @media (max-width: 768px) {
        font-size: 1.2rem;
    }
`;

function App() {
    return (
        <Router>
            <AppContainer>
                <FloatingText>
                    <Title>KhoiSan Heritage DNA Discovery</Title>
                    <Subtitle>Rediscover Your Roots</Subtitle>
                </FloatingText>
                <Routes>
                    <Route path="/" element={<SignUpForm />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/dashboard" element={<UserDashboard />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </AppContainer>
        </Router>
    );
}

export default App;

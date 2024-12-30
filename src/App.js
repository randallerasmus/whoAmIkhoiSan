import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import backgroundImage from "./assets/img.png"; // Import the background image
import { SignUpForm } from "./features/SignUpForm/SignUpForm";
import { LoginForm } from "./features/LoginForm/LoginForm"; // Import the LoginForm

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
    background: url(${backgroundImage}) no-repeat center center fixed; /* Use imported image */
    background-size: cover; /* Ensure the image covers the entire screen */
    color: white;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FloatingText = styled.div`
    animation: ${float} 3s ease-in-out infinite; /* Apply the floating animation */
    margin-bottom: 2rem;
`;

const Title = styled.h1`
    font-size: 4rem;
    margin: 0;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7); /* Add text shadow for readability */
`;

const Subtitle = styled.p`
    font-size: 1.5rem;
    margin: 0.5rem 0 1.5rem;
    text-shadow: 1px 1px 6px rgba(0, 0, 0, 0.7); /* Add text shadow for readability */
`;

const Button = styled.button`
    margin-top: 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    color: white;
    background-color: #4caf50;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #388e3c;
    }
`;

function App() {
    const [showLogin, setShowLogin] = useState(false); // State to toggle login form

    return (
        <AppContainer>
            <FloatingText>
                <Title>KhoiSan Heritage DNA Discovery</Title>
                <Subtitle>Rediscover Your Roots</Subtitle>
            </FloatingText>
            {!showLogin ? (
                <>
                    <SignUpForm />
                    <Button onClick={() => setShowLogin(true)}>Already Registered? Login</Button>
                </>
            ) : (
                <LoginForm goBack={() => setShowLogin(false)} /> // Render LoginForm with a goBack prop
            )}
        </AppContainer>
    );
}

export default App;

import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
    background: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
    color: white;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
    width: 90%;
    max-width: 400px;
    text-align: center;

    @media (max-width: 480px) {
        width: 100%;
        padding: 1rem;
    }
`;

const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    margin: 0.5rem 0;
    border: 1px solid #444;
    border-radius: 5px;
    background: #333;
    color: white;

    &::placeholder {
        color: #aaa;
    }
`;

const Button = styled.button`
    width: 100%;
    padding: 0.75rem;
    margin-top: 1rem;
    border: none;
    border-radius: 5px;
    background-color: #4caf50;
    color: white;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #388e3c;
    }
`;

const BackButton = styled(Button)`
    background-color: #f44336;

    &:hover {
        background-color: #d32f2f;
    }
`;

export function LoginForm({ goBack }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Logging in with:", { email, password });
        // Implement login logic here
    };

    return (
        <FormContainer>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button type="submit">Login</Button>
            </form>
            <BackButton onClick={goBack}>Back to Registration</BackButton>
        </FormContainer>
    );
}

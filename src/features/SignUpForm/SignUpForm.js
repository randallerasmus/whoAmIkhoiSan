import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const FormContainer = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  margin: 2rem auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 1rem;
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 2rem;

  @media (max-width: 480px) {
    font-size: 1.75rem;
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  margin-top: 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: ${(props) => (props.disabled ? "#ccc" : "black")};
  color: ${(props) => (props.disabled ? "#666" : "white")};
  font-size: 1.25rem;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    background-color: ${(props) => (props.disabled ? "#ccc" : "#388e3c")};
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    font-size: 1rem;
  }
`;

const RadioContainer = styled.div`
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-around;
`;

const Label = styled.label`
  font-size: 1.25rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RadioInput = styled.input`
  width: 1.5rem;
  height: 1.5rem;
`;

export function SignUpForm() {
    const [selectedOption, setSelectedOption] = useState("");
    const navigate = useNavigate(); // Hook for navigation

    const handleOptionChange = (e) => {
        const value = e.target.value;
        setSelectedOption(value);
    };

    const handleDashboardNavigation = () => {
        if (selectedOption === "Yes") {
            navigate("/dashboard"); // Navigate to the Dashboard route
        }
    };

    const handleLogin = () => {
        navigate("/dashboard"); // Navigate to the Dashboard route
    };

    return (
        <FormContainer>
            <FormTitle>Am I Khoi San?</FormTitle>
            <RadioContainer>
                <Label>
                    <RadioInput
                        type="radio"
                        value="Yes"
                        checked={selectedOption === "Yes"}
                        onChange={handleOptionChange}
                    />
                    Yes
                </Label>
                <Label>
                    <RadioInput
                        type="radio"
                        value="No"
                        checked={selectedOption === "No"}
                        onChange={handleOptionChange}
                    />
                    No
                </Label>
            </RadioContainer>
            <Button
                disabled={selectedOption !== "Yes"}
                onClick={handleDashboardNavigation}
            >
                Login
            </Button>

        </FormContainer>
    );
}

import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px;
  margin: 2rem auto;

  @media (max-width: 768px) {
    padding: 1.5rem; /* Adjust padding for tablets */
  }

  @media (max-width: 480px) {
    width: 95%; /* Make the form take up more width on smaller screens */
    padding: 1rem; /* Adjust padding for small devices */
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 1rem;
  color: #333;
  font-size: 1.5rem;

  @media (max-width: 480px) {
    font-size: 1.25rem; /* Smaller font size on mobile */
  }
`;

const Input = styled.input`
  width: 92%;
  padding: 0.75rem;
  margin: 0.5rem 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

  @media (max-width: 480px) {
    padding: 0.2rem; /* Reduce padding for small devices */
    font-size: 0.9rem; /* Adjust font size */
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 0.75rem;
  margin-top: 1rem;
  border: none;
  border-radius: 5px;
  background-color: black;
  color: white;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #388e3c;
  }

  @media (max-width: 480px) {
    padding: 0.5rem; /* Adjust padding for smaller screens */
    font-size: 0.9rem; /* Adjust font size */
  }
`;

const SuccessMessage = styled.p`
  margin-top: 1rem;
  color: #4caf50;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Adjust font size for mobile */
  }
`;

export function SignUpForm() {
    const [formData, setFormData] = useState({ name: "", email: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        setIsSubmitted(true);
    };

    return (
        <FormContainer>
            <FormTitle>Sign Up for DNA Testing</FormTitle>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <Input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <Button type="submit">Register</Button>
                </form>
            ) : (
                <SuccessMessage>Thank you for signing up! We'll be in touch soon.</SuccessMessage>
            )}
        </FormContainer>
    );
}

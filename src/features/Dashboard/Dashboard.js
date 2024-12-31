import React, { useState } from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  background: #f4f4f4;
  color: #333;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 800px;
  margin: 2rem auto;
  font-family: "Arial, sans-serif";
`;

const Section = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #4caf50;
`;

const ProgressContainer = styled.div`
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  background: #4caf50;
  height: 20px;
  width: ${(props) => props.progress}%;
  transition: width 0.3s ease-in-out;
`;

const InfoContainer = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const InfoField = styled.div`
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  label {
    font-weight: bold;
  }

  input {
    width: 70%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

const Button = styled.button`
  background: #4caf50;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background: #388e3c;
  }

  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const FAQList = styled.ul`
  list-style: none;
  padding: 0;
`;

const FAQItem = styled.li`
  margin: 1rem 0;
  border-bottom: 1px solid #ddd;
  padding-bottom: 1rem;

  h4 {
    margin: 0;
  }

  p {
    margin: 0.5rem 0 0;
  }
`;

const ContactSection = styled.div`
  margin-top: 1rem;
  text-align: center;

  p {
    margin: 0.5rem 0;
  }
`;

export function UserDashboard() {
    const [progress, setProgress] = useState(60); // Example progress percentage
    const [personalInfo, setPersonalInfo] = useState({
        name: "John Doe",
        email: "johndoe@example.com",
    });
    const [isEditing, setIsEditing] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPersonalInfo({ ...personalInfo, [name]: value });
    };

    const handleSave = () => {
        setIsEditing(false);
        console.log("Saved Personal Info:", personalInfo);
    };

    return (
        <DashboardContainer>
            {/* Registration Progress Section */}
            <Section>
                <Title>Registration Progress</Title>
                <ProgressContainer>
                    <ProgressBar progress={progress} />
                </ProgressContainer>
                <p>{progress}% Complete</p>
            </Section>

            {/* Personal Information Section */}
            <Section>
                <Title>Personal Information</Title>
                <InfoContainer>
                    {Object.keys(personalInfo).map((key) => (
                        <InfoField key={key}>
                            <label>{key.charAt(0).toUpperCase() + key.slice(1)}:</label>
                            <input
                                type="text"
                                name={key}
                                value={personalInfo[key]}
                                onChange={handleInputChange}
                                disabled={!isEditing}
                            />
                        </InfoField>
                    ))}
                    <Button onClick={isEditing ? handleSave : () => setIsEditing(true)}>
                        {isEditing ? "Save" : "Edit"}
                    </Button>
                </InfoContainer>
            </Section>

            {/* FAQs Section */}
            <Section>
                <Title>FAQs</Title>
                <FAQList>
                    <FAQItem>
                        <h4>What is this program about?</h4>
                        <p>This program helps individuals discover their KhoiSan heritage.</p>
                    </FAQItem>
                    <FAQItem>
                        <h4>How long does the testing take?</h4>
                        <p>Testing typically takes 4-6 weeks once your sample is received.</p>
                    </FAQItem>
                </FAQList>
            </Section>

            {/* Contact Support Section */}
            <Section>
                <Title>Contact Support</Title>
                <ContactSection>
                    <p>Email: support@example.com</p>
                    <p>Phone: +1 (555) 123-4567</p>
                </ContactSection>
            </Section>
        </DashboardContainer>
    );
}

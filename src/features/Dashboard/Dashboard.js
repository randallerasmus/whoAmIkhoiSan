import React, { useState } from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
    display: flex;
    background: #f9f9f9;
    color: #333;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    width: 95%;
    max-width: 1200px;
    margin: 2rem auto;
    font-family: "Arial, sans-serif";
`;

const SideMenu = styled.div`
    flex: 1;
    max-width: 200px;
    margin-right: 1rem;
`;

const MenuItem = styled.button`
    background: ${(props) => (props.active ? "#4caf50" : "#fff")};
    color: ${(props) => (props.active ? "#fff" : "#333")};
    border: none;
    border-left: 4px solid ${(props) => (props.active ? "#4caf50" : "transparent")};
    padding: 1rem;
    text-align: left;
    width: 100%;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    transition: background 0.3s ease;

    &:hover {
        background: ${(props) => (props.active ? "#388e3c" : "#f1f1f1")};
    }
`;

const ContentContainer = styled.div`
    flex: 3;
    background: white;
    padding: 1.5rem;
    border-radius: 5px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
    margin-bottom: 1rem;
    color: #4caf50;
`;

const Field = styled.div`
    margin: 1rem 0;

    label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    input, select, textarea {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 5px;
    }

    textarea {
        resize: none;
    }
`;

const CheckboxField = styled.div`
    margin: 1rem 0;

    label {
        font-weight: normal;
        margin-left: 0.5rem;
    }

    a {
        color: #4caf50;
        text-decoration: none;
        margin-left: 0.5rem;
    }

    a:hover {
        text-decoration: underline;
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

export function UserDashboardForm() {
    const [activeSection, setActiveSection] = useState("personal");

    const renderSection = () => {
        switch (activeSection) {
            case "personal":
                return (
                    <div>
                        <SectionTitle>Personal Information</SectionTitle>
                        <Field>
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name" />
                        </Field>
                        <Field>
                            <label>Date of Birth</label>
                            <input type="date" />
                        </Field>
                        <Field>
                            <label>Gender</label>
                            <select>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </Field>
                    </div>
                );
            case "contact":
                return (
                    <div>
                        <SectionTitle>Contact Information</SectionTitle>
                        <Field>
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter your email" />
                        </Field>
                        <Field>
                            <label>Phone Number (Optional)</label>
                            <input type="text" placeholder="Enter your phone number" />
                        </Field>
                        <Field>
                            <label>Mailing Address</label>
                            <textarea rows="4" placeholder="Enter your address"></textarea>
                        </Field>
                    </div>
                );
            case "consent":
                return (
                    <div>
                        <SectionTitle>Consent</SectionTitle>
                        <CheckboxField>
                            <input type="checkbox" />
                            <label>
                                I acknowledge and agree to the
                                <a href="/terms" target="_blank">Terms and Conditions</a>
                                and
                                <a href="/privacy" target="_blank">Privacy Policy</a>.
                            </label>
                        </CheckboxField>
                        <CheckboxField>
                            <input type="checkbox" />
                            <label>I consent to DNA analysis as per the provided details.</label>
                        </CheckboxField>
                    </div>
                );
            case "payment":
                return (
                    <div>
                        <SectionTitle>Payment Information</SectionTitle>
                        <Field>
                            <label>Card Number</label>
                            <input type="text" placeholder="Enter your card number" />
                        </Field>
                        <Field>
                            <label>Expiration Date</label>
                            <input type="text" placeholder="MM/YY" />
                        </Field>
                        <Field>
                            <label>CVV</label>
                            <input type="text" placeholder="Enter your CVV" />
                        </Field>
                        <Field>
                            <label>Name on Card</label>
                            <input type="text" placeholder="Enter name on the card" />
                        </Field>
                    </div>
                );
            case "preferences":
                return (
                    <div>
                        <SectionTitle>Ancestry and Health Preferences</SectionTitle>
                        <CheckboxField>
                            <input type="checkbox" />
                            <label>Opt-in for health insights.</label>
                        </CheckboxField>
                        <Field>
                            <label>Data Sharing Preferences</label>
                            <select>
                                <option value="research">Allow for research</option>
                                <option value="third-party">Share with third parties</option>
                                <option value="none">Do not share</option>
                            </select>
                        </Field>
                    </div>
                );
            case "sample":
                return (
                    <div>
                        <SectionTitle>Sample Collection</SectionTitle>
                        <Field>
                            <label>Sample Submission ID</label>
                            <input type="text" placeholder="Enter your submission ID" />
                        </Field>
                        <Field>
                            <label>Method of Collection</label>
                            <select>
                                <option value="saliva">Saliva</option>
                                <option value="cheek-swab">Cheek Swab</option>
                            </select>
                        </Field>
                    </div>
                );
            case "additional":
                return (
                    <div>
                        <SectionTitle>Additional Considerations</SectionTitle>
                        <Field>
                            <label>Upload Government-issued ID (if required)</label>
                            <input type="file" />
                        </Field>
                        <CheckboxField>
                            <input type="checkbox" />
                            <label>Parental consent (for minors)</label>
                        </CheckboxField>
                        <Field>
                            <label>Parent/Guardian Name</label>
                            <input type="text" placeholder="Enter parent/guardian name" />
                        </Field>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <DashboardContainer>
            <SideMenu>
                <MenuItem active={activeSection === "personal"} onClick={() => setActiveSection("personal")}>
                    Personal Info
                </MenuItem>
                <MenuItem active={activeSection === "contact"} onClick={() => setActiveSection("contact")}>
                    Contact Info
                </MenuItem>
                <MenuItem active={activeSection === "consent"} onClick={() => setActiveSection("consent")}>
                    Consent
                </MenuItem>
                <MenuItem active={activeSection === "payment"} onClick={() => setActiveSection("payment")}>
                    Payment Info
                </MenuItem>
                <MenuItem active={activeSection === "preferences"} onClick={() => setActiveSection("preferences")}>
                    Preferences
                </MenuItem>
                <MenuItem active={activeSection === "sample"} onClick={() => setActiveSection("sample")}>
                    Sample Collection
                </MenuItem>
                <MenuItem active={activeSection === "additional"} onClick={() => setActiveSection("additional")}>
                    Additional Info
                </MenuItem>
            </SideMenu>
            <ContentContainer>{renderSection()}</ContentContainer>
        </DashboardContainer>
    );
}

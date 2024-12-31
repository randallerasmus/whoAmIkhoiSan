import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css";

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

    return (
        <div className="form-container">
            <h2 className="form-title">Am I Khoi San?</h2>
            <div className="radio-container">
                <label className="label">
                    <input
                        className="radio-input"
                        type="radio"
                        value="Yes"
                        checked={selectedOption === "Yes"}
                        onChange={handleOptionChange}
                    />
                    Yes
                </label>
                <label className="label">
                    <input
                        className="radio-input"
                        type="radio"
                        value="No"
                        checked={selectedOption === "No"}
                        onChange={handleOptionChange}
                    />
                    No
                </label>
            </div>
            <button
                className="button"
                disabled={selectedOption !== "Yes"}
                onClick={handleDashboardNavigation}
            >
                Login
            </button>
        </div>
    );
}

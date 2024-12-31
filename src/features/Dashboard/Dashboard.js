import React, { useState } from "react";
import "./Dashboard.css";

export function UserDashboardForm() {
    const [activeSection, setActiveSection] = useState("personal");

    const renderSection = () => {
        switch (activeSection) {
            case "personal":
                return (
                    <div>
                        <h3 className="section-title">Personal Information</h3>
                        <div className="field">
                            <label>Full Name</label>
                            <input type="text" placeholder="Enter your full name" />
                        </div>
                        <div className="field">
                            <label>Date of Birth</label>
                            <input type="date" />
                        </div>
                        <div className="field">
                            <label>Gender</label>
                            <select>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                );
            case "contact":
                return (
                    <div>
                        <h3 className="section-title">Contact Information</h3>
                        <div className="field">
                            <label>Email Address</label>
                            <input type="email" placeholder="Enter your email" />
                        </div>
                        <div className="field">
                            <label>Phone Number (Optional)</label>
                            <input type="text" placeholder="Enter your phone number" />
                        </div>
                        <div className="field">
                            <label>Mailing Address</label>
                            <textarea rows="4" placeholder="Enter your address"></textarea>
                        </div>
                    </div>
                );
            case "consent":
                return (
                    <div>
                        <h3 className="section-title">Consent</h3>
                        <div className="checkbox-field">
                            <input type="checkbox" />
                            <label>
                                I acknowledge and agree to the
                                <a href="/terms" target="_blank">Terms and Conditions</a>
                                and
                                <a href="/privacy" target="_blank">Privacy Policy</a>.
                            </label>
                        </div>
                        <div className="checkbox-field">
                            <input type="checkbox" />
                            <label>I consent to DNA analysis as per the provided details.</label>
                        </div>
                    </div>
                );
            case "payment":
                return (
                    <div>
                        <h3 className="section-title">Payment Information</h3>
                        <div className="field">
                            <label>Card Number</label>
                            <input type="text" placeholder="Enter your card number" />
                        </div>
                        <div className="field">
                            <label>Expiration Date</label>
                            <input type="text" placeholder="MM/YY" />
                        </div>
                        <div className="field">
                            <label>CVV</label>
                            <input type="text" placeholder="Enter your CVV" />
                        </div>
                        <div className="field">
                            <label>Name on Card</label>
                            <input type="text" placeholder="Enter name on the card" />
                        </div>
                    </div>
                );
            case "preferences":
                return (
                    <div>
                        <h3 className="section-title">Ancestry and Health Preferences</h3>
                        <div className="checkbox-field">
                            <input type="checkbox" />
                            <label>Opt-in for health insights.</label>
                        </div>
                        <div className="field">
                            <label>Data Sharing Preferences</label>
                            <select>
                                <option value="research">Allow for research</option>
                                <option value="third-party">Share with third parties</option>
                                <option value="none">Do not share</option>
                            </select>
                        </div>
                    </div>
                );
            case "sample":
                return (
                    <div>
                        <h3 className="section-title">Sample Collection</h3>
                        <div className="field">
                            <label>Sample Submission ID</label>
                            <input type="text" placeholder="Enter your submission ID" />
                        </div>
                        <div className="field">
                            <label>Method of Collection</label>
                            <select>
                                <option value="saliva">Saliva</option>
                                <option value="cheek-swab">Cheek Swab</option>
                            </select>
                        </div>
                    </div>
                );
            case "additional":
                return (
                    <div>
                        <h3 className="section-title">Additional Considerations</h3>
                        <div className="field">
                            <label>Upload Government-issued ID (if required)</label>
                            <input type="file" />
                        </div>
                        <div className="checkbox-field">
                            <input type="checkbox" />
                            <label>Parental consent (for minors)</label>
                        </div>
                        <div className="field">
                            <label>Parent/Guardian Name</label>
                            <input type="text" placeholder="Enter parent/guardian name" />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="dashboard-container">
            <div className="side-menu">
                <button
                    className={`menu-item ${activeSection === "personal" ? "active" : ""}`}
                    onClick={() => setActiveSection("personal")}
                >
                    Personal Info
                </button>
                <button
                    className={`menu-item ${activeSection === "contact" ? "active" : ""}`}
                    onClick={() => setActiveSection("contact")}
                >
                    Contact Info
                </button>
                <button
                    className={`menu-item ${activeSection === "consent" ? "active" : ""}`}
                    onClick={() => setActiveSection("consent")}
                >
                    Consent
                </button>
                <button
                    className={`menu-item ${activeSection === "payment" ? "active" : ""}`}
                    onClick={() => setActiveSection("payment")}
                >
                    Payment Info
                </button>
                <button
                    className={`menu-item ${activeSection === "preferences" ? "active" : ""}`}
                    onClick={() => setActiveSection("preferences")}
                >
                    Preferences
                </button>
                <button
                    className={`menu-item ${activeSection === "sample" ? "active" : ""}`}
                    onClick={() => setActiveSection("sample")}
                >
                    Sample Collection
                </button>
                <button
                    className={`menu-item ${activeSection === "additional" ? "active" : ""}`}
                    onClick={() => setActiveSection("additional")}
                >
                    Additional Info
                </button>
            </div>
            <div className="content-container">{renderSection()}</div>
        </div>
    );
}

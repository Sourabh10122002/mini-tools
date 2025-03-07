import React, { useState, useEffect } from "react";
import { TOTP } from "jsotp";

 const GoogleAuthenticator = () => {
    const [secret, setSecret] = useState("");
    const [code, setCode] = useState("");
    const [timeLeft, setTimeLeft] = useState(30);
    const [title, setTitle] = useState("");
    const [savedPasswords, setSavedPasswords] = useState([]);

    useEffect(() => {
        const storedPasswords = JSON.parse(localStorage.getItem("savedPasswords")) || [];
        setSavedPasswords(storedPasswords);
    }, []);

    // Generate TOTP code for a given secret key
    const generateCode = (secretKey) => {
        if (secretKey) {
            const totp = new TOTP(secretKey);
            return totp.now();
        }
        return "";
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const currentTime = Math.floor(Date.now() / 1000);
            const secondsRemaining = 30 - (currentTime % 30);
            setTimeLeft(secondsRemaining);

            if (secret) {
                setCode(generateCode(secret));
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [secret]);

    const savePassword = () => {
        if (!title || !secret) {
            alert("Please add a title and secret key before saving.");
            return;
        }

        const newPasswordEntry = { title, secret };
        const updatedPasswords = [...savedPasswords, newPasswordEntry];
        setSavedPasswords(updatedPasswords);
        localStorage.setItem("savedPasswords", JSON.stringify(updatedPasswords));
        setTitle("");
    };

    const deletePassword = (index) => {
        const updatedPasswords = savedPasswords.filter((_, i) => i !== index);
        setSavedPasswords(updatedPasswords);
        localStorage.setItem("savedPasswords", JSON.stringify(updatedPasswords));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 to-gray-900 text-white flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-4xl space-y-8">
                {/* Header */}
                <h1 className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                    Google Authenticator
                </h1>

                {/* Password Generator Section */}
                <div className="bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl p-8">
                    {/* Secret Key Input */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Secret Key
                        </label>
                        <input
                            type="text"
                            value={secret}
                            onChange={(e) => setSecret(e.target.value)}
                            placeholder="Enter your secret key"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Generated Code */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Verification Code
                        </label>
                        <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                            <span className="text-gray-300">{code || "No code generated"}</span>
                            <span className="text-sm text-gray-400">{timeLeft}s</span>
                        </div>
                    </div>

                    {/* Title Input for Saving Password */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Title for Password
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter a title for the password"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Save Button */}
                    <button
                        onClick={savePassword}
                        className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300"
                    >
                        Save Password
                    </button>
                </div>

                {/* Saved Passwords Section */}
                <div className="bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl p-8">
                    <h2 className="text-2xl font-semibold mb-6">Saved Passwords</h2>
                    {savedPasswords.length > 0 ? (
                        <ul className="space-y-4">
                            {savedPasswords.map((entry, index) => (
                                <li key={index} className="bg-gray-700 p-4 rounded-lg flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold text-gray-200">{entry.title}</span>
                                        <span className="text-gray-400 block mt-1">
                                            {generateCode(entry.secret)} {/* Dynamically generate the code */}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => deletePassword(index)}
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all duration-300"
                                    >
                                        Delete
                                    </button>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400 text-center">No passwords saved yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
 };

 export default GoogleAuthenticator;
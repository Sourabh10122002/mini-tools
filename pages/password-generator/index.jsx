import React, { useState, useEffect } from "react";
import ConfirmationPopup from "@/components/ConfirmationPopup/ConfirmationPopup";

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(12);
    const [includeNumbers, setIncludeNumbers] = useState(true);
    const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
    const [includeLowercase, setIncludeLowercase] = useState(true);
    const [includeUppercase, setIncludeUppercase] = useState(true);
    const [title, setTitle] = useState("");
    const [savedPasswords, setSavedPasswords] = useState([]);
    const [showPopup, setShowPopup] = useState(false); // State to control popup visibility
    const [passwordToDelete, setPasswordToDelete] = useState(null); // Track which password to delete

    // Character sets
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+{}[]|:;<>,.?/~";

    // Load saved passwords from local storage on component mount
    useEffect(() => {
        const storedPasswords = JSON.parse(localStorage.getItem("savedPasswords")) || [];
        setSavedPasswords(storedPasswords);
    }, []);

    // Generate password
    const generatePassword = () => {
        let characters = "";
        if (includeLowercase) characters += lowercaseLetters;
        if (includeUppercase) characters += uppercaseLetters;
        if (includeNumbers) characters += numbers;
        if (includeSpecialChars) characters += specialChars;

        let generatedPassword = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            generatedPassword += characters[randomIndex];
        }

        setPassword(generatedPassword);
    };

    // Copy password to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(password).then(() => {
            alert("Password copied to clipboard!");
        });
    };

    // Save password with title to local storage
    const savePassword = () => {
        if (!title || !password) {
            alert("Please add a title and generate a password before saving.");
            return;
        }

        const newPasswordEntry = { title, password };
        const updatedPasswords = [...savedPasswords, newPasswordEntry];
        setSavedPasswords(updatedPasswords);
        localStorage.setItem("savedPasswords", JSON.stringify(updatedPasswords));
        setTitle(""); // Clear title input after saving
    };

    // Show confirmation popup for deletion
    const confirmDelete = (index) => {
        setPasswordToDelete(index); // Set the password index to delete
        setShowPopup(true); // Show the popup
    };

    // Handle deletion after confirmation
    const handleDelete = () => {
        const updatedPasswords = savedPasswords.filter((_, i) => i !== passwordToDelete);
        setSavedPasswords(updatedPasswords);
        localStorage.setItem("savedPasswords", JSON.stringify(updatedPasswords));
        setShowPopup(false); // Hide the popup
        setPasswordToDelete(null); // Reset the password to delete
    };

    // Cancel deletion
    const cancelDelete = () => {
        setShowPopup(false); // Hide the popup
        setPasswordToDelete(null); // Reset the password to delete
    };

    // Toggle password visibility
    const togglePasswordVisibility = (index) => {
        const updatedPasswords = savedPasswords.map((entry, i) => {
            if (i === index) {
                return { ...entry, isVisible: !entry.isVisible };
            }
            return entry;
        });
        setSavedPasswords(updatedPasswords);
    };

    return (
        <div className="min-h-screen text-white flex flex-col items-center justify-center p-6">
            <h1 className="text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300  md:mt-0 mt-20">
                Password Generator
            </h1>
            <div className="bg-gray-800 bg-opacity-75 rounded-lg shadow-2xl p-8 max-w-4xl w-full">

                {/* Password Generator Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column: Password Settings */}
                    <div className="space-y-6">
                        {/* Password Length */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">
                                Password Length: {length}
                            </label>
                            <input
                                type="range"
                                min="8"
                                max="16"
                                value={length}
                                onChange={(e) => setLength(Number(e.target.value))}
                                className="w-full"
                            />
                        </div>

                        {/* Include Lowercase Letters */}
                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={includeLowercase}
                                    onChange={() => setIncludeLowercase(!includeLowercase)}
                                    className="form-checkbox h-5 w-5 text-blue-500"
                                />
                                <span className="text-sm font-semibold">Include Lowercase Letters</span>
                            </label>
                        </div>

                        {/* Include Uppercase Letters */}
                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={includeUppercase}
                                    onChange={() => setIncludeUppercase(!includeUppercase)}
                                    className="form-checkbox h-5 w-5 text-blue-500"
                                />
                                <span className="text-sm font-semibold">Include Uppercase Letters</span>
                            </label>
                        </div>

                        {/* Include Numbers */}
                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={includeNumbers}
                                    onChange={() => setIncludeNumbers(!includeNumbers)}
                                    className="form-checkbox h-5 w-5 text-blue-500"
                                />
                                <span className="text-sm font-semibold">Include Numbers</span>
                            </label>
                        </div>

                        {/* Include Special Characters */}
                        <div>
                            <label className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    checked={includeSpecialChars}
                                    onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
                                    className="form-checkbox h-5 w-5 text-blue-500"
                                />
                                <span className="text-sm font-semibold">Include Special Characters</span>
                            </label>
                        </div>

                        {/* Generate Button */}
                        <button
                            onClick={generatePassword}
                            className="w-full bg-gradient-to-r from-green-500 to-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition-colors"
                        >
                            Generate Password
                        </button>
                    </div>

                    {/* Right Column: Password Display and Save */}
                    <div className="space-y-6">
                        {/* Password Display */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">Generated Password</label>
                            <div className="flex items-center justify-between bg-gray-700 p-3 rounded-lg">
                                <span className="text-gray-300">{password || "Your Password"}</span>
                                <button
                                    onClick={copyToClipboard}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition-colors"
                                    disabled={!password}
                                >
                                    Copy
                                </button>
                            </div>
                        </div>

                        {/* Title Input for Saving Password */}
                        <div>
                            <label className="block text-sm font-semibold mb-2">Title for Password</label>
                            <input
                                type="text"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="Enter a title for the password"
                                className="w-full p-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                            />
                        </div>

                        {/* Save Button */}
                        <button
                            onClick={savePassword}
                            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-lg transition-colors"
                        >
                            Save Password
                        </button>
                    </div>
                </div>

                {/* Saved Passwords Section */}
                <div className="mt-8">
                    <h2 className="text-xl font-semibold mb-4">Saved Passwords</h2>
                    {savedPasswords.length > 0 ? (
                        <ul className="space-y-2">
                            {savedPasswords.map((entry, index) => (
                                <li key={index} className="bg-gray-700 p-3 rounded-lg flex justify-between items-center">
                                    <div>
                                        <span className="font-semibold">{entry.title}</span>
                                        <span className="text-gray-300 block">
                                            {entry.isVisible ? entry.password : "••••••••"}
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <button
                                            onClick={() => togglePasswordVisibility(index)}
                                            className="text-gray-300 hover:text-white transition-colors"
                                        >
                                            {entry.isVisible ? (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                                                </svg>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                                                    <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                                                </svg>
                                            )}
                                        </button>
                                        <button
                                            onClick={() => confirmDelete(index)}
                                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition-colors"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-gray-400 text-center">No passwords saved yet.</p>
                    )}
                </div>
            </div>

            {/* Custom Popup */}
            {showPopup && (
                <ConfirmationPopup
                    message="Are you sure you want to delete this password?"
                    onConfirm={handleDelete}
                    onCancel={cancelDelete}
                />
            )}
        </div>
    );
};

export default PasswordGenerator;
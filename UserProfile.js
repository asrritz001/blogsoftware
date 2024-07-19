import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { updateProfile } from "firebase/auth";
import './Style.css';

const UserProfile = () => {
    const [user, setUser] = useState(null);
    const [displayName, setDisplayName] = useState("");
    const [error, setError] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setDisplayName(user.displayName || "");
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    const handleUpdateProfile = () => {
        try {
            updateProfile(auth.currentUser, { displayName });
            console.log("Profile updated successfully");
        } catch (error) {
            setError(error.message);
        }
    };

    const handleDisplayNameChange = (e) => {
        setDisplayName(e.target.value);
    };

    return (
        <div>
            {user ? (
                <div>
                    <h2>Welcome, {user.displayName || "user"}</h2>
                    <p>Email: {user.email}</p>
                    <input
                        type="text"
                        value={displayName}
                        onChange={handleDisplayNameChange} 
                    />
                    <button onClick={handleUpdateProfile}>Update profile</button>
                    {error && <p>{error}</p>}
                </div>
            ) : (
                <p>Please sign in to view profile</p>
            )}
        </div>
    );
};

export default UserProfile;

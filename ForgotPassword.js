import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { sendPasswordResetEmail  } from "firebase/auth";
// import './ForgSEotPassword.css';

const ForgotPassword= () => {
  
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
   

    const handleResetPassword= async (e) => {
        e.preventDefault();
        try {
            await sendPasswordResetEmail(auth, email);
            setMessage ("password reset mail sent!");
            setTimeout(() => navigate("/signin"),2000);
            
        } catch (error) {
            setMessage(error.message);
        }
    }

    return (
        <div className="container">

            <h1>Reset Password</h1>
            <form onSubmit={handleResetPassword}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

               
                <button type="submit">Reset </button>
                <p>Forgot password?</p>
                {message && <p>{message}</p>}
               
            </form>
        </div>
    );

};

export default ForgotPassword;
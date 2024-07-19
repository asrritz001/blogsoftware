import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import './Signin.css';

const Signin = ({setIsAuthenticated}) => {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const handleSignin = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential);
            setIsAuthenticated(true);
            navigate("/CreateBlog", { state: { email: userCredential.user.email } });
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div className="container">

            <h1>Sign In</h1>
            <form onSubmit={handleSignin}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />

                <button type="submit" >Sign In</button>
               
                {error && <p>{error}</p>}
                <p>Forgot password?</p>
                <button onClick={() => navigate("/forgot-password")} className="link-btn">Reset Password</button>
           
            </form>
        </div>
    );

};

export default Signin;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Form from './components/Form';
import Signin from './components/Signin';
import ForgotPassword from './components/ForgotPassword';
import CreateBlog from './components/Createblog';
import Post from './components/Post';
import Signup from './components/Signup';
import { auth } from './firebase';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    auth.signOut();
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="App">
        <div className='navbar'>
          <ul>
            <li><Link to="/Home">Home</Link></li>
            <li><Link to="/Form">Contact</Link></li>
            <li><Link to="/About">About</Link></li>
            {isAuthenticated && <li><Link to="/Createblog">Create Blog</Link></li>}
            {!isAuthenticated && (
              <li className="buttons">
                <Link to="/Signin" className="button">Sign In</Link>
              </li>
            )}
            <li><Link to="/Signup">Sign Up</Link></li>
            {isAuthenticated && (
              <li className='buttons'>
                <Link to="/" className='button' onClick={handleSignout}>Sign Out</Link>
              </li>
            )}
          </ul>
        </div>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Form" element={<Form />} />
          <Route path="/About" element={<About />} />
          <Route path="/Signin" element={<Signin setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/Createblog" element={isAuthenticated ? <CreateBlog /> : <Navigate to="/Signin" />} />
          <Route path="/Forgotpassword" element={<ForgotPassword />} />
          <Route path="/Post" element={<Post />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Navigate to="/Home" />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

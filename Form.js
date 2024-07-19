import React, { useState } from "react";
import './Form.css';

function Form() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data Submitted:', formData);
        setSubmitted(true);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log('Form Data Updated:', formData);
    };

    console.log('Render Form');

    return (
        <div className="form">
            <h2>Contact Us</h2>
            {submitted ? (
                <p>Thank you! We will contact you soon.</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <label>First Name</label>
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                    
                    <label>Last Name</label>
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                    
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                    
                    <label>Message</label>
                    <textarea name="message" placeholder="Write your message here" value={formData.message} onChange={handleChange} required />

                    <button type="submit">Submit</button>
                </form>
            )}
        </div>
    );
}

export default Form;

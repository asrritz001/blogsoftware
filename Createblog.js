import React, { useState } from "react";
import { addDoc,deleteDoc,getDoc,doc, collection } from "firebase/firestore"; 
import { db } from "../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import './Createblog.css'; 


const CreateBlog =() =>{
    const[title, setTitle] =useState("");
    const[postcontent, setpostContent] =useState("");
    const navigate =useNavigate();
    const location =useLocation() ;
    const email =location.state?.email;

    const handleSubmit =  async (e) => {
        e.preventDefault();
        try{
            await addDoc (collection(db,"posts"),{
                title,
                postcontent,
                createdAt : new Date(),
            });
            navigate("/Post");
        }catch(error ){
            console.error("Error adding document",error);
        }

    };
    return(
        <div className="container">
            <h1>Craete a new blog </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required />

                    <textarea 
                    placeholder="Content"
                    value={postcontent}
                    onChange={(e) => setpostContent(e.target.value)}
                    required />
                    <button type="submit">Submit</button>
                        </form>
        </div>
    );

};
export default CreateBlog;
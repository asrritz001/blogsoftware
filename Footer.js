import React from "react";
import './Footer.css';


function Footer(){
    return(
        <div className = "footer">
            
           <div className="contact">
            {/* contact */}
            <h2>Inspire</h2>
            <p>Telephone: +123456789</p>
            <p>Mobile: + 512 773 8899</p>
            <p>mail: inspire@gmail.com</p>
            
           </div>
          
           <div className="socialslink">
            <h2>social media</h2>
            <ul>
            <li><a href="https://www.instagram.com/"><i className="instagram"></i> Instagram</a></li>
                    <li><a href="https://twitter.com/"><i className="twitter"></i> Twitter</a></li>
                    <li><a href="https://www.facebook.com/"><i className="facebook"></i> Facebook</a></li>
                </ul>
            
            
           </div>
        </div>
    );
    }
export default Footer;
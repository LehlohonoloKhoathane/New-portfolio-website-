import React from "react";
import './Contact.css'

const Contact = () =>{
    return (
        <section className="contact-container">
            <h2>Connect with Me</h2>
            <div className="contact-content-info">
                <p>Are you ready to team up? Find me on socials,connect me through this form, or write to me directly using the following email. khoathanelehlohonol@gmail.com</p>
                <h1> South Africa</h1>
            </div>
            <div className="contact-content-form">
                <form id="my-form" action="" method="">
                <div class="input-box" >
                    <input class="form-input" id="nameId" type="text" name="name" value="" placeholder="Name" />
                    <span class="Error" id="nameError"></span>
                </div>
                <div class="input-box">
                    <input id="phoneId" type="number" name="phone" value="" placeholder="Phone"/>
                    <span class="Error" id="phoneError"></span>
                </div>
                <div class="input-box">
                    <input type="text" id="emailId" name="email" value="" placeholder="Email"/>
                    <span class="Error" id="emailError"></span>
                </div>
                <div class="input-box">
                    <textarea id="messageId" name="message" rows="8" cols="80" placeholder="Message"></textarea>
                    <span class="Error" id="messageError"></span>
                </div>            
                    <button type="submit" class="send-btn" id="submit-btn" onclick="sendMail()">Send Message</button>
                <p id="my-form-status"></p>
                </form>
            </div>
        </section>
    );
};

export default Contact
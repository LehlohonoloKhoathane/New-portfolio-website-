import React, { useState } from "react";
import './Contact.css';
import { BiMap } from "react-icons/bi";
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = () =>{
    const [capVal, setSetCapVal] = useState(null)

    return (
        <section className="contact-container">
            <h1>Connect With Me</h1>
                <hr />
            <div className="contact-contents">
                <div className="textContainer">
                    <div className="item">
                        <p>Are you ready to team up? Find me on socials,connect me through this form, or write to me directly using the following email. <span className="email">khoathanelehlohonolo@gmail.com</span></p>
                    </div>
                    <div className="item-map">
                        <BiMap className="map"/>
                        <h2>South Africa</h2>
                    </div>
                </div>
                <div className="formContainer">
                    <h2>New Message</h2>
                    <form action="">
                        <input type="text" placeholder="Full Names" />
                        <input type="text" placeholder="Email" />
                        <textarea name="" id="" cols="30" rows="10"placeholder="Message"></textarea>
                        <button>Send</button>
                    </form>
                </div>
            </div>
            {/* <h2>Connect with Me</h2>
            <hr />
            <div className="contact-content">
                <div className="contact-content-info">
                    <div className="contact-content-paragraph">
                        <p>Are you ready to team up? Find me on socials,connect me through this form, or write to me directly using the following email. <span className="email">khoathanelehlohonolo@gmail.com</span></p>
                    </div>
                    <div className="map-container">
                        <BiMap className="map"/>
                    </div>
                    <h1> South Africa</h1>
                </div>
                <div className="contact-content-form">
                    <h3>New Message</h3>
                    <form id="my-form" action="" method="">
                    <div class="input-box" >
                        <input class="form-input" id="nameId" type="text" name="name" value="" placeholder="Full Name" />
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
                    <div className="send-btn-container">
                        <ReCAPTCHA className="my-recaptcha" sitekey="6LcGFnApAAAAAAZWCSWxeK0TZ68rzFkdQ519D5ap" onChange={(val) => setSetCapVal(val)}/>
                        <button type="submit" class="send-btn" id="submit-btn" onclick="sendMail()">Send</button>
                    </div>            
                    <p id="my-form-status"></p>
                    </form>
                </div>
            </div> */}
        </section>
    );
};

export default Contact;
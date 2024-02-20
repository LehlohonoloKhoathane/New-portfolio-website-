// Importing necessary modules and components
import React, { useRef, useState } from "react";
import './Contact.css';
import { BiMap } from "react-icons/bi";
import ReCAPTCHA from 'react-google-recaptcha'
import { motion, useInView } from 'framer-motion'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Endpoint for form submission
const FORM_ENDPOINT = "https://public.herotofu.com/v1/55e35e50-cbd9-11ee-b355-cff7da8a1e7a";

// Variants for animation
const variants = {
    initial:{
        x: -500,
        opacity: 0,
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren:0.1,
        }
    },
};

// Contact component
const Contact = () => {
     //State variables for form status, captcha confirmation, and user input
    const [status, setStatus] = useState();
    const [isCaptchaConfirmed, setIsCaptchaConfirmed] = useState(false);
    const [user, setUser] = useState({ FullName: '', Email:'', Message:'' });
    const [fullNameValid, setFullNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);
    const [fullNameError, setFullNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

     //Regular expressions for validating email and name inputs
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^([a-zA-Z]{2,}\s){0,2}[a-zA-Z]{2,}$/;

     //Function to handle ReCAPTCHA change
    const handleCaptchaChange = (val) => {
        setIsCaptchaConfirmed(val);
    };

     //Function to update user input
    const data = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({...user, [name]: value});
    }

    //Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();

         //Checking if ReCAPTCHA is confirmed
        if (!isCaptchaConfirmed) {
            alert('Please confirm the ReCAPTCHA before submitting the form.');
            return;
        }

         //Checking if all fields are filled
        const { FullName, Email, Message } = user;
        if (!FullName || !Email || !Message) {
            alert('Please fill in all fields before submitting the form.');
            return;
        }

         //Preparing data for submission
        const data = { FullName, Email, Message };

        //Sending form data to the endpoint
        fetch(FORM_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then((response) => {
            if (response.status === 422) {
                throw new Error('Please finish the captcha challenge');
            }

            if (response.status !== 200) {
                throw new Error(response.statusText);
            }

            return response.json();
        })
        .then(() => setStatus("We'll be in touch soon."))
        .catch((err) => setStatus(err.toString()));
    };

    //Function to validate form inputs
    const getData = async (e) => {
        e.preventDefault();

        const { FullName, Email, Message } = user;
        let isFormValid = true;

        //Validating full name
        if (!FullName || !nameRegex.test(FullName)) {
            setUser((prevState) => ({ ...prevState, FullName: '' }));
            setFullNameValid(false);
            setFullNameError("Please enter a valid name");
            isFormValid = false;
        } else {
            setFullNameValid(true);
            setFullNameError("");
        }

        //Validating email
        if (!Email || !emailRegex.test(Email)) {
            setUser((prevState) => ({ ...prevState, Email: '' }));
            setEmailValid(false);
            setEmailError("Please enter a valid email address");
            isFormValid = false;
        } else {
            setEmailValid(true);
            setEmailError("");
        }

        // Validating message
        if (!Message) {
            setUser((prevState) => ({ ...prevState, Message: '' }));
            setMessageValid(false);
            setMessageError("Please enter a message");
            isFormValid = false;
        } else {
            setMessageValid(true);
            setMessageError("");
        }

        //showing error message if the form is not valid, 
        if (!isFormValid) {
            toast.error('Please fill in all fields correctly before sending message.');
            return;
        }

         //Show error message if ReCAPTCHA is not confirmed, 
        if (!isCaptchaConfirmed) {
            toast.error('Please confirm the ReCAPTCHA before sending message.');
            return;
        }

         //Preparing options for form submission
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ FullName, Email, Message })
        };

        // Sending form data to heroTofu API
        try {
            const heroTofuRes = await fetch(FORM_ENDPOINT, options);
            
            if (!heroTofuRes.ok) {
                throw new Error('Failed to send Message.');
            }
            setStatus("");

        } catch (error) {
            setStatus('Failed to Send Message');
        }

         //Saving the form data to Firebase Realtime Database
        try {
            const firebaseRes = await fetch('https://my-react-portfolio-c6d3e-default-rtdb.firebaseio.com/UserData.json', options);
            if (!firebaseRes.ok) {
                throw new Error('Failed to send Message.');
            }
            toast.success('Message Sent! I will be in touch soon.');
            setUser({ FullName: '', Email: '', Message: '' });
        } catch (error) {
            toast.error('Failed to Send Message.');
        }
    };

    //Ref for animation
    const ref = useRef();
    const isInView = useInView(ref, {margin: "-100px"});
    
    //Rendering the contact form
    return (
        <motion.div ref={ref} className="contact-container" id="contact-container" variants={variants} initial="initial" whileInView="animate">
            <h1>Connect With Me</h1>
            <hr />
            <motion.div className="contact-contents" variants={variants}>
                <motion.div className="textContainer">
                    <motion.div className="item">
                        <motion.p>Are you ready to team up? Find me on socials, connect me through this form, or write to me directly using the following email. <span className="email">khoathanelehlohonolo@gmail.com</span></motion.p>
                    </motion.div>
                    <motion.div className="item-map">
                        <BiMap className="map"/>
                        <h2>South Africa</h2>
                    </motion.div>
                </motion.div>
                <div className="formContainer">
                    {/* <motion.div className="phoneSVG" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3, duration:1}}>
                        <svg width="450px" height="450px" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
                            <motion.path initial = {{pathLength: 0}} animate={isInView && {pathLength:1}} transition={{duration:3}} d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="#09BE67" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </motion.div> */}
                    <h2>New Message</h2>
                    
                    {/*Form implementation */}
                    <motion.form onSubmit={handleSubmit} method="POST" action={FORM_ENDPOINT}>
                        <input type="text" name="FullName" placeholder="Full Names" className={!fullNameValid ? "invalid" : ""} value={user.FullName} onChange={data} onFocus={() => setFullNameValid(true)}/>
                        {!fullNameValid && <p className="error">{fullNameError}</p>}

                        <input type="email" name="Email" placeholder="Email" className={!emailValid ? "invalid" : ""} value={user.Email} onChange={data} onFocus={() => setEmailValid(true)}/>
                        {!emailValid && <p className="error">{emailError}</p>}

                        <textarea name="Message" cols="30" rows="10" placeholder="Message" className={!messageValid ? "invalid" : ""} value={user.Message} onChange={data} onFocus={() => setMessageValid(true)}></textarea>
                        {!messageValid && <p className="error">{messageError}</p>}

                        {/* Send button and recaptcha implementation*/}
                        <div className="send-btn-container">
                            <ReCAPTCHA className="my-recaptcha" sitekey="6LcGFnApAAAAAAZWCSWxeK0TZ68rzFkdQ519D5ap" onChange={handleCaptchaChange} />
                            <button className="sendButton"  style={{ textAlign: 'center' }} onClick={getData}>Send</button>
                        </div> 
                    </motion.form>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;

// Importing necessary modules and components
import React, { useRef, useEffect, useState } from "react";
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
    const [isInView, setIsInView] = useState(false);
    const { ref, inView } = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });
  
    useEffect(() => {
      setIsInView(inView);
    }, [inView]);
    
    //Rendering the contact form
    return (
        <motion.div
        ref={ref}
            initial={{ x: 0, opacity: 0 }} 
            animate={{ x: inView ? 0 : -100, opacity: inView ? 1 : 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="contact-container" id="contact-container" variants={variants} initial="initial" whileInView="animate">
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
                            <ReCAPTCHA className="my-recaptcha" sitekey="6LdCInwpAAAAAIOE4RNOcH_kyjfx6ecNsm2umN50" onChange={handleCaptchaChange} />
                            <button className="sendButton"  style={{ textAlign: 'center' }} onClick={getData}>Send</button>
                        </div> 
                    </motion.form>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;

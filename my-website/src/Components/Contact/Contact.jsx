// Importing necessary modules and components
import React, { useState, useRef } from "react";
import "./Contact.css";
import { BiMap } from "react-icons/bi";
import ReCAPTCHA from "react-google-recaptcha";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

// Endpoint for form submission
const FORM_ENDPOINT = "https://public.herotofu.com/v1/55e35e50-cbd9-11ee-b355-cff7da8a1e7a";

// Variants for animation
const variants = {
    initial: {
        x: -100,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

// Contact component
const Contact = () => {
    // State variables for form status, captcha confirmation, and user input
    const [status, setStatus] = useState();
    const [isCaptchaConfirmed, setIsCaptchaConfirmed] = useState(false);
    const [user, setUser] = useState({ FullName: "", Email: "", Message: "" });
    const [fullNameValid, setFullNameValid] = useState(true);
    const [emailValid, setEmailValid] = useState(true);
    const [messageValid, setMessageValid] = useState(true);
    const [fullNameError, setFullNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");

    // Ref for resetting reCAPTCHA
    const recaptchaRef = useRef(null);

    // Regular expressions for validating email and name inputs
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nameRegex = /^([a-zA-Z]{2,}\s){0,2}[a-zA-Z]{2,}$/;

    // Function to handle ReCAPTCHA change
    const handleCaptchaChange = (val) => {
        setIsCaptchaConfirmed(!!val);
    };

    // Function to update user input
    const data = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUser({ ...user, [name]: value });
    };

    // Function to stop default form submission
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    // Function to validate and send form inputs
    const getData = async (e) => {
        e.preventDefault();

        const { FullName, Email, Message } = user;
        let isFormValid = true;

        // Validating full name
        if (!FullName || !nameRegex.test(FullName)) {
            setUser((prevState) => ({ ...prevState, FullName: "" }));
            setFullNameValid(false);
            setFullNameError("Please enter a valid name");
            isFormValid = false;
        } else {
            setFullNameValid(true);
            setFullNameError("");
        }

        // Validating email
        if (!Email || !emailRegex.test(Email)) {
            setUser((prevState) => ({ ...prevState, Email: "" }));
            setEmailValid(false);
            setEmailError("Please enter a valid email address");
            isFormValid = false;
        } else {
            setEmailValid(true);
            setEmailError("");
        }

        // Validating message
        if (!Message) {
            setUser((prevState) => ({ ...prevState, Message: "" }));
            setMessageValid(false);
            setMessageError("Please enter a message");
            isFormValid = false;
        } else {
            setMessageValid(true);
            setMessageError("");
        }

        // Showing error message if the form is not valid
        if (!isFormValid) {
            Swal.fire({
                icon: "error",
                title: "Invalid Form",
                text: "Please fill in all fields correctly before sending your message.",
                confirmButtonText: "Okay",
            });
            return;
        }

        // Show error message if ReCAPTCHA is not confirmed
        if (!isCaptchaConfirmed) {
            Swal.fire({
                icon: "warning",
                title: "ReCAPTCHA Required",
                text: "Please confirm the ReCAPTCHA before sending your message.",
                confirmButtonText: "Okay",
            });
            return;
        }

        // Preparing options for form submission
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ FullName, Email, Message }),
        };

        // Send email through HeroTofu
        try {
            const heroTofuRes = await fetch(FORM_ENDPOINT, options);

            if (!heroTofuRes.ok) {
                throw new Error("Failed to send message through HeroTofu.");
            }

            Swal.fire({
                icon: "success",
                title: "Message Sent!",
                text: "I will be in touch soon.",
                confirmButtonText: "Great",
            });

            setUser({ FullName: "", Email: "", Message: "" });
            setStatus("");
            setIsCaptchaConfirmed(false);

            if (recaptchaRef.current) {
                recaptchaRef.current.reset();
            }
        } catch (error) {
            setStatus("Failed to Send Message");

            Swal.fire({
                icon: "error",
                title: "Message Failed",
                text: "Your message could not be sent. Please try again.",
                confirmButtonText: "Okay",
            });

            return;
        }

        // Optional: Save to Firebase, but do not show failure to the user if this fails
        try {
            const firebaseRes = await fetch(
                "https://my-react-portfolio-c6d3e-default-rtdb.firebaseio.com/UserData.json",
                options
            );

            if (!firebaseRes.ok) {
                throw new Error("Firebase save failed.");
            }
        } catch (error) {
            console.error("Firebase save failed:", error);
        }
    };

    // Rendering the contact form
    return (
        <motion.div
            className="contact-container"
            id="contact-container"
            variants={variants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h1 variants={variants}>Connect With Me</motion.h1>

            <motion.hr variants={variants} />

            {/* Form contents */}
            <motion.div className="contact-contents" variants={variants}>
                <motion.div className="textContainer" variants={variants}>
                    <motion.div className="item" variants={variants}>
                        <motion.p variants={variants}>
                            Are you ready to team up? Find me on socials, connect me through
                            this form, or write to me directly using the following email.{" "}
                            <br />{" "}
                            <span className="email">
                                khoathanelehlohonolo@gmail.com
                            </span>
                        </motion.p>
                    </motion.div>

                    <motion.div className="item-map" variants={variants}>
                        <BiMap className="map" />
                        <h2>South Africa</h2>
                    </motion.div>
                </motion.div>

                <motion.div className="formContainer" variants={variants}>
                    <motion.h2 variants={variants}>New Message</motion.h2>

                    {/* Form implementation */}
                    <motion.form
                        onSubmit={handleSubmit}
                        method="POST"
                        action={FORM_ENDPOINT}
                        variants={variants}
                    >
                        <motion.input
                            variants={variants}
                            type="text"
                            name="FullName"
                            placeholder="Full Names"
                            className={!fullNameValid ? "invalid" : ""}
                            value={user.FullName}
                            onChange={data}
                            onFocus={() => setFullNameValid(true)}
                        />
                        {!fullNameValid && <p className="error">{fullNameError}</p>}

                        <motion.input
                            variants={variants}
                            type="email"
                            name="Email"
                            placeholder="Email"
                            className={!emailValid ? "invalid" : ""}
                            value={user.Email}
                            onChange={data}
                            onFocus={() => setEmailValid(true)}
                        />
                        {!emailValid && <p className="error">{emailError}</p>}

                        <motion.textarea
                            variants={variants}
                            name="Message"
                            cols="30"
                            rows="10"
                            placeholder="Message"
                            className={!messageValid ? "invalid" : ""}
                            value={user.Message}
                            onChange={data}
                            onFocus={() => setMessageValid(true)}
                        ></motion.textarea>
                        {!messageValid && <p className="error">{messageError}</p>}

                        {/* Send button and recaptcha implementation */}
                        <motion.div
                            className="send-btn-container"
                            variants={variants}
                        >
                            <ReCAPTCHA
                                ref={recaptchaRef}
                                className="my-recaptcha"
                                sitekey="6LelpOMsAAAAAMzGRIhcLw6H2U0Msjw8VV8ax6km"
                                onChange={handleCaptchaChange}
                            />

                            <button
                                type="button"
                                className="sendButton"
                                style={{ textAlign: "center" }}
                                onClick={getData}
                            >
                                Send
                            </button>
                        </motion.div>
                    </motion.form>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Contact;
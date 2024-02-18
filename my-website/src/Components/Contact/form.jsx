import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/pk_8495af99b5dc50d4563f7123d9bdcda0";

const ContactForm = () => {
  const [status, setStatus] = useState();
  
  const [user, setUser] = useState({
    FullName: '',
    Email: '',
    Message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({...user, [name]: value});
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    // Store message in Firebase
    const firebaseOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        FullName: user.FullName,
        Email: user.Email,
        Message: user.Message
      })
    };
  
    // Send email using HeroTofu
    const heroTofuOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        FullName: user.FullName,
        Email: user.Email,
        Message: user.Message
      })
    };
  
    try {
      const [firebaseRes, heroTofuRes] = await Promise.all([
        fetch('https://my-react-portfolio-c6d3e-default-rtdb.firebaseio.com/UserData.json', firebaseOptions),
        fetch(FORM_ENDPOINT, heroTofuOptions)
      ]);
  
      if (firebaseRes.ok && heroTofuRes.ok) {
        alert('Message Stored and Email Sent');
      } else {
        throw new Error('Error Occurred');
      }
  
      // Clear form
      setUser({
        FullName: '',
        Email: '',
        Message: ''
      });
    } catch (error) {
      console.error('Error occurred:', error);
      alert('Error Occurred');
    }
  };
  
  if (status) {
    return (
      <>
        <div className="text-2xl">Thank you!</div>
        <div className="text-md">{status}</div>
      </>
    );
  }

  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="pt-0 mb-3">
        <input
          type="text"
          placeholder="Your name"
          name="FullName"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
          value={user.FullName}
          onChange={handleChange}
        />
      </div>
      <div className="pt-0 mb-3">
        <input
          type="email"
          placeholder="Email"
          name="Email"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
          value={user.Email}
          onChange={handleChange}
        />
      </div>
      <div className="pt-0 mb-3">
        <textarea
          placeholder="Your message"
          name="Message"
          className="focus:outline-none focus:ring relative w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border-0 rounded shadow outline-none"
          required
          value={user.Message}
          onChange={handleChange}
        />
      </div>
      <div className="pt-0 mb-3">
        <button
          className="active:bg-blue-600 hover:shadow-lg focus:outline-none px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear bg-blue-500 rounded shadow outline-none"
          type="submit"
        >
          Send a message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;



/////#############################################################
//#################################################################





    //handlinding the captcha and form
    // const [isCaptchaConfirmed, setIsCaptchaConfirmed] = useState(false);
    // const handleCaptchaChange = (val) => {
    //     setIsCaptchaConfirmed(val);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     if (isCaptchaConfirmed) {
    //         console.log('Form submitted successfully!');
    //     } else {
    //         alert('Please confirm the ReCAPTCHA before submitting the form.');
    //     }
    // };


    // //database firebase storage
    // const [user, setUser] = useState(
    //     {
    //         FullName: '', Email:'', Message:''
    //     }
    // )

    // console.log(user)
    // let name, value
    // const data = (e) => {
    //     name = e.target.name;
    //     value = e.target.value;
    //     setUser({...user, [name]: value});
    // }

    // const getData = async (e) => {
    //     const {FullName, Email, Message} = user;
    //     e.preventDefault();
    //     const options = {
    //         method: 'POST',
    //         Headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             FullName, Email, Message
    //         })
    //     }

    //     const res = await fetch('https://my-react-portfolio-c6d3e-default-rtdb.firebaseio.com/UserData.json',
    //         options
    //     )
    //     console.log(res)
    //     if (res){
    //         alert('Message Stored')
    //     }else{
    //         alert('Error Occured')
    //     }
    // }

    // const [inputValue1, setInputValue1] = useState('');
    // const [inputValue2, setInputValue2] = useState('');
    // const [inputValue3, setInputValue3] = useState('');

    // const db = getFirestore();

    // const savDataToFirestore = async () => {
    //     const docRef = await addDoc(collection(db, 'myCollection'), {
    //         field1: inputValue1,
    //         field2: inputValue2,
    //         field3: inputValue3
    //     });
    //     alert("Message Saved to DataBase");
    // };

//     const [capVal, setSetCapVal] = useState(null);

//     const ref = useRef();
//     const isInView = useInView(ref, {margin: "-100px"});
//     return (
//         <motion.div ref={ref} className="contact-container" variants={variants} initial="initial" whileInView="animate">
//             <h1>Connect With Me</h1>
//                 <hr />
//             <motion.div className="contact-contents" variants={variants}>
//                 <motion.div className="textContainer">
//                     <motion.div className="item">
//                         <motion.p>Are you ready to team up? Find me on socials,connect me through this form, or write to me directly using the following email. <span className="email">khoathanelehlohonolo@gmail.com</span></motion.p>
//                     </motion.div>
//                     <motion.div className="item-map" variants={{variants}}>
//                         <BiMap className="map"/>
//                         <h2>South Africa</h2>
//                     </motion.div>
//                 </motion.div>
//                 <div className="formContainer">
//                     <motion.div className="phoneSVG" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3, duration:1}}>
//                         <svg width="450px" height="450px" viewBox="0 0 24 24" fill="none"  xmlns="http://www.w3.org/2000/svg">
//                             <motion.path initial = {{pathLength: 0}} animate={isInView && {pathLength:1}} transition={{duration:3}} d="M14.05 6C15.0268 6.19057 15.9244 6.66826 16.6281 7.37194C17.3318 8.07561 17.8095 8.97326 18 9.95M14.05 2C16.0793 2.22544 17.9716 3.13417 19.4163 4.57701C20.8609 6.01984 21.7721 7.91101 22 9.94M18.5 21C9.93959 21 3 14.0604 3 5.5C3 5.11378 3.01413 4.73086 3.04189 4.35173C3.07375 3.91662 3.08968 3.69907 3.2037 3.50103C3.29814 3.33701 3.4655 3.18146 3.63598 3.09925C3.84181 3 4.08188 3 4.56201 3H7.37932C7.78308 3 7.98496 3 8.15802 3.06645C8.31089 3.12515 8.44701 3.22049 8.55442 3.3441C8.67601 3.48403 8.745 3.67376 8.88299 4.05321L10.0491 7.26005C10.2096 7.70153 10.2899 7.92227 10.2763 8.1317C10.2643 8.31637 10.2012 8.49408 10.0942 8.64506C9.97286 8.81628 9.77145 8.93713 9.36863 9.17882L8 10C9.2019 12.6489 11.3501 14.7999 14 16L14.8212 14.6314C15.0629 14.2285 15.1837 14.0271 15.3549 13.9058C15.5059 13.7988 15.6836 13.7357 15.8683 13.7237C16.0777 13.7101 16.2985 13.7904 16.74 13.9509L19.9468 15.117C20.3262 15.255 20.516 15.324 20.6559 15.4456C20.7795 15.553 20.8749 15.6891 20.9335 15.842C21 16.015 21 16.2169 21 16.6207V19.438C21 19.9181 21 20.1582 20.9007 20.364C20.8185 20.5345 20.663 20.7019 20.499 20.7963C20.3009 20.9103 20.0834 20.9262 19.6483 20.9581C19.2691 20.9859 18.8862 21 18.5 21Z" stroke="#09BE67" stroke-width="0.2" stroke-linecap="round" stroke-linejoin="round"/>
//                         </svg>
//                     </motion.div>
//                     <h2>New Messages</h2>
//                     <motion.form onSubmit={handleSubmit} method="POST" initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:4, duration:1}} action="">
//                         <input type="text" name="FullName" placeholder="Full Names" value={user.FullName} onChange={data}/>
//                         <input type="email" name="Email" placeholder="Email" value={user.Email} onChange={data}/>
//                         <textarea name="Message" id="" cols="30" rows="10"placeholder="Message" value={user.Message} onChange={data}></textarea>
//                         <div className="send-btn-container">
//                             <ReCAPTCHA className="my-recaptcha" sitekey="6LcGFnApAAAAAAZWCSWxeK0TZ68rzFkdQ519D5ap" onChange={handleCaptchaChange} />
//                         </div> 
//                         <button  onClick={getData}>Send</button>
//                     </motion.form>
//                 </div>
//             </motion.div>

//         </motion.div>
//     );
// };
  



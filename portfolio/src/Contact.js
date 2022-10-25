import React, { useRef } from 'react'
import Profile from "./components/profile"
import emailjs from "emailjs-com";

import './CSS/Contact.css';




function Contact(){
    const form = useRef();
    const sendEmail =(e) =>{
        e.preventDefault();

        emailjs.sendForm(
            // `${process.env.REACT_APP_SERVICE_ID}`,
            // process.env.REACT_APP_TEMPLATE_ID,
            "service_h9iq583",
            "template_zvi6kcy",
            form.current,
            "aX7cT6vMfpAbYT1QC"
            // `${process.env.REACT_APP_KEY_ID}`
        ).then(
            result => console.log(result.text),
            error => console.log(error.text)
        );
    };

    return(
        <div className='main-content'>
            <Profile/>
            <div className='right-content'>
                <p>Let's have a conversation</p>
                <p>You can contact me through the form below or email me at <em>stravinsky.anglade105@gmail.com</em></p>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="user_name"/>
                    <label>Email</label>
                    <input type="email" name="user_email"/>
                    <label>Message</label>
                    <textarea name="message"/>
                    
                    <input type="submit" value="Send"/>
                </form>
            </div>
        </div>
    )
}
export default Contact
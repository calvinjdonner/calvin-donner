import React, { useRef, useState, useContext } from 'react';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
// import { socials } from "../../data";
import emailjs from 'emailjs-com';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef()
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_nmwfcis',
            'template_6cb36rh',
            formRef.current,
            'user_kPB8YopTvBq5VGKDTDvth'
        )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)
                },
                (error) => {
                    console.log(error.text);
                });
    };


return (
    <div className="c">
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's get in contact!</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +1 682 465 1191
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        calvinjdonner@gmail.com
                    </div>
                    {/* <div className="c-info-item">
                        {socials.map((item) => (
                            <div key={item.id} img={item.img} link={item.link} />
                        ))}
                    </div> */}
                </div>
            </div>
            <div className="c-right">
                <form ref={formRef} onSubmit={handleSubmit}>
                    <label>Name</label>
                    <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Michael Scott" name="user_name" />

                    <label>Subject</label>
                    <input style={{ backgroundColor: darkMode && "#333" }} type="text" placeholder="Scott's Tots..." name="user_subject" />

                    <label>Email</label>
                    <input style={{ backgroundColor: darkMode && "#333" }} type="email" placeholder="mscott@dundermifflin.com" name="user_email" />

                    <label>Message</label>
                    <textarea style={{ backgroundColor: darkMode && "#333" }} rows="8" type="message" placeholder="We're out of paper..." name="message" />

                    <button type="submit" className="button">Send</button>
                    {done}
                </form>
            </div>
        </div>
    </div>
)
};


export default Contact;

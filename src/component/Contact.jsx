import React, {useState} from 'react';
import emailjs from 'emailjs-com';

import '../style/contact.css';

const Contact = () => {

    const [message, setMessage] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (event) => {
        const value = event.currentTarget.value;
        const name = event.currentTarget.name;
        setMessage({...message, [name]: value});
    }

    const sendEmail = (e)=> {
        e.preventDefault();
        emailjs.sendForm('service_fs6nzt7', 'template_9kmmtie', e.target, 'user_90HPLdkl9udbubEiowKof')
            .then((result) => {
                console.log(result.text);
                window.alert("email envoyer")
            }, (error) => {
                console.log(error.text);
            });
        console.log("yolo")
    }

    return (
        <div id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-md-offset-2">
                        <h2 className="centered">Me contacter:</h2>
                        <form onSubmit={sendEmail}>
                            <div className="form-group">
                                <label>Nom:</label>
                                <input type="name" name="name" className="form-control" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" name="email" className="form-control" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Sujet</label>
                                <input type="text" name="subject" className="form-control" onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea type="textarea" name="message" className="form-control"
                                          onChange={handleChange}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="btn btn-success col-md-12" value="Send Message">Envoyer</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
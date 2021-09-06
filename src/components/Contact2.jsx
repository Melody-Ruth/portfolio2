import '../App.css';
import './Contact.css';
import React, { useState } from 'react';
import { Button, Card, TextField, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';

const Contact = () => {
    const theme = useTheme();
    const [formData, setFormData] = useState({
        name: "",
        nameError: false,
        nameHelperText: "",
        email: "",
        emailError: false,
        emailHelperText: "",
        message: "",
        messageError: false,
        messageHelperText: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const nameChanged = (e) => {
        setFormData({...formData, name: e.target.value});
    }

    const emailChanged = (e) => {
        setFormData({...formData, email: e.target.value});
    }

    const messageChanged = (e) => {
        setFormData({...formData, message: e.target.value});
    }

    const checkEmail = () => {
        if (formData.email != "" && formData.email.indexOf("@") > 0 && formData.email.indexOf("@") < formData.email.length - 1) {
            return true;
        } else {
            return false;
        }
    }

    const submitForm = () => {
        let nameHelper = "";
        let emailHelper = "";
        let messageHelper = "";

        if (formData.name == "") {
            nameHelper = "Please enter a name.";
        }
        if (!checkEmail()) {
            emailHelper = "Please enter a valid email.";
        }
        if (formData.message == "") {
            messageHelper = "Please enter a message.";
        }
        setFormData({...formData, nameHelperText: nameHelper, emailHelperText: emailHelper, messageHelperText: messageHelper, nameError: nameHelper != "", emailError: emailHelper != "", messageError: messageHelper != ""});
        if (nameHelper == "" && emailHelper == "" && messageHelper == "") {
            try {
                emailjs.send('service_gzumprg', 'template_wetx9rr', {name: formData.name, email: formData.email, message: formData.message}, 'user_mFNNKTABCiFo9zIExTYKT').then((result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    setFormSubmitted(true);
                }, (error) => {
                    console.log('FAILED...', error);
                });
            } catch (error) {
                console.log({error});
            }
        }
    }

    return (
        <div id="mainContainer">
            <Card id="formCard" style={{backgroundColor: theme.palette.secondary.light}}>
                { formSubmitted ? 
                    <Typography variant="p">Thanks for reaching out!</Typography>
                    :
                    <div id="form">
                        <TextField label="Name" variant="outlined" style={{marginBottom: "2em"}} required onChange={nameChanged} error={formData.nameError} helperText={formData.nameHelperText}/>
                        <TextField label="Email" variant="outlined" style={{marginBottom: "2em"}} required onChange={emailChanged} error={formData.emailError} helperText={formData.emailHelperText}/>
                        <TextField label="Message" variant="outlined" style={{marginBottom: "2em"}} required multiline onChange={messageChanged} error={formData.messageError} helperText={formData.messageHelperText}/>
                        <div id="submitDiv">
                            <Button variant="contained" color="primary" id="submitButton" onClick={submitForm}>Submit</Button>
                        </div>
                    </div>
                }
            </Card>
            <div id="info">
                <Typography variant="p">I'd love to hear from you! Fill out this form or message me on <a href="https://www.linkedin.com/in/melodyruth/" target="_blank">Linkedin</a>.</Typography>
            </div>
        </div>
    )
}

export default Contact;
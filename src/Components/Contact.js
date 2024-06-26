import React from 'react';
import './Contact.css'
import OrangeButton from './OrangeButton';
function Contact(){
    return(
        <div className="Form Container">
            <div className="Content">
                <h1>Get In Touch</h1>
                
                <input placeholder="Enter First Name"></input>
                <input placeholder='Enter Last Name'></input>
                <input placeholder='Enter Phone'></input>
                <select placeholder='Enter City'>
                    <option>Select City</option>
                </select>
                <select placeholder='Enter State'>
                    <option>Select State</option>
                </select>
                <select placeholder='Enter Zip Code'>
                    <option>Select Zip Code</option>

                </select>
                <input className="Email" placeholder='Enter Email'></input>
                <select placeholder='Select'>
                    <option>Select</option>

                </select>
                <input className="Comments" placeholder='Enter Comments'></input>
                <OrangeButton text="Submit"></OrangeButton>
            </div>
        </div>
    )
}

export default Contact;

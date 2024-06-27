import React from 'react';
import './Contact.css'
import OrangeButton from './OrangeButton';
import { Grid } from '@mui/material';
function Contact(){
    return(
        <div className="Form Container">
            <div className="Content">
                <h1>Get In Touch</h1>
{/*                 
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
                <input className="Comments" placeholder='Enter Comments'></input> */}
                <Grid 
                container spacing={1}
                direction="row"
                justifyContent="left"
                alignItems="stretch"
                className='GridForm'
                >
                    <Grid item xs={4.5} zeroMinWidth>
                        <input placeholder="Enter First Name"></input>
                    </Grid>
                    
                    <Grid item xs={4.5} zeroMinWidth>
                        <input placeholder='Enter Last Name'></input>
                    </Grid>
                    <Grid item xs={4.5} zeroMinWidth>
                        <input placeholder='Enter Phone'></input>
                    </Grid>
                    <Grid item xs={4} zeroMinWidth>
                        <select placeholder='Enter City'>
                            <option>Select City</option>
                        </select>
                    </Grid>
                    <Grid item xs={4} zeroMinWidth>
                        <select placeholder='Enter State'>
                            <option>Select State</option>
                        </select>
                    </Grid>
                    <Grid item xs={4} zeroMinWidth>
                        <select placeholder='Enter Zip Code'>
                            <option>Select Zip Code</option>
                        </select>
                    </Grid>
                    <Grid item xs={10} zeroMinWidth>
                       <input className="Email" placeholder='Enter Email'></input>

                    </Grid>
                    <Grid item xs={4} zeroMinWidth>
                        <select placeholder='Select'>
                            <option>Select</option>
                        </select>
                    </Grid>
                    <Grid item xs={10} zeroMinWidth>
                        <input className="Comments" placeholder='Enter Comments'></input>
                    </Grid>
                </Grid>
                
                
                <OrangeButton text="Submit"></OrangeButton>
            </div>
        </div>
    )
}

export default Contact;

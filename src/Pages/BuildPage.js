import React from 'react';
import Header from '../Components/Header'
import OrangeButton from '../Components/OrangeButton';
import Footer from '../Components/Footer';
import { Grid } from '@mui/material';
import HomeBenefits from '../Assets/BuildHomeBenefits.png'
import TestingImage from '../Assets/TestingImage.png'

import './BuildPage.css';
import Contact from '../Components/Contact';

function BuildPage(){
    return(
        // Requires Header, Image, Footer
        <div className='Build'>
            <div className='Top'>
                <div className='Container'>
                    <h1>Build Your Tiny Home, Redefine Your Space</h1>
                    Take Our Quiz To Discover Your Ideal Plan
                    <OrangeButton text="Get a Free Assessment"></OrangeButton>
                </div>
            </div>
            <div className='Benefits Container'>
                <div className='Content'>
                    <div className='Image'>
                        <img src={HomeBenefits} height="521" width="387" />
                    </div>
                    <div className='Right'>
                        {/* <div className='Section'>
                            At Affordable price!
                        </div>
                        <div className='Section'>
                            Choose your preferred floor plan
                        </div>
                        <div className='Section'>
                            Secure your permit hassle-free!
                        </div>
                        <div className='Section'>
                            Personalize Your Amenities!
                        </div>
                        <div className='Section'>
                            Build quickly as possible!
                        </div>
                        <div className='Section'>
                            Seamless installation guaranteed!
                        </div> */}

                        <Grid 
                        container spacing={12}
                        justifyContent="center"
                        alignItems="stretch"
                        >
                            <Grid item xs={4} zeroMinWidth>
                                At Affordable price!
                            </Grid>
                            
                            <Grid item xs={4} zeroMinWidth>
                                Choose your preferred floor plan
                            </Grid>
                            <Grid item xs={4} zeroMinWidth>
                                Secure your permit hassle-free!
                            </Grid>
                            <Grid item xs={4} zeroMinWidth>
                                Personalize Your Amenities!
                            </Grid>
                            <Grid item xs={4} zeroMinWidth>
                                Build quickly as possible!
                            </Grid>
                            <Grid item xs={4} zeroMinWidth>
                                Seamless installation guaranteed!
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
            <div className='Options  Container'>
                <h1>Flexibility and options to suit your lifestyle.</h1>
                <div className='Image'>
                    <div className='Content'>
                        <h1>L - Casita</h1>
                        One Bedroom - 540 Sq. Ft
                    </div>
                </div>
                <div className='Bottom-Text'>
                    <p>
                        All models come with our distinctive features: a signature kitchen, a luxurious bathroom with a walk-in shower,
                        a combo washer dryer, and ample built-in storage. Customize amenities to suit your preferences.
                    </p>
                    <p className='Note'>
                        Custom built and fully installed for as little as $120,000 or $1,111/mo
                    </p>
                </div>
                
                <OrangeButton text="Get a Free Estimate"></OrangeButton>
            </div>
            <div className='Testing  Container'>
                <div className='Content'>
                    <div className='Left'>
                        <h1>Test-drive your tiny home and immerse yourself in our full range of activities & amenities!</h1>
                        <h2>Try before buy @ $199 / Night</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. </p>
                        <OrangeButton text="Contact Us"></OrangeButton>
                    </div>
                    <div className='Right'>
                        <img src={TestingImage} height="657" width="638" />
                    </div>
                </div>
            </div>
            <div className='Contact  Container'>
                <h1>Available In The Vibrant Heart Of Tuscan, Arizona!</h1>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default BuildPage;
import React from 'react';
import Header from '../Components/Header'
import OrangeButton from '../Components/OrangeButton';
import Footer from '../Components/Footer';
import './BuildPage.css';

function BuildPage(){
    return(
        // Requires Header, Image, Footer
        <div className='Build'>
            <div className='Top-Container'>
            </div>
            <div className='Benefits-Container Container'>
                <div className='Content'>
                    <div className='Image'>

                    </div>
                    <div className='Right'>
                        <div className='Section'>
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
                        </div>
                    </div>
                </div>
            </div>
            <div className='HomeOptions-Container Container'>
                <h1>Flexibility and options to suit your lifestyle.</h1>
                <div className='Options'>
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
            <div className='Testing-Container Container'>
                <div className='Content'>
                    <div className='Left'>
                        <h1>Test-drive your tiny home and immerse yourself in our full range of activities & amenities!</h1>
                        <h2>Try before buy @ $199 / Night</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. </p>
                        <OrangeButton text="Contact Us"></OrangeButton>
                    </div>
                    <div className='Right'>

                    </div>
                </div>
            </div>
            <div className='Contact-Container Container'>
                <h1>Available in the vibrant heart of Tuscan, Arizona!</h1>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default BuildPage;
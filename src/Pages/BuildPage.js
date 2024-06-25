import React from 'react';
import Header from '../Components/Header'
import OrangeButton from '../Components/OrangeButton';
import Footer from '../Components/Footer';

function BuildPage(){
    return(
        // Requires Header, Image, Footer
        <div className='Build'>
            <div className='Top-Container'>
                <Header></Header>
                build
            </div>
            <div className='Benefits-Container'>

            </div>
            <div className='HomeOptions-Container'>
                <h1>Flexibility and options to suit your lifestyle.</h1>
                <p>
                    All models come with our distinctive features: a signature kitchen, a luxurious bathroom with a walk-in shower,
                    a combo washer dryer, and ample built-in storage. Customize amenities to suit your preferences.
                </p>
                <p className='Note'>
                    Custom built and fully installed for as little as $120,000 or $1,111/mo
                </p>
                <OrangeButton text="Get a Free Estimate"></OrangeButton>
            </div>
            <div className='Testing-Container'>
                <h1>Test-drive your tiny home and immerse yourself in our full range of activities & amenities!</h1>
                <h2>Try before buy @ $199 / Night</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. </p>
                <OrangeButton text="Contact Us"></OrangeButton>
            </div>
            <div className='Contact-Container'>
                <h1>Available in the vibrant heart of Tuscan, Arizona!</h1>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default BuildPage;
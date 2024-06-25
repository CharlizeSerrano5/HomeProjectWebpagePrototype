import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OrangeButton from '../Components/OrangeButton';
import './HomePage.css'

function Home(){
    return(
        <div className='Home'>
            <div className='Top-Container'>
                <Header></Header>
                IMAGE PLACEHOLDER
                <img src="\src\defaultImage.png" width="500" height="500" />
            </div>
            <div className='Assessment-Container'>
                <div className='Content'>
                    <div className='Left-Content'><h1>Build your tiny home, <br></br> Redefine your space.</h1>
                        <ul>
                            <li>Take a Free Assessment</li>
                            <li>Select the Floor Plan</li>
                            <li>Customize the Amenities</li>
                        </ul>
                        <OrangeButton text='Start Building'></OrangeButton>
                        <p className='Note'>We've got you covered from permits to installation. Take a Free Assessment to get your quick estimate now!</p>
                    </div>
                    <div className='Right-Content'></div>   
                </div>
                
            </div>
            <div className='Donate-Container'>
                <div className='Content'>
                    <h1>Transform lives with the gift of affordable housing and provide shelter for those in need.</h1>
                    
                    <OrangeButton text="Donate"></OrangeButton>
                </div>
                
            </div>
            <div className='Invest-Container'>
                <div className='Content'>
                    <div className='Left'></div>
                    <div className='Right'>
                        <h1>Secure your tomorrow with rewarding investments in our visionary plan!</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  
                            nec justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                        </p>
                        <OrangeButton text="Invest"></OrangeButton>
                    </div>
                </div>
                
            </div>
            <div className='Contact-Container'>
                The Casita design was also awarded the "People's Choice" award in the Tucson Casita competition.
            </div>
            <div className='Quote-Container'>

            </div>
            

            <Footer></Footer>
        </div>
    )
}

export default Home;
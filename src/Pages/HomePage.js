import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OrangeButton from '../Components/OrangeButton';
import TopImage from '../Assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.png';
import './HomePage.css'

function Home(){
    return(
        <div className='Home'>
            <div className='Top-Container'>
                <Header></Header>
                <div className='Image'>
                    <img src={TopImage} width="100%" height="100%" />
                </div>
            </div>
            <div className='Assessment-Container Container'>
                <div className='Content'>
                    <div className='Left'>
                        <h1>Build your tiny home, <br></br> Redefine your space.</h1>
                        <ul>
                            <li>Take a Free Assessment</li>
                            <li>Select the Floor Plan</li>
                            <li>Customize the Amenities</li>
                        </ul>
                        <OrangeButton text='Start Building'></OrangeButton>
                        <p className='Note'>We've got you covered from permits to installation. Take a Free Assessment to get your quick estimate now!</p>
                    </div>
                    <div className='Right'></div>   
                </div>
                
            </div>
            <div className='Donate-Container Container'>
                <div className='Content'>
                    <h1>Transform lives with the gift of affordable housing and provide shelter for those in need.</h1>
                    
                    <OrangeButton text="Donate"></OrangeButton>
                </div>
                
            </div>
            <div className='Invest-Container Container'>
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
            <div className='Contact-Container Container'>
                <h1>The Casita design was also awarded the "People's Choice" award in the Tucson Casita competition.</h1>
            </div>
            <div className='Quote-Container Container'>
                <div className='Quote-Content Content'>
                    <p className='Quote'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. 
                        Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                    </p>
                    <div className='Profile'>
                        <div className='Image'>

                        </div>
                        <div className='Person'>
                            <p className='Name'>Harry Wilson</p>
                            <p className='Title'>Property Owner</p>
                        </div>
                    </div>
                </div>
                <div className='Video'>
                    VIDEO
                </div>
            </div>
            

            <Footer></Footer>
        </div>
    )
}

export default Home;
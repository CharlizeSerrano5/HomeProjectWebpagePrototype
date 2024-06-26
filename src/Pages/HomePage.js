import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import OrangeButton from '../Components/OrangeButton';
import TopImage from '../Assets/etienne-beauregard-riverin-B0aCvAVSX8E-unsplash.png';
import Checkmark from '../Assets/Checkmark.svg';
import HomeLayout from '../Assets/HomePageHome.png';
import Profile from '../Assets/Profile.svg';
import Contact from '../Components/Contact';
import './HomePage.css'

function Home(){
    return(
        <div className='Home'>
            <div className='Top'>
                <div className='Image'>
                    {/* Content */}
                    {/* <img src={TopImage} width="100%" height="100%" /> */}
                </div>
            </div>
            <div className='Assessment  Container'>
                <div className='Content'>
                    <div className='Left'>
                        <h1>Build Your Tiny Home, <hr></hr> Redefine Your Space.</h1>
                        <ul>
                            <li>
                                Take a Free Assessment
                            </li>
                            <li>
                                Select the Floor Plan
                            </li>
                            <li>
                                Customize the Amenities
                            </li>
                        </ul>
                        <OrangeButton text='Start Building'></OrangeButton>
                        <p className='Note'>We've got you covered from permits to installation. Take a Free Assessment to get your quick estimate now!</p>
                    </div>
                    <div className='Right'>
                        <img
                        src={HomeLayout}
                        height="658"
                        width="561" />    
                    </div>   
                </div>
                
            </div>
            <div className='Donate Container'>
                <div className='Content'>
                    <h1>Transform lives with the gift of affordable housing and provide shelter for those in need.</h1>
                    
                    <OrangeButton text="Donate"></OrangeButton>
                </div>
                
            </div>
            <div className='Invest  Container'>
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
            <div className='Contact  Container'>
                <Contact/>
                <h1>The Casita design was also awarded the "People's Choice" award in the Tucson Casita competition.</h1>
            </div>
            <div className='Video '>
                <div className='Quote Content'>
                    <p className='Text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. 
                        Nulla vitae mauris quam. Nulla quam massa, faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                    </p>
                    <div className='Profile'>
                        <div className='Image'>
                            <img src={Profile} height="61" width="61" />
                        </div>
                        <div className='Person'>
                            <p className='Name'>Harry Wilson</p>
                            <p className='Job-Title'>Property Owner</p>
                        </div>
                    </div>
                </div>
                <div>
                    <iframe width="590" height="100%" src="https://www.youtube.com/embed/oCwdsBSSGsU?si=S5t1ELvgLm7T9_m_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>
            

            <Footer></Footer>
        </div>
    )
}

export default Home;
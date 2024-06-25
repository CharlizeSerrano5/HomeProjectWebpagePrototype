import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import './DonatePage.css'

function DonatePage(){
    return(
        // Requires Header, Image, Footer
        <div className='Donate'>
            <div className='Top-Container'>
                <Header></Header>
            </div>
            <div className='Donors-Container Container'>
                <div className='Gray Content Container'>
                    <div className='Section-Content Content'>
                        <div className='Section Left'>
                            <div className='Content'>
                                <h1>01.<br></br>Vision</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                            </div>
                        </div>
                        <div className='Section Left'>
                            <div className='Content'>
                                <h1>02.<br></br>Cause</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                            </div> 
                        </div>
                        <div className='Section Left'>
                            <div className='Content'>
                                <h1>03.<br></br>Benefit</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className='Gray Content Container'>
                    <h1>Donation Privileges</h1>
                    <ul>
                        <li>Donate $1000 - Your name brick in Patio </li>
                        <li>Donate $5000 - Your name brick with engraving </li>
                        <li>Donate $10000 - Your name brick with engraving </li>
                        <li>Donate $25000 - Your name brick with engraving </li>
                        <li>Donate $50000 - Your name Complex </li>
                        <li>Donate $100000 - Your name Street </li>
                    </ul>
                </div>
            </div>
            <div className='Donation-Container Container'></div>
            
            <Footer></Footer>
        </div>
    )
}

export default DonatePage;
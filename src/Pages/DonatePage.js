import React from 'react';
import Header from '../Components/Header'
import Footer from '../Components/Footer';
import { Item,Grid } from '@mui/material';
import OrangeButton from '../Components/OrangeButton';
import './DonatePage.css'
import Contact from '../Components/Contact';

function DonatePage(){
    return(
        // Requires Header, Image, Footer
        <div className='Donate'>
            <div className='Top'>
                <div className='Container'>
                    <h1>Transform lives with the gift of affordable housing and provide shelter for those in need.</h1>
                    <OrangeButton text="Donate"></OrangeButton>
                </div>
            </div>
            <div className='Donors  Container'>
                <div className='Gray Content Container'>
                    <div className='Section   Content'>
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

                    <Grid
                    container spacing={3}
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    >
                        <Grid item xs={3} zeroMinWidth>
                            <h1>01.<br></br>Vision</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                            </p>
                        </Grid>
                        
                        <Grid item xs={3} zeroMinWidth>
                            <h1>02.<br></br>Cause</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                            </p>
                        </Grid>
                        <Grid item xs={3} zeroMinWidth>
                            <h1>03.<br></br>Benefit</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                            </p>
                        </Grid>
                    </Grid>
                                        
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
            <div className='Donation  Container'>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default DonatePage;
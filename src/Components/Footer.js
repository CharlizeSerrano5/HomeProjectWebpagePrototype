import React from 'react';
import './Footer.css'
import { Grid } from '@mui/material';
import CompanyLogo from '../Assets/CompanyLogo.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PrintIcon from '@mui/icons-material/Print';
import RssFeedIcon from '@mui/icons-material/RssFeed';
function Footer(){
    return (
        <div className='Footer Container'>
            <div className='Footer-UI Content'>  
                <div className='Middle Content'>
                    <div className='Left'>
                        <img
                        src={CompanyLogo}
                        height="140"
                        width="159" />
                    </div>
                    <div className='Right'>
                        <div>

                        <Grid 
                            container spacing={2}
                            direction="row"
                            justifyContent="left"
                            alignItems="stretch"
                            
                            >
                                <Grid item xs={12} zeroMinWidth>
                                    <LocationOnIcon className='Icons'></LocationOnIcon>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                                </Grid>
                                
                                <Grid item xs={4} zeroMinWidth>
                                    <LocalPhoneIcon className='Icons'></LocalPhoneIcon>(123) 456-7890
                                </Grid>
                                <Grid item xs={4} zeroMinWidth>
                                    <PrintIcon className='Icons'></PrintIcon>(123) 456-7890
                                </Grid>
                            </Grid>
                        </div>
                        
                        <div className='Social-Media'>
                            <Grid 
                            container spacing={1}
                            direction="row"
                            justifyContent="left"
                            alignItems="stretch"
                            className='Icons'
                            alignContent=" Social-Media center"
                            >
                                <Grid item xs={3} zeroMinWidth className='Text'>
                                    Social Media

                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <FacebookIcon></FacebookIcon>
                                </Grid>
                                
                                <Grid item xs={1} zeroMinWidth>
                                    <TwitterIcon></TwitterIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <LinkedInIcon></LinkedInIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <YouTubeIcon></YouTubeIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <InstagramIcon></InstagramIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <GoogleIcon></GoogleIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <PinterestIcon></PinterestIcon>
                                </Grid>
                                <Grid item xs={1} zeroMinWidth>
                                    <RssFeedIcon></RssFeedIcon>
                                </Grid>
                                
                            </Grid>
                        </div> 
                        
                        
                    </div>
                </div>
                <hr></hr>
                
                <div className='Bottom'>
                    {/* <ul className='Footer-Pages Footer'>
                        <li>ABOUT US</li>
                        <li>CONTACT US</li>
                        <li>PRIVACY POLICY</li>
                        <li>DISCLAIMER</li>
                    </ul> */}
                        <Grid 
                        container spacing={{ xs: 1, md: 1 }}
                        direction="row"
                        justifyContent="left"
                        alignItems="stretch"
                        className='GridPages'
                        >
                            <Grid item xs={2} zeroMinWidth>
                                <p>ABOUT US</p>
                            </Grid>
                            
                            <Grid item xs={2} zeroMinWidth>
                                <p>CONTACT US</p>
                            </Grid>
                            <Grid item xs={2} zeroMinWidth>
                                <p>PRIVACY POLICY</p>
                            </Grid>
                            <Grid item xs={2} zeroMinWidth>
                                <p>DISCLAIMER</p>
                            </Grid>
                        </Grid>
                   
                    <div className='Right'>
                        <p className='Copyright Footer'>
                            Copyright © 2020 Minimumlivingcost. All rights reserved
                        </p>
                    </div>
                    
                </div>
            </div>    
        </div>
    )
}

export default Footer;
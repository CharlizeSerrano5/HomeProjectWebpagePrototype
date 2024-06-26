import React from 'react';
import './Footer.css'
import CompanyLogo from '../Assets/CompanyLogo.svg'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

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
                        <div></div>
                        345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                        (123) 456-7890
                        (123) 456-7890
                        <div className='Social-Media'>
                            Social Media
                            <FacebookIcon></FacebookIcon>
                            <TwitterIcon></TwitterIcon>
                            <LinkedInIcon></LinkedInIcon>
                            <YouTubeIcon></YouTubeIcon>
                            <InstagramIcon></InstagramIcon>
                            <GoogleIcon></GoogleIcon>
                            <PinterestIcon></PinterestIcon>

                        </div> 
                        
                        
                    </div>
                </div>
                <hr></hr>
                
                <div className='Bottom'>
                    <ul className='Footer-Pages Footer'>
                        <li>ABOUT US</li>
                        <li>CONTACT US</li>
                        <li>PRIVACY POLICY</li>
                        <li>DISCLAIMER</li>
                    </ul>
                    <p className='Copyright Footer'>
                        Copyright © 2020 Minimumlivingcost. All rights reserved
                    </p>
                </div>
            </div>    
        </div>
    )
}

export default Footer;
import React from 'react';
import './Footer.css'
function Footer(){
    return (
        <div className='Footer Container'>
            <div className='Footer-UI Content'>  
                <div className='Middle Content'>
                    <div className='Left'>
                        Logo
                    </div>
                    <div className='Right'>
                        345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345
                        (123) 456-7890
                        (123) 456-7890
                        Social Media
                    </div>
                </div>
                
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
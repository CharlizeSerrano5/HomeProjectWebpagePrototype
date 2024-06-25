import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import OrangeButton from './OrangeButton';

function Header(){
    return(
        <div className='Header'>
            <div className='Header-Content'>
                <div className='Left'>
                    Logo
                </div>
                <ul className='Pages'>
                    <li><p><Link to='/Home'>Home</Link></p></li>
                    <li><p><Link to='/Build'>Build</Link></p></li>
                    <li><p><Link to='/Invest'>Invest</Link></p></li>
                    <li><p><Link to='/Donate'>Donate</Link></p></li>
                    <li><p><a href="#">About</a></p></li>
                </ul>
                <div className='Right'>
                    <OrangeButton text="Get In Touch">
                    </OrangeButton>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header;
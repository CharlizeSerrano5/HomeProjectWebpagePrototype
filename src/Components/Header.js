import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import OrangeButton from './OrangeButton';

function Header(){
    return(
        <div className='Header'>
            <div className='Header-Content'>
                <div className='Logo'></div>
                <ul className='Pages'>
                    <li><Link to='/Home'>Home</Link></li>
                    <li><Link to='/Build'>Build</Link></li>
                    <li><Link to='/Invest'>Invest</Link></li>
                    <li><Link to='/Donate'>Donate</Link></li>
                </ul>
                <OrangeButton text="Get In Touch">
                </OrangeButton>
            </div>
            
        </div>
    )
}

export default Header;
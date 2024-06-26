import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import OrangeButton from './OrangeButton';
import CompanyLogo from '../Assets/CompanyLogo.svg';

function Header(){
    return(
        <div className='Header'>
            <div className='Header-Content'>
                <div className='Left'>
                    <img
                        src={CompanyLogo}
                        height="79"
                        width="90" />
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
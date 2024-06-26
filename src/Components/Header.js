import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import OrangeButton from './OrangeButton';
import CompanyLogo from '../Assets/CompanyLogo.svg';
import { Grid } from '@mui/material';

function Header(){
    return(
        <div className='Header'>
            <div className='Header  '>
                <div className='Left'>
                    <img src={CompanyLogo} height="79" width="90" />
                </div>
                {/* <ul className='Pages'>
                    <li><p><Link to='/Home'>Home</Link></p></li>
                    <li><p><Link to='/Build'>Build</Link></p></li>
                    <li><p><Link to='/Invest'>Invest</Link></p></li>
                    <li><p><Link to='/Donate'>Donate</Link></p></li>
                    <li><p><a href="#">About</a></p></li>
                </ul> */}

                    <Grid 
                    container spacing={{ xs: 2, md: 3 }}
                    direction="row"
                    justifyContent="center"
                    place-items="center"
                    alignItems="stretch"
                    className='GridPages'
                    >
                        <Grid item xs={1.5} zeroMinWidth>
                            <p><Link to='/Home'>Home</Link></p>
                        </Grid>
                        
                        <Grid item xs={1.5} zeroMinWidth>
                            <p><Link to='/Build'>Build</Link></p>
                        </Grid>
                        <Grid item xs={1.5} zeroMinWidth>
                            <p><Link to='/Invest'>Invest</Link></p>
                        </Grid>
                        <Grid item xs={1.5} zeroMinWidth>
                            <p><Link to='/Donate'>Donate</Link></p>
                        </Grid>
                        <Grid item xs={1.5} zeroMinWidth>
                            <p><a href="#">About</a></p>
                        </Grid>
                    </Grid>
                <div className='Right'>
                    <OrangeButton text="Get In Touch">
                    </OrangeButton>
                </div>
                
            </div>
            
        </div>
    )
}

export default Header;
import React from 'react';
import Header from '../Components/Header'
import OrangeButton from '../Components/OrangeButton';
import Footer from '../Components/Footer';
import './InvestPage.css'

function InvestPage(){
    return(
        // Requires Header, Image, Footer
        <div className='Invest'>
            <div className='Top-Container'>
                <Header></Header>
            </div>
            <div className='Why-Container Container'>
                <div className='Content'>
                    <h1>Why Invest With Us?</h1>
                    <div className='Section-Container'>
                        <div className='Section'>
                            <h>One global login</h>
                            <p>
                                Skip the login nightmare for all your
                                different accounts, instead, see
                                everything from one login.
                            </p>
                        </div>
                        <div className='Section'>
                            <h>Real-time link</h>
                            <p>
                                Go from delayed and inaccurate
                                information to one, real time dashboard.
                            </p>
                        </div>
                        <div className='Section'>
                            <h>Reporting, solved</h>
                            <p>
                                Easily create beautiful, custom reports on your balances, cash-flows and transactions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Chart-Container Container'>
                <div className='Content'>
                    <h1>Returns on Investment</h1>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis.  nec justo. 
                    </p>
                    <OrangeButton text="Invest"></OrangeButton>
                </div>
            </div>
            <div className='Investor-Container Container'>
                <div className='Content'>
                    <div className='Image'>

                    </div>
                    <div className='Right'>
                        <p className='Quote'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum nisl et nunc facilisis, a commodo eros mollis. 
                            Nunc vel pellentesque est. Curabitur at odio sit amet libero vulputate efficitur ac nec justo. Nulla vitae mauris quam. Nulla quam massa, 
                            faucibus id pretium ac, mattis eu velit. Donec sed risus a lacus fringilla finibus.
                        </p>
                        <p className='Name'>Harry Wilson</p>
                        <p>Investor</p>
                    </div>
                </div>
            </div>
            <div className='Assistance-Container Container'>
                <div className='Content'>
                    <h2>Need assistance with designing or planning the shed of your dreams? Fill out this form and one of our experts will be in touch with you shortly to set up a complimentary phone consultation.
                    </h2>
                </div>
            </div>

            <Footer></Footer>
        </div>
    )
}

export default InvestPage;
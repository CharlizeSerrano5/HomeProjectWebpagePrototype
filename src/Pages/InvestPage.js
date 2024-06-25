import React from 'react';
import Header from '../Components/Header'
import OrangeButton from '../Components/OrangeButton';
import Footer from '../Components/Footer';

function InvestPage(){
    return(
        // Requires Header, Image, Footer
        <div className='InvestPage'>
            <div className='Top-Container'>
                <Header></Header>
                invest
            </div>
            <div className='Why-Container'>
                <h1>Why Invest With Us?</h1>
                <ul>
                    <li>One global login</li>
                    <li>Real-time link</li>
                    <li>Reporting, solved</li>
                </ul>
            </div>
            <div className='Chart-Container'>
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
            <div className='Investor-Container'>
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
            <div className='Assistance-Container'>
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
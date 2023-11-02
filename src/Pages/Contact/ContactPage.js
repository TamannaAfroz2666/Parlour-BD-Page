import React from 'react';
import './ContactPage.css';
import HeadPage from './HeadPage/HeadPage';
import InfoPage from './InfoPage/InfoPage';
import Footer from 'layout/Footer/Footer';

const ContactPage = () => {
    return (
        <div className='contactPHead'>
            <div className="contactBodyPage">
                <div className="contactPage">
                    <HeadPage></HeadPage>
                    <div className="infoSection">
                        <InfoPage></InfoPage>
                    </div>
                    <Footer></Footer>
                </div> 
            </div>
            
        </div>
    );
};

export default ContactPage;

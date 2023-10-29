import React from 'react';

import './Footer.css';
import SubIcon from './SubIcon/SubIcon';
import OurLinks from './OurLinks/OurLinks';


const Footer = () => {
    return (
        <div className='footer'>
            <div className="footerHead">
                <div className="footerMain">
                    <div className="footerBody">
                        <div className="footerContents">
                            <div className="alisa">
                                <SubIcon></SubIcon>
                            </div>
                            <div className="ourLinks">

                            </div>
                            <div className="otherLinks">
                                <OurLinks></OurLinks>

                            </div>
                            <div className="otherContacts">

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;
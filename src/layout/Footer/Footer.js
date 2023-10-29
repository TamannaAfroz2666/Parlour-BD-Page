import React from 'react';

import './Footer.css';
import SubIcon from './SubIcon/SubIcon';
import OurLinks from './OurLinks/OurLinks';
import OtherLinks from './OtherLinks/OtherLinks';
import Location from './Location/Location';


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
                            <OurLinks></OurLinks>

                            </div>
                            <div className="otherLinks">
                                <OtherLinks></OtherLinks>
                             

                            </div>
                            <div className="otherContacts">
                                <Location></Location>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;
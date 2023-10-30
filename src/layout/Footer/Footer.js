import React from 'react';

import './Footer.css';
import SubIcon from './SubIcon/SubIcon';
import OurLinks from './OurLinks/OurLinks';
import OtherLinks from './OtherLinks/OtherLinks';
import Location from './Location/Location';
import { AiOutlineCopyrightCircle } from "react-icons/ai";



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
                        <p className='footer_title'>Copyright <span> <AiOutlineCopyrightCircle size={14} color='black'/> 2023 <span className='lesName'>Alisa</span> </span>.All rights reserved </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Footer;
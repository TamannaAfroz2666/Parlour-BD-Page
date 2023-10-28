import React from 'react';
import './Pricing.css';
import { BsFlower1 } from "react-icons/bs";
import RegularMember from './RegularMember/RegularMember';

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className="pricingHead">
                <div className="pricingBody">
                    <p className='pricingTitle'>Our Pricing Packages</p>
                    <div className="pricingLine">
                        <div className="lineContentHead">
                            <hr color='tomato' className='pricingLineTitle' />
                        </div>

                        <div className="iconOfFlower">
                            <BsFlower1 size={20} color='tomato' />
                        </div>
                        <div className="lineContentHead">
                            <hr color='tomato' className='pricingLineTitle' />
                        </div>
                    </div>
                    <div className="packageContents">
                        <div className="regularMember">
                            <RegularMember></RegularMember>

                        </div>
                        <div className="vipMember">

                        </div>
                        <div className="premiumMember">
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Pricing;
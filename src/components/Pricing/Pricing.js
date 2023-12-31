import React from 'react';
import './Pricing.css';
import { BsFlower1 } from "react-icons/bs";
import RegularMember from './RegularMember/RegularMember';
import VipMember from './VipMember/VipMember';
import PremiumMember from './PremiumMember/PremiumMember';

const Pricing = () => {
    return (
        <div className='pricing'>
            <div className="pricingHead">
                <div className="pricingBody">
                    <p className='pricingTitle'>Our Pricing Packages</p>
                    {/* icon add  */}
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
                     {/* icon add  end */}
                    <div className="packageContents">
                        <div className="regularMember">
                            <RegularMember></RegularMember>

                        </div>
                        <div className="vipMember">
                            <VipMember></VipMember>

                        </div>
                        <div className="premiumMember">
                            <PremiumMember></PremiumMember>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Pricing;
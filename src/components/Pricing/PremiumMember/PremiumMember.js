import React from 'react';
import './PremiumMember.css';
import regular from '../../../assets/image/add/Pricing/premiyn.jpg';
import { HiOutlineChevronRight } from "react-icons/hi";
import { useState } from 'react';
import { result } from 'Utilies/data';


const PremiumMember = () => {
    const [data, setData] = useState(result);


    return (
        <div className='premiumMember'>
              <div className='regularMember'>
                <div className="regularHead">
                    <img src={regular} alt="" />
                    <p className='regularPrice'>Premium Member</p>
                    <hr className='regularHr' color='tomato' />
                    <ul className='listRegular'>
                        <li className='titleRegular'>{data.premiumMember.title2} </li>
                        <li className='sortRegular'>{data.premiumMember.title1}</li>
                        <li className='titleRegular'> {data.premiumMember.title4} </li>
                        <li className='sortRegular2'>{data.premiumMember.title3}</li>
                        <li className='titleRegular'> {data.premiumMember.title6} </li>
                    </ul>
                    <h1 className='pricingRegular'> <small className='smallPrice'>$</small>{data.premiumMember.price} <small className='smallPrice'>/month</small></h1>

                    <div className="btnSubRegular">
                        {/* <div className="regularIcon1">
                            <span className='btnIconReg'> <HiOutlineChevronRight className='outlineIcon' color='white' size={30} />
                            </span>

                        </div> */}
                        <div className="peiceRegBtn">
                            <button className='btnSubInfoReg' type='button'>Singup Now</button>
                        </div>

                    </div>

                </div>

            </div>


     
        </div>
    );
};

export default PremiumMember;
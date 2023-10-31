import React from 'react';
import './VipMember.css';
import regular from '../../../assets/image/add/Pricing/vip.jpg';
import { HiOutlineChevronRight } from "react-icons/hi";
import { useState } from 'react';
import { result } from 'Utilies/data';

const VipMember = () => {

    const [data , setData] = useState(result);
    console.log('result is:', result);

    return (
        <div className='vipMember'>
            <div className='regularMember'>
                <div className="regularHead">
                    <img src={regular} alt="" />
                    <p className='regularPrice'>VIP Member</p>
                    <hr className='regularHr' color='tomato' />
                    <ul className='listRegular'>
                        <li className='titleRegular'>{data.vipMember.title3} </li>
                        <li className='sortRegular'>{data.vipMember.title2} </li>
                        <li className='titleRegular'> {data.vipMember.title1} </li>
                        <li className='sortRegular2'>{data.vipMember.title4} </li>
                        <li className='titleRegular'> {data.vipMember.title5} </li>
                    </ul>
                    <h1 className='pricingRegular'> <small className='smallPrice'>$</small>{data.vipMember.price} <small className='smallPrice'>/month</small></h1>

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

export default VipMember;
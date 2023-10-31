import React from 'react';
import './RegularMember.css';
import regular from '../../../assets/image/add/Pricing/normal.jpg';
import { HiOutlineChevronRight } from "react-icons/hi";
import {result} from '../../../Utilies/data';
import { useState } from 'react';

const RegularMember = () => {
    const [applyData, setApplyData] = useState(result);
    console.log('data is ', result)
    return (
        <div className='regularMember'>
            <div className="regularHead">
                <img src={regular} alt="" />
                <p className='regularPrice'>Regular Member</p>
                <hr className='regularHr' color='tomato' />
                <ul className='listRegular'>
                    <li className='titleRegular'>{applyData.regularMember.title1}</li>
                    <li className='sortRegular'>hair styled </li>
                    <li className='titleRegular'> best care for your skin and body </li>
                    <li className='sortRegular2'>You get custom information </li>
                    <li className='titleRegular'> salons have professional beauticians </li>
                </ul>
                <h1 className='pricingRegular'> <small className='smallPrice'>$</small>49 <small className='smallPrice'>/month</small></h1>

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
    );
};

export default RegularMember;
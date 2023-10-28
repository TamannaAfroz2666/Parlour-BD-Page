import React from 'react';
import './RegularMember.css';
import regular from '../../../assets/image/add/Pricing/normal.jpg'

const RegularMember = () => {
    return (
        <div className='regularMember'>
            <div className="regularHead">
                <img src={regular} alt="" />
                <p className='regularPrice'>Regular Price</p>
                <hr className='regularHr' color='tomato'/>
                <ul className='listRegular'>
                    <li className='titleRegular'>spend quality time your skin massaged </li>
                    <li className='sortRegular'>hair styled </li>
                    <li className='titleRegular'> best care for your skin and body </li>
                    <li className='sortRegular'>You get custom information </li>
                    <li className='titleRegular'> salons have professional beauticians </li>
                </ul>
                <h1 className='pricingRegular'> <small className='smallPrice'>$</small>49 <small className='smallPrice'>/month</small></h1>

            </div>
            
        </div>
    );
};

export default RegularMember;
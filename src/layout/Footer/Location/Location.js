import React from 'react';
import './Location.css'
import { PiPhoneCallFill } from "react-icons/pi";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Location = () => {
    return (
        <div className='location'>
            <div className="locationContents">
                <div className="mobileInfo">
                    <div className="numberIcon">
                       <span className='pi'> <PiPhoneCallFill size={20} color='white'/>  </span>
                    </div>
                    <div className="numberInfo">
                        <p className='numberOf_Title'>1800-880-3214</p>
                        <p className='number_of'>+131 667 8645</p>
                    </div>

                </div>
                <div className="emailInfo">
                    <div className="emailIcon">
                       <span className='piEmail'> <MdEmail size={20} color='white'/>  </span>
                    </div>
                    <div className="emailInfo1">
                        <p className='emailOf_Title'>info@gmail.com</p>
                        <p className='email_of'>services@gmail.com</p>
                    </div>

                </div>
                <div className="addressInfo">
                    <div className="addressIcon">
                       <span className='piAddress'> <IoLocationSharp size={20} color='white'/>  </span>
                    </div>
                    <div className="addressInfo1">
                        <p className='addressOf_Title'>170/7, rup para,15 phase</p>
                        <p className='address_of'>Mohammadpur,Dhaka,Bangladesh</p>
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default Location;

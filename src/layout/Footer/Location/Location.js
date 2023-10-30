import React from 'react';
import './Location.css'
import { PiPhoneCallFill } from "react-icons/pi";

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

            </div>
            
        </div>
    );
};

export default Location;

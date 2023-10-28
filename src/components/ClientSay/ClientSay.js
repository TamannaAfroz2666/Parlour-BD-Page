import React from 'react';
import './ClientSay.css';
import { BsFlower1 } from "react-icons/bs";
import { FaCottonBureau } from "react-icons/fa";

const ClientSay = () => {
    return (
        <div className='clientParent'>
            <div className="clientHead">
                <div className="clientBody">
                    <h1 className='ClientTitle'>What Our Client Says</h1>
                    {/* icon add  */}
                    <div className="clientLine">
                        <div className="lineContentHead">
                            <hr color='tomato' className='clientLineTitle' />
                        </div>

                        <div className="iconOfFlower">
                            <BsFlower1 size={20} color='tomato' />
                        </div>
                        <div className="lineContentHead">
                            <hr color='tomato' className='clientLineTitle' />
                        </div>
                    </div>
                    {/* icon add  end */}

                    <div className="flowerIcon">
                        <p className='flowerTitle'> <FaCottonBureau size={90} /> </p>
                    </div>
                    <div className="clientDesBody">
                        

                    </div>

                </div>
            </div>

        </div>
    );
};

export default ClientSay;
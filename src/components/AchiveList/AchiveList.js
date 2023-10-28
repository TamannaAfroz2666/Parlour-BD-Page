import React from 'react';
import './AchiveList.css';
import { BsFlower1 } from "react-icons/bs";

const AchiveList = () => {
    return (
        <div className='achieveList'>
            <div className="achieveHead">
                <div className="achieveBody">
                    <div className="achieveContents">
                        <div className="contentAcInfo">
                            <h1 className='titleAc'>What We Have Achieve In <br />This Past Year </h1>

                            {/* icon Flower start */}
                            <div className='IconInfoBooking'>
                                <div className="iconOfFlower">
                                    <BsFlower1 size={20} color='tomato' />

                                </div>
                                <div className="line">
                                    <hr color='tomato' className='lineHrBook' />
                                </div>

                            </div>
                            {/* icon Flower start */}


                        </div>
                        <div className="imageAc">

                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default AchiveList;
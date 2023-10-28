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
                            <div className='IconInfoAchive'>
                                <div className="iconOfFlower">
                                    <BsFlower1 size={20} color='tomato' />

                                </div>
                                <div className="line">
                                    <hr color='tomato' className='lineHrAchive' />
                                </div>

                            </div>
                            {/* icon Flower start */}

                            <p className='desAchive'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nostrum dolores est sunt porro consequuntur necessitatibus rem? Molestiae, aliquid consectetur.</p>
                            <p className='desAchive'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, aliquid.</p>


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
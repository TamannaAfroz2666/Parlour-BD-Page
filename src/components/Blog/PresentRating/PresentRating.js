import React from 'react';
import './PresentRating.css';
import image from '../../../assets/image/Pictures/Blogs/23.jpg';
import { VscCalendar } from "react-icons/vsc";
import { AiOutlineUser } from "react-icons/ai";

const PresentRating = () => {
    return (
        <div className='presentRating'>
            <div className="presentRtHead">
                <div className="presentRtBody">
                    <div className="imageInfo">
                    <img src={image} alt="" />
                    </div>
                    <div className="timeAndDate">
                        <div className="presentDate">
                            <div className="dateRating">
                            <VscCalendar  color='tomato' size={25}/>
                            <p className='dateTitle'>7 March, 2020</p>

                            </div>
                        </div>
                        <div className="userName">
                            <div className="userRating">
                                <AiOutlineUser color='tomato' size={25}/>
                                <p>By Jony Doe</p>
                            </div>


                        </div>
                    </div>
                   

                </div>
            </div>
            
        </div>
    );
};

export default PresentRating;
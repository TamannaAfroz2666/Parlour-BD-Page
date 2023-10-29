import React from 'react';
import './WormRating.css'
import image from '../../../assets/image/Pictures/Blogs/23.jpg';
import { VscCalendar } from "react-icons/vsc";
import { AiOutlineUser, AiOutlineRight } from "react-icons/ai";

const WormRating = () => {
    return (
        <div>
            <div className='presentRating'>
                <div className="presentRtHead">
                    <div className="presentRtBody">
                        <div className="imageInfo">
                            <img src={image} alt="" />
                        </div>
                        <div className="timeAndDate">
                            <div className="presentDate">
                                <div className="dateRating">
                                    <VscCalendar color='tomato' size={25} />
                                    <p className='dateTitle'>7 March, 2020</p>

                                </div>
                            </div>
                            <div className="userName">
                                <div className="userRating">
                                    <AiOutlineUser color='tomato' size={25} />
                                    <p className='userTitle'>By Jony Doe</p>
                                </div>
                            </div>
                        </div>
                        <div className="lineBreaker">
                            <hr color='red' className='lineBreak' />
                        </div>
                        <div className="ratingDesContent">
                            <h1 className='desTitle'>Best Relaxation Body Massage </h1>
                            <p className='desContent'>A full body massage is a form of massage therapy that involves massaging (almost!) the entire body, using professional techniques that can help to relieve muscle soreness, promote relaxation, and reduce stress.</p>
                        </div>
                        <div className="readMoreRating">
                            {/* <Link to='' >
                            <AiOutlineRight  color='tomato' size={20}/>
                            Read More

                        </Link> */}
                            <a href="/more">
                                <AiOutlineRight size={15} className='iconRate' />
                                <span className='moreLink'>  Read More</span>


                            </a>
                        </div>


                    </div>
                </div>

            </div>

        </div>
    );
};

export default WormRating;
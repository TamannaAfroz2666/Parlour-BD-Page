import React from 'react';
import './MindRating.css'
import image from '../../../assets/image/Pictures/Blogs/facial.jpg';
import { VscCalendar } from "react-icons/vsc";
import { AiOutlineUser, AiOutlineRight } from "react-icons/ai";
import data from '../../../Utilies/blogNews.json';
const MindRating = () => {

    return (
        <div>
            <div className='presentRating'>
                <div className="presentRtHead">
                    <div className="presentRtBody">
                        <div className="imageInfo">
                            <img src={data.relaxation.image} alt="" />
                        </div>
                        <div className="timeAndDate">
                            <div className="presentDate">
                                <div className="dateRating">
                                    <VscCalendar color='tomato' size={25} />
                                    <p className='dateTitle'>{data.relaxation.data}</p>

                                </div>
                            </div>
                            <div className="userName">
                                <div className="userRating">
                                    <AiOutlineUser color='tomato' size={25} />
                                    <p className='userTitle'>{data.relaxation.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="lineBreaker">
                            <hr color='red' className='lineBreak' />
                        </div>
                        <div className="ratingDesContent">
                            <h1 className='desTitle'>{data.relaxation.title} </h1>
                            <p className='desContent'>{data.relaxation.description}</p>
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

export default MindRating;
import React, { useState } from 'react';
import './WormRating.css'
import image from '../../../assets/image/Pictures/Blogs/HotSone.jpg';
import { VscCalendar } from "react-icons/vsc";
import { AiOutlineUser, AiOutlineRight } from "react-icons/ai";
import data from '../../../Utilies/blogNews.json'

const WormRating = () => {
    const [dataInfo, setDataInfo] = useState(data.hot_stone);
    return (
        <div>
            <div className='presentRating'>
                <div className="presentRtHead">
                    <div className="presentRtBody">
                        <div className="imageInfo">
                            <img src={dataInfo.image} alt="" />
                        </div>
                        <div className="timeAndDate">
                            <div className="presentDate">
                                <div className="dateRating">
                                    <VscCalendar color='tomato' size={25} />
                                    <p className='dateTitle'>{dataInfo.date}</p>

                                </div>
                            </div>
                            <div className="userName">
                                <div className="userRating">
                                    <AiOutlineUser color='tomato' size={25} />
                                    <p className='userTitle'>{dataInfo.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="lineBreaker">
                            <hr color='red' className='lineBreak' />
                        </div>
                        <div className="ratingDesContent">
                            <h1 className='desTitle'>{dataInfo.title} </h1>
                            <p className='desContent'>{dataInfo.description}</p>
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
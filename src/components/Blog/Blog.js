import React from 'react';
import './Blog.css';
import { BsFlower1 } from "react-icons/bs";
import PresentRating from './PresentRating/PresentRating';
import WormRating from './WormRating/WormRating';
import MindRating from './MindRating/MindRating';

const Blog = () => {
    return (
        <div className='blog'>
            <div className="blogHead">
                <div className="blogBody">
                    <div className="blogContent">
                        <h1 className='blogTitle'>Latest Blog & News</h1>
                        {/* icon add  */}
                        <div className="blogLine">
                            <div className="lineContentHead">
                                <hr color='tomato' className='blogLineTitle1' />
                            </div>

                            <div className="iconOfFlower">
                                <BsFlower1 size={20} color='tomato' />
                            </div>
                            <div className="lineContentHead">
                                <hr color='tomato' className='blogLineTitle1' />
                            </div>
                        </div>
                        {/* icon add  end */}
                        <div className="blogContents">
                            <div className="presentRating">
                                <PresentRating></PresentRating>

                            </div>
                            <div className="wormRating">
                                <WormRating></WormRating>

                            </div>
                            <div className="mindRating">
                                <MindRating></MindRating>

                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;
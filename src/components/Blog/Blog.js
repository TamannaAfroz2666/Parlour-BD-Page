import React from 'react';
import './Blog.css';
import { BsFlower1 } from "react-icons/bs";

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

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Blog;
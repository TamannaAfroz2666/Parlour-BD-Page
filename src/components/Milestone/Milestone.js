import React from 'react';
import './Milestone.css';
import image from '../../assets/image/add/PART.jpg'
import { motion } from 'framer-motion';
import { BsFlower1 } from "react-icons/bs";
import { PiRectangleFill } from "react-icons/pi";
import { HiOutlineChevronRight } from "react-icons/hi";

const Milestone = () => {
    return (
        <div className='milestone'>
            <div className="milestoneHead">
                <div className="milestoneBody">
                    <div className="milestoneContent">
                        <motion.div className="imageContent"

                        initial={{
                            opacity: 0,
                            scale: 0,
                            x: -50
                        }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            x:0
                        }}
                        transition={{
                            duration: 1
                        }}
                        
                        >
                            <div className="imageOn">
                            <img src={image} alt="loading....." />

                            </div>
                          

                        </motion.div>
                        <div className="information">
                            <h1 className='informationTitle'>The Essence Of Health And <br /> Vitality In One Place</h1>
                            <div className='IconSort'>
                                <div className="iconOfFlower">
                                    <BsFlower1  size={20} color='tomato'/>

                                </div>
                                <div className="line">
                                    <hr color='tomato' className='lineHr'/>
                                </div>

                            </div>
                            <p className='sortInfo'>We Have <span className='miniCut'>25 years</span>  Of Experience</p>

                            <p className='description'>Our service-oriented establishment in which women receive treatment to increase their beauty. Skincare, facial makeup, hair nourishment, and model hair cutting are the most important nourishing activities of a beauty parlour</p>
                            <p className='description'>We offer skin care services performed by estheticians, including facials, exfoliating scrubs and anti-aging techniques</p>

                            <div className="itemsContent">
                                <div className="cleaning">
                                    <p className='cleaningContent'>
                                        <PiRectangleFill  size={20} color='tomato'/>
                                        <span className='CleaningTitle'>Energy Cleaning Services</span>
                                    </p>
                                    <p className='cleaningContent'>
                                        <PiRectangleFill  size={20} color='tomato'/>
                                        <span className='CleaningTitle'>Energy Cleaning Services</span>
                                    </p>
                                    <p className='cleaningContent'>
                                        <PiRectangleFill  size={20} color='tomato'/>
                                        <span className='CleaningTitle'>Energy Cleaning Services</span>
                                    </p>
                                    <p className='cleaningContent'>
                                        <PiRectangleFill  size={20} color='tomato'/>
                                        <span className='CleaningTitle'>Energy Cleaning Services</span>
                                    </p>

                                </div>
                            </div>

                            <div className="btnSubscription">
                                <div className="btnIcon1">
                                <span className='btnIcon'> <HiOutlineChevronRight className='outlineIcon' color='white' size={30}/>
                            </span>
                                    
                                </div>
                          {/* <div className=""> */}
                          <button type='button'>Subscription</button>
                          {/* </div> */}
                              
                            </div>
                        
                            

                        </div>

                    </div>
                </div>
            </div>

            
        </div>
    );
};

export default Milestone;
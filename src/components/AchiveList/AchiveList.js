import React from 'react';
import './AchiveList.css';
import { BsFlower1 } from "react-icons/bs";
import image from '../../assets/image/add/spaStone.jpg'

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

                            <p className='desAchieve'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis nostrum dolores est sunt porro consequuntur necessitatibus rem? Molestiae, aliquid consectetur.</p>
                            <p className='desAchieve'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, aliquid.</p>


                            {/* clients part start */}
                            <div className="reviewContent">
                                <div className="happyClients">
                                    <p className='clientsNum' >4 <span className='upperNum'>8</span> <span className='twoNum'>71</span> <span className='upperPlus'>+</span></p>
                                    <p className='clientsTitle'>Happy Clients</p>
                                </div>
                                <div className="relaxedClients">
                                    <p className='clientRexNum' >
                                        <span className='upperRexNum'>8</span>
                                      <span className='threeNum'>
                                        795
                                        </span>
                                        <span className='upperRexPlus'>+</span>
                                    </p>
                                    <p className='relaxedTitle'>Happy Clients</p>
                                </div>
                            </div>


                        </div>
                        <div className="imageAc">
                            <img src={image} alt="loading ..." />


                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

export default AchiveList;
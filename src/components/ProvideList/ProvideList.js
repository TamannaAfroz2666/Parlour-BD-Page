import React from 'react';
import './ProvideList.css';
import { BsFlower1 } from "react-icons/bs";
import stone from '../../assets/image/Pictures/Provide/stone.jpg'
import massage from '../../assets/image/Pictures/Provide/massage.jpg';
import facil from '../../assets/image/Pictures/Provide/flower.jpg'

const ProvideList = () => {
    return (
        <div className='provideList'>
            <div className="provideListHead">
                <div className="provideBody">
                    <p className='titleProvide'>What we provide</p>
                    <div className="lineContents">
                        <div className="lineContentHead">
                            <hr color='tomato' className='LineTitle' />
                        </div>

                        <div className="iconOfFlower">
                            <BsFlower1 size={20} color='tomato' />
                        </div>
                        <div className="lineContentHead">
                            <hr color='tomato' className='LineTitle' />
                        </div>
                    </div>
                    <div className="provideContents">
                        <div className="sports">
                            <div className="sportImg">
                                <img src={stone} alt="" />
                            </div>
                            <div className="provideInfo">
                                <p className='stoneInfoTitle'>Sports Massage</p>
                                <hr color='tomato' className='stoneHr' />
                                <p className='StoneDescription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, fuga dignissimos aut architecto totam repellendus excepturi nostrum est veniam doloribus.</p>

                            </div>
                        </div>

                        <div className="hotSone">
                            <div className="stoneImg">
                                <img src={massage} alt="" />
                            </div>
                            <div className="provideInfo">
                                <p className='stoneInfoTitle'>Sports Massage</p>
                                <hr color='tomato' className='stoneHr' />
                                <p className='StoneDescription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, fuga dignissimos aut architecto totam repellendus excepturi nostrum est veniam doloribus.</p>

                            </div>

                        </div>
                        <div className="facil">
                            <div className="facilImg">
                                <img src={facil} alt="" />
                            </div>
                            <div className="provideInfo">
                                <p className='stoneInfoTitle'>Sports Massage</p>
                                <hr color='tomato' className='stoneHr' />
                                <p className='StoneDescription'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, fuga dignissimos aut architecto totam repellendus excepturi nostrum est veniam doloribus.</p>

                            </div>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProvideList;
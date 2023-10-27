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
                        <hr color='tomato' className='LineTitle'/>
                        </div>
                     
                        <div className="iconOfFlower">
                            <BsFlower1 size={20} color='tomato' />
                        </div>
                        <div className="lineContentHead">
                        <hr color='tomato' className='LineTitle'/>
                        </div>
                    </div>
                    <div className="provideContents">
                        <div className="sports">
                            <img src={stone} alt="" />


                        </div>
                        <div className="hotSone">
                       
                            <img src={massage} alt="" />



                        </div>
                        <div className="facil">
                       
                            <img src={facil} alt="" />


                    

                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default ProvideList;
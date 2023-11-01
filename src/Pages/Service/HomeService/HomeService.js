import React from 'react';
import './HomeService.css';
import { GiDrippingStar, GiButterflyFlower } from "react-icons/gi";
// import {  GoWorkflow} from "react-icons/go";
import  img1 from '../../../assets/image/Service/image/m4.jpg';
import img2 from '../../../assets/image/Service/image/m1.jpg';
import img3 from '../../../assets/image/Service/image/m2.jpg'
import { HiOutlineArrowRightCircle } from "react-icons/hi2";

const HomeService = () => {
    return (
        <div className='HomeService'>
            <div className="HomeServiseHead">
                <div className="service_body">
                    <div className="service_content">
                        <h1 className='hSTitle'> <span className='sar_name'>Alisa </span> <br />Salon <span>
                            <GiDrippingStar color='red' size={30} /> </span></h1>
                        <div className="contentsOfHome">
                            <div className="infoOfHome">
                                <div className="iconHomeS">
                                    <GiButterflyFlower color='tomato' size={50} />
                                </div>
                                <p className='ourService'>Our Service</p>
                                <span className="hrHome">
                                <hr className='ourHr11' />
                                </span>
                                <div className="listOfSr">
                                    <ul>
                                        <li>VLCC facial</li>
                                        <li>hair spa</li>
                                        <li>pedicure</li>
                                        <li>manicure</li>
                                        <li>full hand wax</li>
                                        <li>half leg wax</li>
                                        <li>dtan face & hand</li>
                                        <li>dtan full leg</li>
                                    </ul>
                                    <ul>
                                        <li>dtan full leg</li>
                                        <li>root touch-up</li>
                                        <li>back massage</li>
                                        <li>threading</li>
                                        <li>uperlips</li>
                                        <li>forehead cain</li>
                                        <li>face wax</li>
                                        <li>basic hair cut</li>
                                        <li>bleach</li>
                                    </ul>
                                </div>
                                <div className="aboutUs">
                                    <h1 className='aboutUsTitleH'>About Us</h1>
                                    <p className='sortDesH'>Relax yourself with our spa and massage service</p>

                                    <h3 className='priceH'>pick any of 6 service just  <span className='tkH'>'tk 1499/-'</span></h3>
                                </div>
                               

                            
                           

                            </div>
                            <div className="imgOfHome">
                                <div className="img1">
                                    <img src={img3} alt="" />
                                </div>
                                <div className="img2">
                                    <img src={img2} alt="" />
                                </div>
                                <div className="img3">
                                    <img src={img1} alt="" />
                                </div>
                                <div className="btnH">
                                    <button type='button' className='btnHome'>
                                        Book Now <span> <HiOutlineArrowRightCircle color='black' size={20} /></span>
                                    </button>
                                </div>

                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeService;
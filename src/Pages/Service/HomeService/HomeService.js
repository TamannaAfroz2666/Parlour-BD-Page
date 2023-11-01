import React from 'react';
import './HomeService.css';
import { GiDrippingStar, GiButterflyFlower } from "react-icons/gi";
// import {  GoWorkflow} from "react-icons/go";

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
                           

                            </div>
                            <div className="imgOfHome">

                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeService;
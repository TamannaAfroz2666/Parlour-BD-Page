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
                             <GiDrippingStar color='red'  size={30}/> </span></h1>
                             <div className="iconHomeS">
                                <GiButterflyFlower color='tomato' size={20} />

                             </div>
                             <p>Our Service</p>


                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomeService;
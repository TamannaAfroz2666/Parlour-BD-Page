import React from 'react';
import './HomeService.css';
import { GiDrippingStar } from "react-icons/gi";

const HomeService = () => {
    return (
        <div className='HomeService'>
            <div className="HomeServiseHead">
                <div className="service_body">
                    <div className="service_content">
                        <h1 className='hSTitle'> <span className='sar_name'>Alisa </span>Salon <span>
                             <GiDrippingStar color='red'  size={30}/> </span></h1>


                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HomeService;
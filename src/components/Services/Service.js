import React from 'react';
import './Service.css';
import seevice1 from '../../assets/image/Logo.jpg';
import service2 from '../../assets/image/PlayButton.jpg';
import service3 from '../../assets/image/arrowPlayButton.PNG';
// import Title from './components/Title/Title';
import Title from 'components/Title/Title';
// import play from '../../assets/image/Background/bg.jpg'
import {  PiNavigationArrowBold } from "react-icons/pi";

const Service = () => {
    const data = [
        {
            type: "Blowout",
            text: 'Shampoo and blow dry. If you are looking celebrate your special day with us.',
            image : seevice1,
        },
        {
            type: "Olapx",
            text: ' If you are looking celebrate your special day with us.',
            image : service2,
        },
        {
            type: "Retouch",
            text: 'Shampoo and blow dry.',
            image : service3,
        }
    ]


    return (
        <div id='services'>
            {/* <Title  value ='services'> */}
            <Title value ='services'></Title>
            <div className="services">
                {
                    data.map(({type, text, image},index) =>
                    {
                        return(
                            <div className="services_service">
                                <div className="services_service_image">
                                    <img src={image} alt="Service" />
                                </div>
                                <div className="services_service_title">
                                    <span> 0{index +1}  </span>
                                    <h2> {type} </h2>
                                </div>

                                <p className="services_service_description">
                                    {text}
                                </p>
                                {/* <img src={play} alt="ReadMore" /> */}
                                <PiNavigationArrowBold color='pink' size={50} />
                               
                            </div>
                        )

                    })
                }
            </div>
            
        </div>
    );
};

export default Service;
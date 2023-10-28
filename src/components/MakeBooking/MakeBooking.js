import React from 'react';
import './MakeBooking.css';
import { BsFlower1 } from "react-icons/bs";

const MakeBooking = () => {
    return (
        <div className='makeBooking'>
            <div className="makeBookingHead">
                <div className="bookingBody">
                    <div className="bookingContents">
                        <div className="appoinment">
                            <p className='appointmentTitle'>Make Appointment</p>
                            <div className='IconSort'>
                                <div className="iconOfFlower">
                                    <BsFlower1 size={20} color='tomato' />

                                </div>
                                <div className="line">
                                    <hr color='tomato' className='lineHr' />
                                </div>

                            </div>

                        </div>
                        <div className="appoinmentInfo">

                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default MakeBooking;
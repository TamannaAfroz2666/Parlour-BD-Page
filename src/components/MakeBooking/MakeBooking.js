import React from 'react';
import './MakeBooking.css';
import { BsFlower1 } from "react-icons/bs";

const MakeBooking = () => {
    return (
        <div className='makeBooking'>
            <div className="makeBookingHead">
                <div className="bookingBody">
                    <div className="bookingContents">
                        <div className="appointment">
                            <p className='appointmentTitle'>Make Appointment</p>
                            <div className='IconSortBooking'>
                                <div className="iconOfFlower">
                                    <BsFlower1 size={20} color='tomato' />

                                </div>
                                <div className="line">
                                    <hr color='tomato' className='lineHrBook' />
                                </div>

                            </div>

                        </div>
                        <div className="appointmentInfo">

                        </div>
                    </div>

                </div>
            </div>
            
        </div>
    );
};

export default MakeBooking;
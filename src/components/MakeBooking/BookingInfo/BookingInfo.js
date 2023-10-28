import React from 'react';
import './BookingInfo.css';
import { BsFlower1 } from "react-icons/bs";

const BookingInfo = () => {
    return (
        <div className='bookingINfo'>
            <h2 className='infoTitleBook'>Book Your Appointment <br /> For Relaxation </h2>
            {/* icon Flower start */}
            <div className='IconInfoBooking'>
                <div className="iconOfFlower">
                    <BsFlower1 size={20} color='tomato' />

                </div>
                <div className="line">
                    <hr color='tomato' className='lineHrBook' />
                </div>

            </div>
            {/* icon Flower start */}

            <p className='bookingInfoDes'>Thank you for considering Butter Beauty Parlour for your  event .  In order to ensure all your needs are met, please read the following booking information as well as our terms and conditions.  Should you wish to move forward with a group booking, please submit our online booking form and our group coordinator will confirm availability, services selected and location.</p>
            <p className='bookingInfoDes'>Please allow up to 72 hours for a response as we are working hard to ensure our stylists and makeup artists are available for you.</p>

        </div>
    );
};

export default BookingInfo;
import React, { useState } from 'react';
import './MakeBooking.css';
import { BsFlower1 } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";
import BookingInfo from './BookingInfo/BookingInfo';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import MakeCalander from './MakeCalander/MakeCalander';

const MakeBooking = () => {

    // const [selectedDate, setSelectedDate] = useState('');
    // const [selectedTime, setSelectedTime] = useState('');

    // const handleDateChange = (e) => {
    //   setSelectedDate(e.target.value);
    // };

    // const handleTimeChange = (e) => {
    //   setSelectedTime(e.target.value);
    // };

    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <div className='makeBooking'>
            <div className="makeBookingHead">
                <div className="bookingBody">
                    <div className="bookingContents">
                        <div className="appointment">
                            <p className='appointmentTitle'>Make Appointment</p>
                            {/* icon Flower start */}
                            <div className='IconSortBooking'>
                                <div className="iconOfFlower">
                                    <BsFlower1 size={20} color='tomato' />

                                </div>
                                <div className="line">
                                    <hr color='tomato' className='lineHrBook' />
                                </div>

                            </div>
                            {/* icon Flower start */}
                            <div className="userContents">
                                <div className="namePart">
                                    <input type="text" name='name' value='' className='firstName' placeholder='First Name' autoComplete='off' />

                                    <input type="text" name='name' value='' className='firstName' placeholder='Last Name' autoComplete='off' />
                                </div>
                                <div className="emailPart">
                                    <input type="text" name='name' value='' className='emailField' placeholder='Email' autoComplete='off' />

                                    <input type="text" name='name' value='' className='emailField' placeholder='Phone No.' autoComplete='off' />
                                </div>
                                <div className="dateTimeHead">
                                    <input
                                        type="date"
                                        placeholder="Select a date"
                                        className='dateTime'
                                    />
                                </div>

                                <div className="message">
                                    <input type="text" name='message' value='' className='messageField' placeholder='Message' autoComplete='off' />
                                </div>

                                <div className="btnBooking">
                                    <div className="btnBookIcon">
                                        <span className='btnIconBook'> <HiOutlineChevronRight className='lineIconBok' color='white' size={30} />
                                        </span>

                                    </div>
                                    <div className="peiceRegBtn">
                                        <button className='btnSubInfoReg' type='button'>Submit Now</button>
                                    </div>

                                </div>

                            </div>



                        </div>
                        <div className="appointmentInfo">
                            <BookingInfo></BookingInfo>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MakeBooking;
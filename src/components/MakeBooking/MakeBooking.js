import React, { useState } from 'react';
import './MakeBooking.css';
import { BsFlower1 } from "react-icons/bs";
import { HiOutlineChevronRight } from "react-icons/hi";
import BookingInfo from './BookingInfo/BookingInfo';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
                                <div className="dateTime">
                                    {/* 
                                    <input type="date" value={selectedDate} onChange={handleDateChange} />
                                    <select value={selectedTime} onChange={handleTimeChange}>
                                        <option value="morning">Morning</option>
                                        <option value="afternoon">Afternoon</option>
                                        <option value="evening">Evening</option>
                                    </select> */}
                                    <select name="dateTime" id="dateTime">
                                    <input type="text" />
                                   
                                        <option className='optionName' value="selectedDate"  >Select the date
                                  
                                        <h1>

                                      
                                         <DatePicker
                                            selected={selectedDate}
                                            onChange={handleDateChange}
                                            dateFormat="MM/dd/yyyy" // Customize the date format as needed
                                        />
                                          </h1>
                                        </option>
                                       

                                    </select>

                                    {/* <div> */}
                                        {/* <select>
                                            <option value="option1">Option 1</option>
                                            <option value="option2">Option 2</option>
                                            <option value="option3">Option 3</option>
                                        </select> */}
                                        {/* <input
                                            type="text"
                                            placeholder="Select a date"
                                            value={selectedDate}
                                            onChange={(e) => e.preventDefault()}
                                        /> */}
                                        {/* <DatePicker
                                            selected={selectedDate}
                                            onChange={handleDateChange}
                                            dateFormat="MM/dd/yyyy" // Customize the date format as needed
                                        /> */}
                                    {/* </div> */}





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
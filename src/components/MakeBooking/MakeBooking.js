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
                                    <input type="text" name='name' value='' className='firstName'  placeholder='First Name' autoComplete='off' />
                                    
                                    <input type="text" name='name' value='' className='firstName'  placeholder='Last Name' autoComplete='off' />
                                </div>
                                <div className="emailPart">
                                    <input type="text" name='name' value='' className='emailField'  placeholder='Email' autoComplete='off' />

                                    <input type="text" name='name' value='' className='emailField'  placeholder='Phone No.' autoComplete='off' />
                                </div>
                                <div className="dateTime">
                                    <select name="dateTime" id="dateTime">
                                        <option className='optionName'  value="date">date time
                                        <input type="date" />

                                        </option>

                                    </select>
                                   
                                </div>
                                <div className="message">
                                    <input type="text" name='message' value='' className='messageField'  placeholder='Message' autoComplete='off'  />
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
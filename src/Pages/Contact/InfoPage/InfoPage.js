import React, { useState } from 'react';
import './InfoPage.css';
import { MdLocationPin, MdEmail, MdCall } from "react-icons/md";
import data from '../../../Utilies/contactUs.json';

const InfoPage = () => {
    const [dataInfo, setDataInfo] = useState(data.contuct_us);;
    return (
        <div className='infoPage'>
            <div className="infoP_head">
                <div className="infoBodyContact">

                    <div className="contactInput">
                        <form action="">

                            <div className="nameField">
                                <input
                                    type="text"
                                    name='name'
                                    placeholder='Name'
                                    className='inputField'
                                />
                            </div>
                            <div className="emailField">
                                <input
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    className='inputField'
                                />
                            </div>
                            <div className="massageField">
                                <textarea
                                    type="text"
                                    name='message'
                                    placeholder='Write a message' className='textAreaField'
                                />
                            </div>

                            <div className="priceRegBtn">
                                <button className='btnSubInfoReg'

                                    type='submit'>Send</button>
                            </div>



                        </form>

                    </div>
                    <div className="infoContents">
                        <h1 className='titleInFo'>contact info</h1>
                        <p className='titleDes'>{dataInfo.description}</p>

                        <div className="locationArea">
                            <div className="location">
                                <div className="icon">
                                    <MdLocationPin color='black' size={25} />
                                </div>
                                <div className="info">
                                    <p className='infoTitle'>{dataInfo.houseNo.slice(3, 50)}</p>
                                </div>
                            </div>
                            <div className="emailInfo1">
                                <div className="location">
                                    <div className="icon">
                                        <MdEmail color='black' size={25} />

                                    </div>
                                    <div className="info">
                                        <p className='infoTitle'>{dataInfo.mail}</p>

                                    </div>
                                </div>
                            </div>
                            <div className="mobileInfo1">
                                <div className="location">
                                    <div className="icon">
                                        <MdCall color='black' size={25} />

                                    </div>
                                    <div className="info">
                                        <p className='infoTitle'>{dataInfo.number}</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="ourHours">
                            <h1 className='ourHoursTitle'>Our Hours</h1>
                            <div className="ourHoursContent">
                                <div className="hourDayContent">
                                    <h4 className='hourOfDay'>SATURDAY</h4>
                                </div>
                                <div className="ourTimeContent">
                                    <p className='hourOfTime'>Closed</p>
                                </div>
                            
                            </div>
                            <hr className='hoursLine'/>
                            <div className="ourHoursContent">
                                <div className="hourDayContent">
                                    <h4 className='hourOfDay'>sunday</h4>
                                </div>
                                <div className="ourTimeContent">
                                    <p className='hourOfTime'>10AM - 7PM</p>
                                </div>
                            
                            </div>
                            <hr className='hoursLine'/>
                            <div className="ourHoursContent">
                                <div className="hourDayContent">
                                    <h4 className='hourOfDay'>monday</h4>
                                </div>
                                <div className="ourTimeContent">
                                    <p className='hourOfTime'>10AM - 7PM</p>
                                </div>
                            
                            </div>
                            <hr className='hoursLine'/>
                            <div className="ourHoursContent">
                                <div className="hourDayContent">
                                    <h4 className='hourOfDay'>TUESDAY</h4>
                                </div>
                                <div className="ourTimeContent">
                                    <p className='hourOfTime'>10AM - 7PM</p>
                                </div>
                            
                            </div>
                            <hr className='hoursLine'/>
                            <div className="ourHoursContent">
                                <div className="hourDayContent">
                                    <h4 className='hourOfDay'>WEDNESDAY</h4>
                                </div>
                                <div className="ourTimeContent">
                                    <p className='hourOfTime'>10AM - 7PM</p>
                                </div>
                            
                            </div>
                            <hr className='hoursLine'/>
                            <div className="ourHoursContent">
                                <div className="hourDayContent">
                                    <h4 className='hourOfDay'>THURSDAY</h4>
                                </div>
                                <div className="ourTimeContent">
                                    <p className='hourOfTime'>10AM - 7PM</p>
                                </div>
                            
                            </div>
                            <hr className='hoursLine'/>
                            <div className="ourHoursContent">
                                <div className="hourDayContent">
                                    <h4 className='hourOfDay'>FRIDAY</h4>
                                </div>
                                <div className="ourTimeContent">
                                    <p className='hourOfTime'>Closed</p>
                                </div>
                            
                            </div>
                           
                        </div>


                    </div>


                </div>

            </div>


        </div>
    );
};

export default InfoPage;
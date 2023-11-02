import React from 'react';
import './InfoPage.css';
import { MdLocationPin, MdEmail } from "react-icons/md";

const InfoPage = () => {
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
                        <p className='titleDes'>If you have any inquiries, comments, or would like to request an appointment, please call us or fill out this form and we will get back to you as soon as possible.</p>

                        <div className="locationArea">
                            <div className="location">
                                <div className="icon">
                                    <MdLocationPin color='black' size={25} />
                                </div>
                                <div className="info">
                                    <p className='infoTitle'>451 Chestnut Ridge Rd, Woodcliff Lake, NJ 07677</p>

                                </div>
                            </div>
                            <div className="emailInfo1">
                            <div className="location">
                                <div className="icon">
                                    <MdEmail color='black' size={25}/>

                                </div>
                                <div className="info">
                                    <p className='infoTitle'>alisa@mail.com</p>

                                </div>
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
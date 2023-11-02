import React from 'react';
import './InfoPage.css';

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

                    </div>

                </div>

            </div>


        </div>
    );
};

export default InfoPage;
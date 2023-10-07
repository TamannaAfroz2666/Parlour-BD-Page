import React from 'react';
import './Home.css';
// import Navbar from './components/NavBar/Navbar';
import NavBar from 'components/NavBar/NavBar';
// import playButton from '../../assets/image/arrowPlayButton.PNG'
import {  PiNavigationArrowBold } from "react-icons/pi";

const Home = () => {
    return (
        <div className='homeHead'>
           
            <div className="homeSection">
                <NavBar></NavBar>
                <div className="home">
                    <div className="content">
                        <div className="title">
                            <h1>Blossom Parlour</h1>
                        </div>
                        <div className="sub_title">
                            <p>
                                At the beauty parlour, we believe in a beauty of consious.We have created a salon that offers the highest quality hair services.
                            </p>
                        </div>
                        {/* <img src={playButton} alt="" /> */}
                        <PiNavigationArrowBold color='black' size={50} />
                    </div>
                </div>

            </div>
            <div className="info">
                <div className="grid">
                    <div className="col">
                        <strong>Parlour</strong>
                        <p>Blossoms Academy</p>
                    </div>
                    <div className="col">
                        <strong>Email</strong>
                        <p>Blossoms@gmail.com</p>
                    </div>
                    <div className="col">
                        <strong>Mobile</strong>
                        <p>013123465</p>
                    </div>
                    <div className="col">
                        <strong>Address</strong>
                        <p>Blossoms Academy, Dhanmondi 27, Dhaka</p>
                    </div>
                    <div className="col">
                        <strong>Services</strong>
                        <p>Sparking</p>
                        <p>SPA cream</p>
                    </div>
                    <div className="col">
                        <strong>Working Hours</strong>
                        <p>Monday to Friday</p>
                        <p>08:00 - 09:00</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
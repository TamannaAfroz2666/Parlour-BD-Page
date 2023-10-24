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
                        <PiNavigationArrowBold color='white' size={50} />
                    </div>
                </div>

            </div>
         
        </div>
    );
};

export default Home;
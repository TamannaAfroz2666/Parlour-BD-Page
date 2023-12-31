import React from 'react';
import './Home.css';
// import Navbar from './components/NavBar/Navbar';
import NavBar from 'components/NavBar/NavBar';
// import Animation from 'components/Animation/Animation';
import Milestone from 'components/Milestone/Milestone';
import ProvideList from 'components/ProvideList/ProvideList';
import Pricing from 'components/Pricing/Pricing';
import MakeBooking from 'components/MakeBooking/MakeBooking';
import AchiveList from 'components/AchiveList/AchiveList';
import ClientSay from 'components/ClientSay/ClientSay';
import Blog from 'components/Blog/Blog';
import Background from 'components/Background/Background';
import Footer from 'layout/Footer/Footer';
// import playButton from '../../assets/image/arrowPlayButton.PNG'
// import {  PiNavigationArrowBold } from "react-icons/pi";

const Home = () => {
    return (
        <div className='homeHead'>
                <NavBar></NavBar>
                <Milestone></Milestone>
                <ProvideList></ProvideList>
                <Pricing></Pricing>
                <MakeBooking></MakeBooking>
                <AchiveList></AchiveList>
                <ClientSay></ClientSay>
                <Blog></Blog>
                <Background></Background>
                <Footer></Footer>

                {/* <Animation></Animation> */}

                

  
         
        </div>
    );
};

export default Home;
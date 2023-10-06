import React from 'react';
import './Home.css';
// import Navbar from './components/NavBar/Navbar';
import NavBar from 'components/NavBar/NavBar';

const Home = () => {
    return (
        <div className='homeHead'>
            <div className="homeSection">
                <NavBar></NavBar>

            </div>

        </div>
    );
};

export default Home;
import React from 'react';
import './Hair.css';
import Header from 'layout/Header/Header';
// import HeaderService from 'Pages/Service/HeaderService/HeaderService';
// import HeadPage from 'Pages/Contact/HeadPage/HeadPage';

const Hair = () => {
    return (
        <div className='hairContainer'>
            <div className="hairHead">
                <div className="hairBody">
                    <Header></Header>
                    <div className="hairTitleContent">
                        <p className='lovelyTitle'>Lovely</p>
                        <p className='hairTitle'>hair</p>
                    </div>
                  
                </div>

            </div>
            
        </div>
    );
};

export default Hair;
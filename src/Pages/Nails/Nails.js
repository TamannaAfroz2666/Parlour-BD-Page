import React from 'react';
import './Nails.css'
import Header from 'layout/Header/Header';
import NailPrice from './NailPrice/NailPrice';
import Footer from 'layout/Footer/Footer';

const Nails = () => {
    return (
        <div className='nails'>
             <div className="nailHead">
                <div className="hairBody">
                   <Header></Header>
                    <div className="hairTitleContent">
                        <p className='lovelyTitle'>Exquisite</p>
                        <p className='hairTitle'>nails</p>
                    </div>
                  
                </div>

            </div>
            <div className="pricingListContent">
                <NailPrice></NailPrice>
                <Footer></Footer>
               

            </div>
            
        </div>
    );
};

export default Nails;
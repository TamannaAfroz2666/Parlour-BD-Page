import React from 'react';
import './ServiceMainPage.css';
import HeaderService from '../HeaderService/HeaderService';
import Footer from 'layout/Footer/Footer';
import ProvideList from 'components/ProvideList/ProvideList';

const ServiceMainPage = () => {
    return (
        <div className='serviceMainPage'>
            <HeaderService></HeaderService>
            <ProvideList></ProvideList>
            {/* <div>
                <h1>hell</h1>
            </div> */}
            <Footer></Footer>
            
        </div>
    );
};

export default ServiceMainPage;
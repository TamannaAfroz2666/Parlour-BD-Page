import React from 'react';
import './ServiceMainPage.css';
import HeaderService from '../HeaderService/HeaderService';
import Footer from 'layout/Footer/Footer';
import ProvideList from 'components/ProvideList/ProvideList';
import HomeService from '../HomeService/HomeService';

const ServiceMainPage = () => {
    return (
        <div className='serviceMainPage'>
            <HeaderService></HeaderService>
            <ProvideList></ProvideList>
            <HomeService></HomeService>
         
            <Footer></Footer>
            
        </div>
    );
};

export default ServiceMainPage;
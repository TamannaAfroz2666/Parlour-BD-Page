import React from 'react';
import './HeadPage.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeaderService from 'Pages/Service/HeaderService/HeaderService';

const HeadPage = () => {
    return (
        <div className='headPage'>
            <div className="portfolio_body">
                <HeaderService></HeaderService>
                <div className="portfolio_Content">
                    <motion.div
                        className="title_contentH"
                        initial={{ opacity: 0, y: '-10vh' }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            delay: 1
                        }}

                    >
                        <p className='title'>Contact us</p>
                    </motion.div>
                    


                </div>
            </div>


        </div>
    );
};

export default HeadPage;
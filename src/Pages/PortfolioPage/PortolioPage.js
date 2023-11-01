import React from 'react';
import './PortfolioPage.css';
import PortfolioPageHead from './PortfolioPageHead/PortfolioPageHead';
import PortfolioPageMain from './PortfolioPageMain/PortfolioPageMain';

const PortolioPage = () => {
    return (
        <div className='portfolioPage'>
            <div className="pHeadPage">
                <div className="pBodyPage">
                   <div className="head">
                    <PortfolioPageHead></PortfolioPageHead>
                   </div>
                   <div className="body">
                    <PortfolioPageMain></PortfolioPageMain>

                   </div>

                </div>
            </div>
            
        </div>
    );
};

export default PortolioPage;
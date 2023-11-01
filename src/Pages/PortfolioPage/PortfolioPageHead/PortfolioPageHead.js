import React from 'react';
import './PortfolioPageHead.css';
import { Link } from 'react-router-dom';

const PortfolioPageHead = () => {
    return (
        <div className='portPHead'>
            <div className="portfolio_body">
                <div className="portfolio_Content">
                    <div className="title_content">
                        <h2 className='title'>portfolio gallery</h2>

                    </div>
                    <div className="nav_content">
                        <ul className='headLink'>
                            <li> <Link className='linkTitle' to='/'>Home </Link> </li>
                            <span>/</span>
                            <li> <Link className='linkTitle' to='/portfolio'>Portfolio gallery</Link> </li>
                        </ul>

                    </div>


                </div>
            </div>
            
        </div>
    );
};

export default PortfolioPageHead;
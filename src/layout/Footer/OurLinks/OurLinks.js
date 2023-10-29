import React from 'react';
import './OurLinks.css';
import { BsFlower1 } from "react-icons/bs";

const OurLinks = () => {
    return (
        <div className='ourLinksHead'>
            <div className="ourLinkBody">
                <h1 className='titleOurLink'> Our Links</h1>
                {/* icon Flower start */}
                <div className='IconSortLinks'>
                    <div className="iconOfFlower">
                        <BsFlower1 size={20} color='tomato' />

                    </div>
                    <div className="line">
                        <hr color='black' className='lineHrFooter' />
                    </div>

                </div>
                {/* icon Flower start */}
                <div className="linksOf">
                    <ul className='linksOfHead'>
                        <li className='subLinksOfHead'>
                            <a href="/home"> Home</a>
                        </li>
                        <li className='subLinksOfHead'>
                            <a href="/about"> About Us</a>
                        </li>
                        <li className='subLinksOfHead'>
                            <a href="/services"> Services</a>
                        </li >
                        <li className='subLinksOfHead'>
                            <a href="/appoiment"> Appoiment</a>
                        </li>
                        <li className='subLinksOfHead'>
                            <a href="/blog"> Blog</a>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    );
};

export default OurLinks;
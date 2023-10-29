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

            </div>

        </div>
    );
};

export default OurLinks;
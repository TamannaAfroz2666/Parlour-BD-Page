import React from 'react';
import './OtherLinks.css';
import { BsFlower1 } from "react-icons/bs";

const OtherLinks = () => {
    return (
        <div className='otherLinkHead'>
              <div className="ourLinkBody">
                <h1 className='titleOurLink'> Others Links</h1>
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
                            <a href="/fqa"> FQA</a>
                        </li>
                        <li className='subLinksOfHead'>
                            <a href="/support"> Support</a>
                        </li>
                        <li className='subLinksOfHead'>
                            <a href="/privacy"> Privacy</a>
                        </li >
                        <li className='subLinksOfHead'>
                            <a href="/termConditon"> Term & Condition</a>
                        </li>
                       
                    </ul>
                </div>

            </div>
            
        </div>
    );
};

export default OtherLinks;
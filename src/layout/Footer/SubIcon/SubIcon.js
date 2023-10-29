import React from 'react';
import './SubIcon.css';
import { GiInterleavedClaws } from "react-icons/gi";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";


const SubIcon = () => {
    return (
        <div className='subIcon'>
            <div className="alisaIcon">
                <div className="iconContentsSub">
                    <a href="/home">
                    <span className='footerIcon'> <GiInterleavedClaws color='tomato' size={50} /> </span>

                    </a>
               
                <div className="titleSubFooter">
                    <h1 className='companyTitle'>Alisa</h1>
                    <p className='companySubTitle'>Beauty and Spa</p>
                </div>
                </div>
                
                <div className="desFooter">
                    <p className='footerDes'>Our beauty spa not only offers skin care treatment. But also, many reliable spas offer massage therapies to soothe your body and release tension. Also, these therapies relieve muscle pain and improve blood flow. So you can get both mental and physical benefits from a reliable spa such as Nail Concept</p>
                </div>
                <div className="socialLinks">
                    <div className="facebook">
                        <a href="/facebook">
                        <RiFacebookFill  color='white' size={30} className='fbIcon'/>
                        </a>

                    </div>
                    <div className="instagram">
                        <a href="/instagram">
                    <FaInstagram  color='white' size={30} className='intIcon'/>
                    </a>

                    </div>
                    <div className="twitter">
                        <a href="/twitter">
                    <AiOutlineTwitter  color='white' size={30} className='intIcon'/>
                    </a>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default SubIcon;
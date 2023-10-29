import React from 'react';
import './ClientSay.css';
import { BsFlower1 } from "react-icons/bs";
import { FaCottonBureau } from "react-icons/fa";
import { PiQuotesBold } from "react-icons/pi";
import { AiFillStar } from "react-icons/ai";
import image from '../../assets/image/Background/2.jpg'
import CardSlider from './CardSlider/CardSlider';
// import Carousel from 'react-bootstrap/Carousel';

const ClientSay = () => {
    return (
        <div className='clientParent'>
            <div className="clientHead">
                <div className="clientBody">
                    <h1 className='ClientTitle'>What Our Client Says</h1>
                    {/* icon add  */}
                    <div className="clientLine">
                        <div className="lineContentHead">
                            <hr color='tomato' className='clientLineTitle' />
                        </div>

                        <div className="iconOfFlower">
                            <BsFlower1 size={20} color='tomato' />
                        </div>
                        <div className="lineContentHead">
                            <hr color='tomato' className='clientLineTitle' />
                        </div>
                    </div>
                    {/* icon add  end */}

                    <div className="flowerIcon">
                        <p className='flowerTitle'> <FaCottonBureau size={90} /> </p>
                    </div>
                    <div className="clientDesBody">

                        <div className="caroselManu">
                            {/* <div id="carouselExampleAutoplaying" class=" carousel slide" data-bs-ride="carousel"> */}
                            <div id="carouselExampleControls" class="carousel carousel-dark slide" data-bs-ride="carousel">

                                {/* <div class="carousel-indicators">
                                    <div className="indicatorSection">



                                    </div>


                                </div> */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="card-wrapper ">
                                            <div className="card " >
                                                <span className='StartIconTest'>
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />

                                                </span>
                                                <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                                <div className="card-body">
                                                    <div className="imageCardSec">
                                                        <div className="imageCardTest">
                                                            <div className="img">
                                                                <img src={image} alt="..." />
                                                            </div>
                                                            <div className="infoImgTest">
                                                                <p className='clientName'> Nicolas Marko</p>
                                                                <span className='ClientDo'>Web developer</span>
                                                            </div>
                                                        </div>
                                                        <div className="iconRight">
                                                            <span className='iconRiQuo'>
                                                                <PiQuotesBold size={35} className='piQuote' />

                                                            </span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card " >
                                                <span className='StartIconTest'>
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />

                                                </span>
                                                <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                                <div className="card-body">
                                                    <div className="imageCardSec">
                                                        <div className="imageCardTest">
                                                            <div className="img">
                                                                <img src={image} alt="..." />
                                                            </div>
                                                            <div className="infoImgTest">
                                                                <p className='clientName'> Mohin khan</p>
                                                                <span className='ClientDo'>Web developer</span>
                                                            </div>
                                                        </div>
                                                        <div className="iconRight">
                                                            <span className='iconRiQuo'>
                                                                <PiQuotesBold size={35} className='piQuote' />

                                                            </span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="card-wrapper ">

                                            <div className="card " >
                                                <span className='StartIconTest'>
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />

                                                </span>
                                                <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                                <div className="card-body">
                                                    <div className="imageCardSec">
                                                        <div className="imageCardTest">
                                                            <div className="img">
                                                                <img src={image} alt="..." />
                                                            </div>
                                                            <div className="infoImgTest">
                                                                <p className='clientName'> Ani Kris</p>
                                                                <span className='ClientDo'>Web developer</span>
                                                            </div>
                                                        </div>
                                                        <div className="iconRight">
                                                            <span className='iconRiQuo'>
                                                                <PiQuotesBold size={35} className='piQuote' />

                                                            </span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card " >
                                                <span className='StartIconTest'>
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />

                                                </span>
                                                <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                                <div className="card-body">
                                                    <div className="imageCardSec">
                                                        <div className="imageCardTest">
                                                            <div className="img">
                                                                <img src={image} alt="..." />
                                                            </div>
                                                            <div className="infoImgTest">
                                                                <p className='clientName'> Junior Sijan</p>
                                                                <span className='ClientDo'>Web developer</span>
                                                            </div>
                                                        </div>
                                                        <div className="iconRight">
                                                            <span className='iconRiQuo'>
                                                                <PiQuotesBold size={35} className='piQuote' />

                                                            </span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="carousel-item">
                                        <div className="card-wrapper">

                                            <div className="card " >
                                                <span className='StartIconTest'>
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />

                                                </span>
                                                <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                                <div className="card-body">
                                                    <div className="imageCardSec">
                                                        <div className="imageCardTest">
                                                            <div className="img">
                                                                <img src={image} alt="..." />
                                                            </div>
                                                            <div className="infoImgTest">
                                                                <p className='clientName'> Rahul Bikas</p>
                                                                <span className='ClientDo'>Web developer</span>
                                                            </div>
                                                        </div>
                                                        <div className="iconRight">
                                                            <span className='iconRiQuo'>
                                                                <PiQuotesBold size={35} className='piQuote' />

                                                            </span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card " >
                                                <span className='StartIconTest'>
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />
                                                    <AiFillStar color='yellow' size={25} className='starIcon' />

                                                </span>
                                                <p className='clientDes'>Lorem ipsum dolor sit amet consectetur adipisicing elit. At debitis eius, asperiores earum quo fuga doloremque totam nostrum voluptatum autem.</p>
                                                <div className="card-body">
                                                    <div className="imageCardSec">
                                                        <div className="imageCardTest">
                                                            <div className="img">
                                                                <img src={image} alt="..." />
                                                            </div>
                                                            <div className="infoImgTest">
                                                                <p className='clientName'> Anna Marko</p>
                                                                <span className='ClientDo'>Web developer</span>
                                                            </div>
                                                        </div>
                                                        <div className="iconRight">
                                                            <span className='iconRiQuo'>
                                                                <PiQuotesBold size={35} className='piQuote' />

                                                            </span>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true" id='id'></span>
                                            <span class="visually-hidden">Previous</span>
                                        </button>
                                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true" id='id2'></span>
                                            <span class="visually-hidden">Next</span>
                                        </button>

                                    {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" id='btnId'>
                                    <span  class="carousel-control-prev-icon" aria-hidden="true" id='id'></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" id='two'>
                                    <span class="carousel-control-next-icon" aria-hidden="true" id='id2'></span>
                                    <span class="visually-hidden">Next</span>
                                </button> */}




                                </div>
                               


                            </div>
                        </div>



                    </div>


                </div>
            </div>

        </div>
    );
};

export default ClientSay;
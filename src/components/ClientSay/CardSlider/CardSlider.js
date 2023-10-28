import React from 'react';
import './CardSlider.css'
import image from '../../../assets/image/Background/2.jpg'

const CardSlider = () => {
    return (
        <div className='section'>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card  "style={{width: 180}}>
                            <img src={image} alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>

                                </div>
                        </div><div class="card" style={{width: 18}}>
                            <img src={image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>

                                </div>
                        </div>
                        <div class="card" style={{width: 18}}>
                            <img src={image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>

                                </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card-wrapper container-sm d-flex   justify-content-around">
                        <div class="card  " style={{width: 18}}>
                            <img src={image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>

                                </div>
                        </div><div class="card" style={{width: 18}}>
                            <img src={image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>

                                </div>
                        </div>
                        <div class="card" style={{width: 18}}>
                            <img src={image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>

                                </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card-wrapper container-sm d-flex  justify-content-around">
                        <div class="card " style={{width: 18}}>
                            <img src={image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>

                                </div>
                        </div>
                        <div class="card" style={{width: 18}}>
                            <img src={image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>

                                </div>
                        </div>
                        <div class="card" style={{width: 18}}>
                            <img src={image} class="card-img-top" alt="..."/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>

                                </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    );
};

export default CardSlider;

import React from 'react';
import './HairChart.css';

const HairChart = () => {
    return (
        <div className='hairChart'>
            <div className="hairChartBody">
                <div className="chartContent">
                    <div className="color">
                        <h1 className='colorTitle'>color</h1>
                        <div className="colorContents">
                            <div className="nameColor">
                                <h3 className='nameCTitle'>single process</h3>
                            </div>
                            <div className="chartHr">
                                <hr className='chartHr1' />
                            </div>
                            <div className="colorPrice">
                                <p className='colorPTitle'>tk 8000</p>
                            </div>
                        </div>
                        <div className="colorContents">
                            <div className="nameColor">
                                <h3 className='nameCTitle'>NECTAYA</h3>
                            </div>
                            <div className="chartHr">
                                <hr className='chartHr2' />
                            </div>
                            <div className="colorPrice">
                                <p className='colorPTitle'>tk 7000</p>
                            </div>
                        </div>
                        <div className="natural">
                            <span className='naturalTitle'>All Natural</span>
                        </div>
                        <div className="colorContents">
                            <div className="nameColor">
                                <h3 className='nameCTitle'>NECTAYA</h3>
                            </div>
                            <div className="chartHr">
                                <hr className='chartHr2' />
                            </div>
                            <div className="colorPrice">
                                <p className='colorPTitle'>tk 7000</p>
                            </div>
                        </div>
                        <div className="colorContents">
                            <div className="nameColor">
                                <h3 className='nameCTitle'>NECTAYA</h3>
                            </div>
                            <div className="chartHr">
                                <hr className='chartHr2' />
                            </div>
                            <div className="colorPrice">
                                <p className='colorPTitle'>tk 7000</p>
                            </div>
                        </div>



                    </div>
                    <div className="highlight">
                        <h1 className='colorTitle'>highlight</h1>
                        <div className="colorContents">
                            <div className="nameColor">
                                <h3 className='nameCTitle'>single process</h3>
                            </div>
                            <div className="chartHr">
                                <hr className='chartHr1' />
                            </div>
                            <div className="colorPrice">
                                <p className='colorPTitle'>tk 8000</p>
                            </div>
                        </div>

                    </div>


                </div>

            </div>

        </div>
    );
};

export default HairChart;
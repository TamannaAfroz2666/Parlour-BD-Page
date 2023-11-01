import React, { useState } from 'react';
import './Coloring.css';
import data from '../../../../Utilies/showAll.json';

const Coloring = () => {
    const [color, setColor] = useState(data.coloring);
    console.log('color section is ready', color);

    // show more button work 
    const [showMore, setShowMore] = useState(false);

    const imageHandle = () => {
        console.log('see more pic');
        setShowMore(true);
    }

    return (
        <div className='coloringHead'>
            <div className="coloringBody">
                <div className="bodyAllPort">

                    {
                        color?.slice(0, 9).map((dataInfo) => {
                            return (

                                <div className="imgAll">
                                    <img src={dataInfo.image} alt="" className="image" />
                                    <div className="overlay">
                                        <div className="text">
                                            <h1 className='hell'>{dataInfo.name}</h1>
                                            <h1 className='hell'>{dataInfo.description}</h1>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                    {/* SHOW MORE image  */}
                    {
                        showMore && color?.slice(0, 2).map((dataInfo) => {
                            return (

                                <div className="imgAll">
                                    <img src={dataInfo.image} alt="" className="image" />
                                    <div className="overlay">
                                        <div className="text">
                                            <h1 className='hell'>{dataInfo.name}</h1>
                                            <h1 className='hell'>{dataInfo.description}</h1>
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }



                  

                </div>
                <div className="areaBtn1">
                        <button className='areaButton' onClick={imageHandle}>
                            Load more
                        </button>
                    </div>



            </div>

        </div>
    );
};

export default Coloring;
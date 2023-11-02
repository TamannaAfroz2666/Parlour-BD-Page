import React, { useState } from 'react';
import './Coloring.css';
import data from '../../../../Utilies/showAll.json';
import { motion } from 'framer-motion';

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
                <motion.div
                initial={{ opacity: 0, x: '200vh' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                 className="bodyAllPort"
                >

                    {
                        color?.slice(0, 9).map((dataInfo) => {
                            return (

                                <div className="imgAll">
                                    <img src={dataInfo.image} alt="" className="image" />
                                    <div className="overlay">
                                        <div className="text">
                                            
                                            <p className=' textTitle'>{dataInfo.title}</p>
                                            <p className='textDes'>{dataInfo.name}
                                            </p>
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
                                        <p className='textTitle'>{dataInfo.title}
                                        </p>
                                            <p className='textDes'>{dataInfo.name}
                                            </p>
                                           
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                </motion.div>
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
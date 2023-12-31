import React, { useState } from 'react';
import './ShowAll.css';
// import image1 from '../../../../assets/image/Pictures/Blogs/23.jpg'
// import image2 from '../../../../assets/image/Pictures/Blogs/HotSone.jpg';
import data from '../../../../Utilies/showAll.json';
import { motion } from 'framer-motion';

const ShowAll = () => {
    const [hairStyle, setHairStyle] = useState(data.hairStyle);
    console.log('hair style', hairStyle);
    const [color, setColor] = useState(data.coloring);
    console.log('hair color  :', color);
    const [products, setProducts] = useState(data.hairProducts);
    console.log('hair products', products);

    const allData = color.concat(hairStyle, products);
    console.log('all data showing', allData);

    const [showAllData, setShowAllData] = useState(allData);

    // show more button work 
    const [showMore, setShowMore] = useState(false);

    const imageHandle = () => {
        console.log('see more pic');
        setShowMore(true);
    }
    // const items = showMore ? showAllData : showAllData.slice(0, 5);


    return (
        <div className='showAllPort'>
            <div className="headAllPort">
                <motion.div className="bodyAllPort"
                initial={{ opacity: 0, x: '100vh' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                
                >

                    {
                        showAllData?.slice(0, 9).map((dataInfo) => {
                            return (

                                <div className="imgAll">
                                    <img src={dataInfo.image} alt="" className="image" />
                                    <div className="overlay">
                                        <div className="text">
                                        <p className='textTitle'>{dataInfo.title}</p>
                                            <p className='textDes'>{dataInfo.name}</p>
                                           
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                    {/* SHOW MORE image  */}
                    {
                        showMore && showAllData?.slice(0, 2).map((dataInfo) => {
                            return (

                                <div className="imgAll">
                                    <img src={dataInfo.image} alt="" className="image" />
                                    <div className="overlay">
                                        <div className="text">
                                        <p className=' textTitle'>{dataInfo.title}</p>
                                            <p className='textDes'>{dataInfo.name}</p>
                                            
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }





                </motion.div>
                <div className="areaBtn">
                    <button className='areaButton' onClick={imageHandle}>
                        Load more
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ShowAll;
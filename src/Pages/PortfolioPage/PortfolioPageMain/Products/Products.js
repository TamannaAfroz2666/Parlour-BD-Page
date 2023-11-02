import React, { useState } from 'react';
import './Products.css';
import data from '../../../../Utilies/showAll.json';
import { motion } from 'framer-motion';

const Products = () => {

    const [products, setProducts] = useState(data.hairProducts);
    console.log('color section is ready', products);

    // show more button work 
    const [showMore, setShowMore] = useState(false);

    const imageHandle = () => {
        console.log('see more pic');
        setShowMore(true);
    }
    return (
        <div className='productsHead'>
            <div className="productsBody">
                <motion.div 
                initial={{ opacity: 0, x: '200vh' }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="bodyAllPort"
                >
                    {
                        products?.slice(0, 9).map((product) => {
                            return (

                                <motion.div
                                    className="imgAll"
                                >
                                    <img src={product.image} alt="" className="image" />
                                    <div className="overlay">
                                        <div className="text">
                                            <p className=' textTitle'>{product.title}</p>

                                            <p className='textDes'>{product.name}</p>

                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }

                    {/* SHOW MORE image  */}
                    {
                        showMore && products?.slice(0, 2).map((product) => {
                            return (

                                <div className="imgAll">
                                    <img src={product.image} alt="" className="image" />
                                    <div className="overlay">
                                        <div className="text">
                                            <p className=' textTitle'>{product.title}</p>
                                            <p className='textDes'>{product.name}</p>

                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }

                    <div className="areaBtn1">
                        <button className='areaButton' onClick={imageHandle}>
                            Load more
                        </button>
                    </div>

                </motion.div>

            </div>

        </div>
    );
};

export default Products;
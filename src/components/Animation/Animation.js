import React, { useState } from 'react';
import './Animation.css';
import { motion, spring, useScroll } from 'framer-motion';

const Animation = () => {
    const { scrollYProgress } = useScroll()


    const [showCard, setShowCard] = useState(false)
    return (
        <>

            < motion.div className="scrollAdd"
                style={{
                    scaleX: scrollYProgress
                }}

            >
            </motion.div>

            <div className="textMotion">
                <motion.h1
                    className='animationHeader'
                    initial={{ y: -1000 }}
                    animate={{ y: [0, -20, 0] }}
                    transition={{
                        duration: 2,
                        delay: 1
                    }}
                    whileHover={{ scale: 0.9, opacity: 0.2 }}
                // transformTemplate={template}
                // whileTap={{ scale: 0.9 }}
                >
                    animation
                </motion.h1>

            </div>
            <div className="tapAndHover">
                <motion.div className="interPage"
                    whileHover={{
                        scale: 1.1
                    }}
                    transition={{
                        duration: .5,
                        type: spring
                    }}
                    layout
                    onClick={() => setShowCard(!showCard)}


                >
                    <motion.h3>Hover & Click</motion.h3>
                    {showCard && (
                        <motion.p className='sortP'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, sint.
                        </motion.p>
                    )}

                </motion.div>

            </div>
            <div className="severalInfo">
                useScroll
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>
            <h1>the txe</h1>

            </div>
           



        </>
    );
};

export default Animation;
import React from 'react';
import { motion } from 'framer-motion';

const PortFolio = () => {
    return (
        <div>
             <motion.div className='ShowTheDiv'
        initial={{
            opacity:0,
            scale: 0,
            x: 100

        }}
        whileInView={{
            opacity: 1,
            scale: 1,
            x: 0

        }}
        transition={{
            duration: 0.6
        }}
        // viewport={{once: true}}
        
        >

        </motion.div>
            
        </div>
    );
};

export default PortFolio;
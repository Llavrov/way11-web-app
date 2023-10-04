'use client';

import smallImg from './../../../public/svg/mainScreenSmall.svg';
import Background01 from './background';
import { motion } from 'framer-motion';
import Background02 from './background02';

const svgVariants = {
    hidden: { y: '50vh', x: '0vw', opacity: 0, },
    visible: {
        y: '-80vh', x: '-40vw', opacity: 1,
        transition: { duration: 3 }
    },
}
const svgVariantsBig = {
    visible: {
        y: ['-45vh', '-35vh'], x: '20vw', scale: [1, 1], rotate: 0,
        transition: { duration: 3 },
    },
    hidden: { y: '20vh', x: '-150vw', scale: 1, rotate: -180 },
};

export default function Main() {
    return (
        <div className="flex min-h-screen flex-col items-center w-full h-full overflow-hidden justify-between">
                <motion.svg initial='hidden' variants={svgVariantsBig} animate='visible' width="1438" height="1324" viewBox="0 0 1438 1324" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Background01 />
                </motion.svg>
                <motion.svg className='w-full' initial='hidden' variants={svgVariants} animate='visible' width="218" height="609" viewBox="0 0 218 609" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Background02 />
                </motion.svg>
        </div>
    )
}

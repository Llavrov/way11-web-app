'use strict'

import Tag from "@/components/tag";
import {motion} from "framer-motion";
import Background01 from "@/pages/main/background";
import Background02 from "@/pages/main/background02";

const LIST_OF_TAGS = ['inst', 'youtube', 'tenchat', 'tg'];

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

export default function PreviewBlock() {
    return (
        <div className="w-full flex h-screen relative flex-col items-center justify-end p-[50px] box-border">
            <div className="w-full flex justify-between h-[210px]">
                <div className="max-w-[560px]">
                    <h1 className="text-white text-heading-l">
                        Путь в тысячу миль начинается с одного шага
                    </h1>
                </div>
                <div className="flex justify-between flex-col">
                    <div className="flex relative gap-[10px]">
                        {
                            LIST_OF_TAGS.map((title) => (
                                <Tag title={title} key={title} />
                            ))
                        }
                    </div>
                    <p className="text-20 max-w-[400px]">
                        Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса. В основе наших проектов лежат идеи, основанные на аналитике, креативе и технологиях.
                    </p>
                </div>
            </div>

            <motion.div style={{ position: 'absolute', top: 0, right: 0, zIndex: -1 }}>
                <motion.svg
                    initial='hidden'
                    variants={svgVariantsBig}
                    animate='visible'
                    width="1438"
                    height="1324"
                    viewBox="0 0 1438 1324"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Background01 />
                </motion.svg>
                <motion.svg
                    className='w-full'
                    initial='hidden'
                    variants={svgVariants}
                    animate='visible'
                    width="218"
                    height="609"
                    viewBox="0 0 218 609"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Background02 />
                </motion.svg>
            </motion.div>
        </div>
    )
}

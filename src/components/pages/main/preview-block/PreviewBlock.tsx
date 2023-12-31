'use strict'

import { motion } from "framer-motion";
import Background01 from "@/components/pages/main/preview-block/background";
import Background02 from "@/components/pages/main/preview-block/background02";
import Tag from "@/components/common/tags/tag";
import Background03 from "./backgroundForPhone";
import { useState, useEffect } from "react";
import {SOCIAL} from "@/components/common/footer/Footer";
import Link from "next/link";

const MOBILE_SCREEN_SIZE = 1024;

const backgroundVariants = {
    hidden: {
        opacity: 0
    },
    animationOne: {
        opacity: 1,
        x: [400, 200, -400, -200, 400],
        y: [-200, -500, -400, 0, -200],
    },
    animationTwo: {
        opacity: 1,
        x: [0, 400, 700, 700, 200, 0],
        y: [-1000, -800, -1000, -1500, -1600, -1000],
    }
}
const backgroundVariantsStatic = {
    hidden: {
        opacity: 0
    },
    animationOne: {
        opacity: 1,
        x: 400,
        y: -200,
    },
    animationTwo: {
        opacity: 1,
        x: 0,
        y: -1000,
    }
}


export default function PreviewBlock() {

    const [wWidth, setWidth] = useState<number>(1000)
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div id="#preview" className="w-full h-screen overflow-hidden flex bg-black relative flex-col items-center justify-end p-[50px] box-border lg:p-[10px] lg:pb-[60px]">
            <div className="w-full flex justify-between h-[210px] absolute z-10 px-[50px] box-border lg:justify-end lg:flex-col lg:px-[20px] lg:gap-6 lg:h-[400px]">
                <div className="max-w-[840px] lg:w-full">
                    <h1 className="text-white text-heading-l-bold font-sans lg:text-3xl lg:leading-9">
                        Путь в тысячу миль начинается с выбора надёжного подрядчика
                    </h1>
                </div>

                <div className="flex justify-between flex-col lg:w-full">
                    <div className="flex relative gap-[10px]">
                        {
                            SOCIAL.map(({ link, title }) => (
                                <Link key={title} href={link}>
                                    <Tag title={title} />
                                </Link>
                            ))
                        }
                    </div>
                    <p className="text-20 max-w-[400px] lg:text-[15px] lg:mt-3 lg:font-medium">
                        Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса. В основе наших проектов лежат идеи, основанные на аналитике, креативе и технологиях.
                    </p>
                </div>
            </div>


            <motion.div className="hidden lg:block" style={{ position: 'absolute', top: -100, right: -200, zIndex: 1 }}>
                <Background03 />
            </motion.div> 

            <motion.div className="block lg:hidden" style={{ position: 'absolute', top: 0, right: 0, zIndex: 1 }}>
                <motion.svg
                    variants={ wWidth <= MOBILE_SCREEN_SIZE ? backgroundVariantsStatic : backgroundVariants}
                    transition={{
                        repeat: Infinity,
                        duration: 60,
                        ease: 'easeInOut',
                        opacity: { duration: 5 },
                    }}
                    initial='hidden'
                    animate='animationOne'
                    width="1438"
                    height="1324"
                    viewBox="0 0 1438 1324"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <Background01 />
                </motion.svg>
                <motion.svg
                    variants={ wWidth <= MOBILE_SCREEN_SIZE ? backgroundVariantsStatic : backgroundVariants}
                    transition={{
                        repeat: Infinity,
                        duration: 60,
                        ease: 'easeInOut',
                        opacity: { duration: 5 },
                    }}
                    initial='hidden'
                    animate='animationTwo'
                    width="100%"
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

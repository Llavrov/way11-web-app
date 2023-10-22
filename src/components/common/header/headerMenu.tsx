'use client'

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/buttons/button";
import { SOCIAL } from "../footer/Footer";
import { STATS } from "../footer/Footer";
import EmptyButton from "../buttons/emptyButton";
import { motion } from "framer-motion";
import {useEffect} from "react";

const headerVariants = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: '0vw',
        transition: {
            duration: 1,
        }
    },
}

export default function HeaderMenu() {
    return (
        <motion.div
            style={{
                overscrollBehavior: 'contain',
            }}
            className="w-full h-full min-h-screen px-5 pt-[90px] flex flex-col justify-between fixed z-[998] bg-black"
            variants={headerVariants}
            initial='hidden'
            animate='visible'
            exit={{ x: -300, opacity: 0 }}
        >
            <div className="flex flex-col gap-[30px] pt-[50px] justify-between">
                <nav className="flex justify-start items-start leading-[60px] flex-col text-[64px] font-medium">
                    <Link href={'/cases'}>кейсы</Link>
                    <Link href={'/about-us'}>о нас</Link>
                </nav>

                <div>
                    <Link href={'/mailto:mail@studioway11.com'}>mail@studioway11.com</Link>
                </div>

                <span >
                    <h2 className="text-[#878787]">мы в соцсетях</h2>
                    <ul className="flex gap-2 flex-wrap w-full py-3 md:px-0">
                        {
                            SOCIAL.map(({ link, title }) => (
                                <li key={title}>
                                    <Link className="flex rounded-[100px] py-[10px] px-[20px] box-border text-18 text-white border-solid border-white border" href={link}>
                                        {title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </span>
                <span>
                    <h2 className="text-[#878787]">наши статьи</h2>
                    <ul className="flex gap-2 flex-wrap flex-row w-100 py-3 md:px-0">
                        {
                            STATS.map(({ link, title }) => (
                                <li key={title}>
                                    <Link className="flex rounded-[100px] py-[10px] px-[20px] box-border text-18 text-white border-solid border-white border" href={link}>
                                        {title}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </span>
            </div>

            <Link href={'/#contact-us'} className="h-[200px] flex justify-center items-center">
                <EmptyButton title="оставить заявку" onClick={() => {}} />
            </Link>
        </motion.div>
    )
}

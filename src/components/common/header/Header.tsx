'use client'

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/buttons/button";
import { useState } from "react";
import HeaderMenu from "./headerMenu";
import { motion, useAnimation } from "framer-motion";

const TABS = [
    {
        link: '/cases',
        title: 'кейсы',
    },
    {
        link: '/about-us',
        title: 'о нас',
    }
]

const path01Variants = {
    open: { d: 'M3.06061 2.99999L21.0606 21' },
    closed: { d: 'M0 9.5L24 9.5' },
}
const path02Variants = {
    open: { d: 'M3.00006 21.0607L21 3.06064' },
    closed: { d: 'M0 14.5L24 14.5' },
}
const path03Variants = {
    open: { d: 'M0 0L0 0', opacity: 0 },
    closed: { d: 'M0 19.5L24 19.5', opacity: 1 },
}

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const path01Controls = useAnimation();
    const path02Controls = useAnimation();
    const path03Controls = useAnimation();

    const changeMenuState = async (e: boolean) => {
        setOpen(!isOpen);
        setOpenMenu(e)

        if (!isOpen) {
            path01Controls.start(path01Variants.open);
            path02Controls.start(path02Variants.open);
            path03Controls.start(path03Variants.open);
        } else {
            path01Controls.start(path01Variants.closed);
            path02Controls.start(path02Variants.closed);
            path03Controls.start(path03Variants.closed);
        }
    };

    return (
        <>
            <header className={`w-full h-[140px] flex flex-row justify-between fixed ${openMenu ? 'z-[999]' : ''} z-10 lg:h-[90px]`}>
                <div className="relative z-[999] flex gap-10"
                >
                    <Link href={'/'} className="w-[156px] h-full p-5 pl-[50px] pt-[35px] box-border bg-white rounded-br-[20px] lg:pl-[20px] lg:pt-[20px] lg:w-[90px]">
                        <Image
                            width={84}
                            height={86}
                            src={'/logotype.svg'}
                            alt={'logotype way11'}
                        />
                    </Link>
                    <nav className="flex items-center h-[110px] block lg:hidden">
                        <a href="mailto:mail@studioway11.com" className="text-20 text-white">
                            mail@studioway11.com
                        </a>
                    </nav>
                </div>

                <div className="flex items-center gap-6 relative h-[110px] pr-[50px] lg:hidden">
                    {TABS.map(({ link, title }) => (
                        <nav key={title}>
                            <Link href={link} className="text-20 text-white">
                                {title}
                            </Link>
                        </nav>
                    ))}
                    <Button title="оставить заявку" onClick={(): void => undefined} />
                </div>

                <button
                    onClick={() => changeMenuState(!openMenu)}
                    className="hidden h-[90px] flex justify-center items-center pr-[30px] lg:flex">

                    <svg width='39' height='39' viewBox='0 0 24 24'>
                        <motion.path
                            {...path01Variants.closed}
                            animate={path01Controls}
                            transition={{ duration: 0.4 }}
                            stroke='#FFFFFF'
                            strokeWidth='2'
                        />
                        <motion.path
                            {...path02Variants.closed}
                            animate={path02Controls}
                            transition={{ duration: 0.4 }}
                            stroke='#FFFFFF'
                            strokeWidth='2'
                        />
                        <motion.path
                            {...path03Variants.closed}
                            animate={path03Controls}
                            transition={{ duration: 0.4 }}
                            stroke='#FFFFFF'
                            strokeWidth='2'
                        />
                    </svg>

                </button>
            </header>

            <>
                {
                    openMenu
                        ? <HeaderMenu />
                        : null
                }
            </>
        </>
    )
}

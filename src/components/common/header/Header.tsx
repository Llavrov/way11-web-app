'use client'

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/buttons/button";
import {useEffect, useState} from "react";
import HeaderMenu from "./headerMenu";
import { motion, useAnimation, useScroll } from "framer-motion";
import {bold} from "next/dist/lib/picocolors";

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

export const HEADER_HEIGHT = 140;
export const ONE_SECOND = 300;

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [isOpen, setOpen] = useState(false);
    const [scrollTop, setScrollTop] = useState({
        lastScroll: 0,
        isScrollTop: true,
        lastUpdate: 0
    });
    const [opacity, setOpacity] = useState(false);
    const [position, setPosition] = useState(false);
    const path01Controls = useAnimation();
    const path02Controls = useAnimation();
    const path03Controls = useAnimation();

    const { scrollY } = useScroll();

    useEffect(() => {
        const updateOpacity = () => {
            if (window && scrollY.get() >= HEADER_HEIGHT) {
                setOpacity(true);
                setPosition(true);
            } else {
                setOpacity(false);
                setPosition(false);
            }

            if (isOpen || window && scrollY.get() <= HEADER_HEIGHT || (scrollTop.lastScroll >= scrollY.get() && scrollTop.lastUpdate > ONE_SECOND)) {
                setScrollTop({
                    lastScroll: scrollY.get(),
                    isScrollTop: true,
                    lastUpdate: Date.now() - scrollTop.lastUpdate,
                })
            } else {
                setScrollTop({
                    lastScroll: scrollY.get(),
                    isScrollTop: false,
                    lastUpdate: Date.now() - scrollTop.lastUpdate,
                })
            }
        };

        scrollY.on('change', updateOpacity);
    }, [scrollY, scrollTop]);

    const changeMenuState = async (e: boolean) => {
        setOpen(!isOpen);
        setOpenMenu(e);

        if (!isOpen) {
            setOpacity(false);
            path01Controls.start(path01Variants.open);
            path02Controls.start(path02Variants.open);
            path03Controls.start(path03Variants.open);
        } else {
            setOpacity(true);
            path01Controls.start(path01Variants.closed);
            path02Controls.start(path02Variants.closed);
            path03Controls.start(path03Variants.closed);
        }
    };

    return (
        <>
            <header
                style={{
                    transition: '0.5s',
                    top: (scrollTop.isScrollTop) ? '0' : '-140px',
                    position: position ? 'fixed' : 'absolute'
                }}
                className={`w-full h-[140px] flex flex-row justify-between fixed z-[999] ${openMenu ? 'z-[999]' : ''} lg:h-[96px]`}>
                <div className="relative z-[999] flex gap-10"
                >
                    <Link href={'/'} className="w-[156px] h-full p-5 pl-[50px] pt-[35px] box-border bg-white rounded-br-[20px] lg:pl-[20px] lg:pt-[20px] lg:w-[96px]">
                        <Image
                            width={84}
                            height={86}
                            src={'/logotype.svg'}
                            alt={'logotype way11'}
                        />
                    </Link>
                    <nav className="flex items-center h-[100px] lg:hidden">
                        <a href="mailto:mail@studioway11.com" className="text-20 text-white">
                            mail@studioway11.com
                        </a>
                    </nav>
                </div>

                <div className="flex items-center justify-end gap-6 relative h-[100px] w-full pr-[50px] lg:hidden">
                    <div className="flex items-center gap-6 absolute z-[998] ">
                        {TABS.map(({ link, title }) => (
                            <nav key={title}>
                                <Link href={link} className="text-20 text-white">
                                    {title}
                                </Link>
                            </nav>
                        ))}
                        <Link href={'/#contact-us'}>
                            <Button title="оставить заявку" onClick={(): void => {}} />
                        </Link>
                    </div>
                </div>

                <div
                    style={{ opacity: opacity ? 1 : 0 }}
                    className="w-full h-[96px] absolute z-[990] bg-header transition"
                />

                <button
                    onClick={() => changeMenuState(!openMenu)}
                    className="hidden h-[96px] justify-center items-center pr-[30px] lg:flex absolute right-5 z-[998]">

                    <svg width='39' height='39' viewBox='0 0 24 24'>
                        <motion.path
                            {...path01Variants.closed}
                            animate={path01Controls}
                            transition={{ duration: 0.7 }}
                            stroke='#FFFFFF'
                            strokeWidth='2'
                        />
                        <motion.path
                            {...path02Variants.closed}
                            animate={path02Controls}
                            transition={{ duration: 0.7 }}
                            stroke='#FFFFFF'
                            strokeWidth='2'
                        />
                        <motion.path
                            {...path03Variants.closed}
                            animate={path03Controls}
                            transition={{ duration: 0.7 }}
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

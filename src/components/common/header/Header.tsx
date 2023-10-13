'use client'

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/buttons/button";
import { useState } from "react";
import HeaderMenu from "./headerMenu";
import { motion } from "framer-motion";

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

const fadeIdVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 2,
            type: "spring",
            stiffness: 50
        }
    },
    animationOne: {
        opacity: 1,
        transition: {
            duration: 2,
            type: "spring",
            stiffness: 50
        }
    },
    exit: {
        opacity: 0
    }
}

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const changeMenuState = (e: boolean) => {
        setOpenMenu(e)
    }

    return (
        <>
            <header className={`w-full h-[140px] flex flex-row justify-between fixed ${openMenu ? 'bg-[#000] z-[999]' : ''} z-[10] lg:h-[90px]`}>
                <div className="relative flex gap-10">
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
                    {
                        openMenu
                            ? <Image
                                width={40}
                                height={20}
                                src='/svg/closeMenu.svg'
                                alt="menu" />
                            : <Image
                                width={40}
                                height={20}
                                src='/svg/menuButton.svg'
                                alt="menu" />
                    }
                </button>
            </header>

            <>{
                openMenu
                    ? <HeaderMenu />
                    : <></>
            }</>
        </>
    )
}

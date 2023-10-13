'use client'

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/buttons/button";

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

export default function Header() {
    return (
        <header className="w-full h-[140px] flex flex-row justify-between fixed z-10 lg:h-[90px]">
            <div className="relative flex gap-10">
                <Link href={'/'} className="w-[156px] h-full p-5 pl-[50px] pt-[35px] box-border bg-white rounded-br-[20px] lg:pl-[20px] lg:pt-[20px] lg:w-[90px]">
                    <Image width={84} height={86} src={'/logotype.svg'} alt={'logotype way11'} />
                </Link>
                <nav className="flex items-center h-[110px] block lg:hidden">
                    <a href="mailto:mail@studioway11.com" className="text-20 text-white">mail@studioway11.com</a>
                </nav>
            </div>

            <div className="flex items-center gap-6 relative h-[110px] pr-[50px] lg:hidden">
                {TABS.map(({link, title}) => (
                    <nav key={title}>
                        <Link href={link} className="text-20 text-white">
                            {title}
                        </Link>
                    </nav>
                ))}
                <Button title="оставить заявку" onClick={(): void => undefined} />
            </div>

            <Link href={'/'} className="hidden h-[90px] flex justify-center items-center pr-[30px] lg:flex">
                <Image width={40} height={20} src='/svg/menuButton.svg' alt="menu" />
            </Link>
        </header>
    )
}

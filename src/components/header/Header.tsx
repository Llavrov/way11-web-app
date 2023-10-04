'use client'

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/button";

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
        <header className="w-full h-[140px] flex flex-row justify-between relative">
            <div className="relative flex gap-10">
                <Link href={'/'} className="w-[156px] h-full p-5 pl-[50px] pt-[35px] box-border bg-white rounded-br-[20px]">
                    <Image width={84} height={86} src={'/logotype.svg'} alt={'logotype way11'} />
                </Link>
                <nav className="flex items-center h-[110px]">
                    <a href="mailto:mail@studioway11.com" className="text-20">mail@studioway11.com</a>
                </nav>
            </div>

            <div className="flex items-center gap-6 relative h-[110px] pr-[50px]">
                {TABS.map(({link, title}) => (
                    <nav key={title}>
                        <Link href={link} className="text-20">
                            {title}
                        </Link>
                    </nav>
                ))}

                <Button title="оставить заявку" onClick={(): void => undefined} />
            </div>
        </header>
    )
}

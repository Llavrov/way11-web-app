'use client'

import Image from "next/image";
import Link from "next/link";

type TSocial = {
    link: string
    title: string
}

const SOCIAL: TSocial[] = [
    {
        link: '/',
        title: 'youtube',
    },
    {
        link: '/',
        title: 'tg',
    },
    {
        link: '/',
        title: 'tenchat',
    },
    {
        link: '/',
        title: 'dribbble',
    },
    {
        link: '/',
        title: 'inst',
    },
    {
        link: '/',
        title: 'vk',
    },
]

const STATS: TSocial[] = [
    {
        title: 'dzen',
        link: '/'
    },
    {
        title: 'vc/ru',
        link: '/'
    }
]

export default function Footer() {
    return (
        <footer className="px-10 pb-3 h-[350px] md:h-auto gap-5 flex md:flex-col justify-center md:px-3 md:gap-3">
            <div className="w-[30%] px-[80px] lg:px-[10px] md:w-full flex justify-center items-center bg-[#252525] rounded-[30px]">
                <Image width={290} className="lg:w-[180px] lg:h-[180px]" height={290} src={'/svg/logoFooter.svg'} alt={'logotype way11'} />
            </div>

            <nav className="w-[70%] lg:max-w-[750px] bg-[#252525] flex px-[80px] py-10 rounded-[30px] lg:p-5 md:flex-col md:gap-10 lg:w-full">
                <div className="w-[50%] md:w-full flex flex-col justify-between">
                    <span >
                        <h2 className="text-[#878787]">мы в соцсетях</h2>
                        <ul className="flex gap-2 flex-wrap w-100 py-3 md:px-0">
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
                
                <div className="w-[50%] md:w-full pl-5 lg:pl-0 flex flex-col justify-between">
                    <span className="text-20 flex gap-4 flex-col">
                        <Link href={'/'}>mail@studioway11.com</Link>
                        <Link href="tel:+79371234333">+7 (937) 123-43-33</Link>
                        <Link href={'/'}>Астрахань ул. Урицкого 7, офис 217</Link>
                    </span>

                    <span className="text-20 flex flex-col gap-[10px]">
                        <Link className='flex underline p-1' href={'/'}>Политика конфиденциальности</Link>
                        <h1 className="text-[#4D4D4D] text-18">© 2023 Digital-агентство Way11</h1>
                    </span>
                </div>
            </nav>
        </footer>
    )
}
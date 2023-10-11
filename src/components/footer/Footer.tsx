'use client'

import Image from "next/image";
import Tag from "../tag";
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
        <footer className="px-10 max-w-[1340px] pb-3 h-[350px] md:h-auto gap-5 flex md:flex-col justify-center md:px-3 md:gap-3 mt-10">
            <div className="max-w-[640px] px-[80px] lg:px-[10px] md:w-full flex justify-center items-center bg-[#252525] rounded-[30px]">
                <Image width={290} className="lg:w-[180px] lg:h-[180px]" height={290} src={'/svg/logoFooter.svg'} alt={'logotype way11'} />
            </div>

            <nav className="w-[750px] lg:max-w-[750px] bg-[#252525] flex p-10 rounded-[30px] lg:p-5 md:flex-col md:gap-10 lg:w-full">
                <div className="w-[50%] md:w-full flex flex-col justify-between">
                    <span >
                        <h2 className="text-[#878787]">мы в соцсетях</h2>
                        <ul className="flex gap-2 flex-wrap flex-row w-100 p-3 md:px-0">
                            {
                                SOCIAL.map(({ link, title }) => (
                                    <li >
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
                        <ul className="flex gap-2 flex-wrap flex-row w-100 p-3 md:px-0">
                            {
                                STATS.map(({ link, title }) => (
                                    <li >
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


{/* <div className="relative flex gap-10">
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
            </div> */}
'use client'

import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/buttons/button";
import { SOCIAL } from "../footer/Footer";
import { STATS } from "../footer/Footer";
import EmptyButton from "../buttons/emptyButton";

export default function HeaderMenu() {
    return (
        <div className="w-full h-[100vh] px-[20px] mt-[90px] flex flex-col justify-between fixed z-[999] bg-[#000]">
            <div className="flex flex-col gap-[30px] pt-[50px] justify-between">
                <nav className="flex justify-start items-start leading-[60px] flex-col text-[64px] font-medium">
                    <Link href={'/'}>кейсы</Link>
                    <Link href={'/'}>о нас</Link>
                </nav>

                <div>
                    <Link href={'/'}>mail@studioway11.com</Link>
                </div>

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

            <div className="h-[200px]">
                <EmptyButton title="оставить заявку" onClick={() => { }} />
            </div>
        </div>
    )
}

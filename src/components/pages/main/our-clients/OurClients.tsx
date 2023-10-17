'use client'

import Marquee from "react-fast-marquee";
import Image from "next/image";
import TagGray from "@/components/common/tags/tagGray";

const CLIENTS = [
    {
        src: '/our-clients/client-01.svg',
        width: 233,
        height: 32,
    },
    {
        src: '/our-clients/client-02.svg',
        width: 181,
        height: 83,
    },
    {
        src: '/our-clients/client-03.svg',
        width: 246,
        height: 30,
    },
    {
        src: '/our-clients/client-04.svg',
        width: 312,
        height: 143,
    },
    {
        src: '/our-clients/client-05.svg',
        width: 270,
        height: 111,
    },
];

export default function OurClients() {
    return (
        <div className="w-full flex relative flex-col box-border justify-center items-center gap-[50px]">
            <div className="flex gap-6 lg:gap-0 flex-col items-center">
                <div className="flex">
                    <TagGray title="с кем мы работали"/>
                </div>
                <p className="text-heading-l lg:text-3xl lg:leading-9">
                    наши клиенты
                </p>
            </div>

            <Marquee>
                {
                    CLIENTS.map(({src, width, height}) => (
                        <div key={src} className="mx-[45px]">
                            <Image className="lg:w-[110px] object-contain" src={src} alt={src} width={width} height={height} />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    );
}

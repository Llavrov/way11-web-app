'use client'

import Marquee from "react-fast-marquee";
import Image from "next/image";
import Tag from "@/components/tag";

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
            <div className="flex gap-6 flex-col items-center">
                <div className="flex">
                    <Tag title="с кем мы работали"/>
                </div>
                <p className="text-heading-l">
                    наши клиенты
                </p>
            </div>

            <Marquee>
                {
                    CLIENTS.map(({src, width, height}) => (
                        <div key={src} className="mx-[45px]">
                            <Image src={src} alt={src} width={width} height={height} />
                        </div>
                    ))
                }
            </Marquee>
        </div>
    );
}

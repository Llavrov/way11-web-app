'use client'

import Image from "next/image";
import Link from "next/link";

type TNewsCard = {
    title: string;
    image: string;
    link: string;
}

export default function CardAboutUs({title, image, link}: TNewsCard) {
    return (
        <Link href={link} className="lg:min-w-[262px]">
            <div className="flex flex-col relative justify-between h-[370px] w-full max-w-[262px] flg:w-[calc(20vw-17px)] flg:h-[40vh] flg:min-h-[400px] flg:max-w-[20vw] rounded-5 box-border bg-white">
                <Image className="absolute top-0 left-0 z-10 h-full object-cover w-full" style={{ mixBlendMode: 'overlay' }} src={'/overlay-min.svg'} alt={'3d model'} width={262} height={276} />
                <Image className="flg:w-full object-contain rounded-5 overflow-hidden" src={image} alt={title} width={262} height={276} />

                <div className="w-full p-[25px] box-border">
                    <p className="text-20 text-black flg:text-em-m">
                        {title}
                    </p>
                </div>
            </div>
        </Link>
    )
}

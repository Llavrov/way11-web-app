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
            <div className="flex flex-col justify-between h-[370px] w-full max-w-[262px] rounded-5 box-border bg-white">
                <Image className="object-contain rounded-5 overflow-hidden" src={image} alt={title} width={262} height={276} />

                <div className="w-full p-[25px] box-border">
                    <p className="text-20 text-black">
                        {title}
                    </p>
                </div>
            </div>
        </Link>
    )
}

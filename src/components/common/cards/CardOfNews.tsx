'use client'

import Image from "next/image";
import Link from "next/link";

type TNewsCard = {
    title: string;
    image: string;
    link: string;
}

export default function CardOfNews({title, image, link}: TNewsCard) {
    return (
        <Link href={link}>
            <div className="flex flex-col justify-between h-[463px] lg:h-[367px] w-[390px] min-w-[390px] max-w-[390px] lg:min-w-[262px] lg:max-w-[262px] rounded-5 box-border bg-white">
                <Image className="object-contain rounded-5 overflow-hidden" src={image} alt={title} width={390} height={350} />

                <div className="w-full p-[30px] box-border">
                    <p className="text-20 text-black">
                        {title}
                    </p>
                </div>
            </div>
        </Link>
    )
}

'use client'

import Image from "next/image";
import Link from "next/link";

type TNewsCard = {
    title: string;
    image: string;
    link: string;
    position: string;
}

export default function CardOfNews({title, image, link, position}: TNewsCard) {
    return (
        <Link href={link}>
            <div
                className="flex flex-col relative overflow-hidden justify-between h-[463px] lg:h-[367px] w-[390px] min-w-[390px] max-w-[390px] lg:min-w-[262px] lg:max-w-[262px] rounded-5 box-border bg-white"
                style={{
                    alignItems: position === 'object-right' ? 'end' : 'start',
                }}
            >
                <Image
                    className={`object-cover w-[calc(100%+100px)] ${position} h-full max-w-[390px] max-h-[390px] lg:max-h-[300px] lg:h-auto lg:w-[262px] lg:object-contain rounded-5 overflow-hidden`}
                    src={image}
                    alt={title}
                    width={390}
                    height={350}
                />

                <div className="flex justify-center items-center w-full p-auto px-6 lg:px-3 h-[80px] box-border">
                    <p className="text-20 text-black lg:text-text-sm-bold">
                        {title}
                    </p>
                </div>
            </div>
        </Link>
    )
}

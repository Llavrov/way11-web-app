'use client'

import Image from "next/image";
import TagWhite from "@/components/common/tags/tagWhite";
import { title } from "process";
import {useState} from "react";

type TCardCase = {
    tags: string[];
    photo: string;
    background: string;
    description: string;
};

export default function Epr({tags, photo, background, description}: TCardCase) {
    const [hover, setHover] = useState(false);

    return (
        <div
            onMouseOver={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="relative w-full h-[500px] max-w-[940px] flg:w-[65vw] flg:h-[60vh] flg:max-w-[calc(65vw-50px)] p-6 sm:p-2 sm:pt-4 rounded-10 overflow-hidden"
            style={{ backgroundColor: background }}
        >
            <div className="absolute flex gap-2 z-10">
                {
                    tags.map((title) => (
                        <TagWhite key={title} title={title} />
                    ))
                }
            </div>

            <div
                style={{ transition: '0.5s', opacity: hover ? 1 : 0 }}
                className="flex justify-end items-end absolute top-0 left-0 rounded-10 z-10 w-full h-full border border-solid border-white bg-card-hover"
            >
                <p className="text-white text-20 pb-7 pr-7 max-w-[372px]">
                    {description}
                </p>
            </div>

            <div className="w-full h-full relative flex justify-center items-center box-border">
                <Image className="absolute bottom-[-25px] rounded-5 aspect-video box-border object-cover flg:w-[80%] flg:h-[80%] rounded-t-5 lg:-right-6 lg:object-left lg:bottom-auto lg:w-[90%] lg:rounded-r-0" src={photo} width={658} height={375} alt={title} />
            </div>
        </div>
    )
}

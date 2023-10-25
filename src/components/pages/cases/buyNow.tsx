'use client'

import Image from "next/image";
import TagWhite from "@/components/common/tags/tagWhite";
import { title } from "process";
import {useState} from "react";
import Tag from "@/components/common/tags/tag";

type TCardCase = {
    tags: string[];
    photo: string;
    background: string;
    description: string;
};

export default function BuyNow({tags, photo, background, description}: TCardCase) {
    const [hover, setHover] = useState(false);

    return (
        <div className="flex flex-col gap-3">
            <div
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="relative w-full h-[500px] lg:max-h-[400px] max-w-[550px] flg:w-[40vw] flg:h-[60vh] flg:max-w-[calc(40vw-50px)] lg:max-w-full p-6 sm:p-2 sm:pt-4 rounded-10 overflow-hidden lg:rounded-5"
                style={{ backgroundColor: background }}
            >
                <div className="absolute top-6 right-6 lg:top-0 lg:right-3">
                    <Tag title={'2022'} />
                </div>

                <div className="absolute flex gap-2 z-10">
                    {
                        tags.map((title) => (
                            <TagWhite key={title} title={title} />
                        ))
                    }
                </div>

                <div
                    style={{ transition: '0.5s', opacity: hover ? 1 : 0 }}
                    className="flex justify-end items-end z-10 absolute lg:hidden top-0 left-0 rounded-10 w-full h-full border border-solid border-white bg-card-hover"
                >
                    <p className="text-white text-20 pb-7 pr-7 max-w-[372px]">
                        {description}
                    </p>
                </div>

                <div className="w-full h-full relative flex justify-center items-center box-border rounded-l-5">
                    <Image className="aspect-video absolute rounded-l-5 lg:min-h-[250px] -right-6 box-border object-left object-cover flg:w-[90%] flg:h-[80%] lg:rounded-r-0" src={photo} width={658} height={375} alt={title} />
                </div>
            </div>

            <div
                className="hidden justify-end items-end lg:flex rounded-10 w-full h-full"
            >
                <p className="text-white text-text-m max-w-[372px] w-60">
                    {description}
                </p>
            </div>
        </div>
    )
}

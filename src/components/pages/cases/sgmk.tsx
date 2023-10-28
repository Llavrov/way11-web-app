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

export default function Sgmk({tags, photo, background, description}: TCardCase) {
    const [hover, setHover] = useState(false);

    return (
        <div className="flex flex-col gap-3">
            <div
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="relative w-screen h-[500px] lg:max-h-[400px] max-w-[790px] flg:w-[60vw] flg:h-[60vh] flg:max-w-[calc(60vw-50px)] p-6 sm:p-2 sm:pt-4 rounded-10 overflow-hidden lg:rounded-5"
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
                    className="flex justify-end items-end absolute z-10 lg:hidden top-0 left-0 rounded-10 w-full h-full border border-solid border-white bg-card-hover"
                >
                    <p className="text-white text-20 pb-7 pr-7 max-w-[372px]">
                        {description}
                    </p>
                </div>

                <div className="w-full h-full flex justify-center items-center box-border rounded-5 overflow-hidden">
                    <Image className=" absolute -bottom-5 lg:min-h-[250px] lg:object-cover rotate-12 box-border rounded-5 object-contain flg:w-[70%] lg:-right-6 lg:object-left lg:bottom-auto lg:w-[90%] lg:rotate-0 lg:rounded-r-0" src={photo} width={658} height={375} alt={title} />
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

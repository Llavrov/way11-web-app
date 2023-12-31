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

export default function AboutEducation({tags, photo, background, description}: TCardCase) {
    const [hover, setHover] = useState(false);

    return (
        <div className="flex flex-col gap-3">
            <div
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                className="relative w-full h-[500px] lg:max-h-[400px] max-w-[940px] flg:w-[65vw] flg:h-[60vh] flg:max-w-[calc(65vw-50px)] p-6 sm:p-2 sm:pt-4 rounded-10 overflow-hidden lg:rounded-5"
                style={{ backgroundColor: background }}
            >
                <div className="absolute top-6 right-6 lg:top-0 lg:right-3">
                    <Tag title={'2022'} />
                </div>

                <div className="absolute flex gap-2 z-10 lg:flex-wrap">
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
                    <Image className="absolute bottom-[-25px] rounded-5 lg:-right-6 lg:min-h-[250px] lg:object-left lg:bottom-auto lg:w-[90%] box-border object-contain lg:object-cover flg:w-[80%] rounded-t-5" src={photo} width={658} height={375} alt={title} />
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

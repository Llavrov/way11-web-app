'use client'

import Image from "next/image";
import TagWhite from "@/components/tagWhite";
import { title } from "process";

type TCardCase = {
    tags: string[],
    photo: string,
    background: string
};

export default function CardCase({tags, photo, background}: TCardCase) {
    return (
        <div className="p-5 rounded-6 mb-5 max-w-[790px]" style={{ backgroundColor: background }}>
            <div >
                {
                    tags.map((title) => (
                        <TagWhite key={title} title={title} />
                    ))
                }
            </div>
            <div className="p-10 pt-20 sm:p-2 sm:pt-6">
                <Image className="aspect-video box-border" src={photo} width={658} height={375} alt={title} />
            </div>
        </div>
    )
}

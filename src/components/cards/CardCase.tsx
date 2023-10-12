'use client'

import Image from "next/image";
import TagWhite from "@/components/tagWhite";
import { title } from "process";

type TCardCase = {
    tags: string[],
    photo: string,
    background: any
}; 

export default function CardCase({tags, photo, background}: TCardCase) {
    const colorVariants:any = {
        orange: 'bg-[#DD622D]',
        purple: 'bg-[#7C7AFE]',
        blue: 'bg-[#007FE0]',
    }
    return (
        <div className={`p-5 sm:p-2 sm:pt-4 rounded-6 mb-5 max-w-[790px] hover:z-[1] ease-in-out duration-300 ${colorVariants[background]} hover:opacity-60`} 
        >
            <div >
                {
                    tags.map((title) => (
                        <TagWhite key={title} title={title} />
                    ))
                }
            </div>
            <div className="p-10 pt-20 sm:p-5 sm:pt-6">
                <Image className="aspect-video box-border" src={photo} width={658} height={375} alt={title} />
            </div>
        </div>
    )
}

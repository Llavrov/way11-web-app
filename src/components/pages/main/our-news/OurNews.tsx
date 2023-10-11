'use client'

import TagGray from "@/components/common/tags/tagGray";
import Image from "next/image";
import CardOfNews from "@/components/common/cards/CardOfNews";

export default function OurNews() {
    return (
        <div className="w-full flex relative flex-row box-border justify-between rounded-[50px]">
            <div className="flex flex-col items-left justify-between gap-[30px] h-[463px] pl-[50px]">
                <div className="flex gap-2 flex-col items-left max-w-[470px]">
                    <div className="flex">
                        <TagGray title="блог" />
                    </div>
                    <p className="text-heading-l text-white">
                        новости студии
                    </p>
                </div>

                <div className="flex gap-2">
                    <Image src={'/svg/arrow-left.svg'} alt={'/src/arrow-left.svg'} width={63} height={49} />
                    <Image src={'/svg/arrow-right.svg'} alt={'/src/arrow-left.svg'} width={63} height={49} />
                </div>
            </div>

            <div className="w-[50vw] flex overflow-x-scroll gap-[10px]">
                <CardOfNews title="№2 Ad‑Unions за 2022 год" image={'/about-us-01.png'} link={'/'} />
                <CardOfNews title="№2 Ad‑Unions за 2022 год" image={'/about-us-01.png'} link={'/'} />
                <CardOfNews title="№2 Ad‑Unions за 2022 год" image={'/about-us-01.png'} link={'/'} />
            </div>
        </div>
    );
}

'use client'

import TagBlack from "@/components/common/tags/tagBlack";
import Image from "next/image";
import Link from "next/link";

export default function OurPhilosophy() {
    return (
        <div className="w-[calc(100vw-100px)] flg:min-h-[900px] lg:w-[calc(100vw-32px)] overflow-hidden flex h-[calc(100vh-190px)] lg:h-[507px] px-[50px] pt-[50px] lg:px-4 relative flex-col box-border justify-between items-center bg-white rounded-[50px] lg:rounded-5">
            <div className="flex flex-col items-center justify-center gap-[30px] lg:gap-6 h-[380px]">
                <div className="flex gap-6 flex-col items-center">
                    <Link href={'/about-us'} className="flex">
                        <TagBlack title="о нас"/>
                    </Link>
                    <p className="text-heading-l text-black lg:text-3xl lg:leading-9">
                        Ваш веб-партнер
                    </p>
                </div>

                <p className="text-20 lg:text-text-m font-medium text-black max-w-[360px] lg:max-w-[250px] text-center">
                    Здесь нужно написать какой-то текст о компании,
                    её ценностях, посыл-мы крутые чуваки
                    и шарим за своё направление
                </p>
            </div>

            <div className="flex items-center justify-center w-full h-[671px] relative">
                <Image className="absolute top-0 z-10 lg:min-w-[460px] h-full" style={{ mixBlendMode: 'overlay' }} src={'/overlay.png'} alt={'3d model'} width={850} height={360} />
                <Image className="absolute -top-10 lg:top-auto min-w-[1000px] lg:min-w-[460px]" src={'/subtract3d-pic.png'} alt={'3d model'} width={1020} height={920} />
            </div>
        </div>
    );
}

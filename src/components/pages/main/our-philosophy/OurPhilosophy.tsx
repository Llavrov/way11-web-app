'use client'

import { Canvas } from '@react-three/fiber';
import Image from "next/image";
import TagBlack from "@/components/common/tags/tagBlack";
import ModelWithRingls from "@/components/common/3d/modelWithRingls";

export default function OurPhilosophy() {
    return (
        <div className="w-[calc(100vw-100px)] overflow-hidden flex h-[calc(100vh-190px)] px-[50px] relative flex-col box-border justify-between items-center bg-white rounded-[50px]">
            <div className="flex flex-col items-center justify-center gap-[30px] h-[380px]">
                <div className="flex gap-6 flex-col items-center">
                    <div className="flex">
                        <TagBlack title="с кем мы работали"/>
                    </div>
                    <p className="text-heading-l text-black">
                        Ваш веб-партнер
                    </p>
                </div>

                <p className="text-20 text-black max-w-[360px] text-center">
                    Здесь нужно написать какой-то текст о компании,
                    её ценностях, посыл-мы крутые чуваки
                    и шарим за своё направление
                </p>
            </div>

            <div className="flex items-center justify-center w-full h-[341px] relative">
                {/*<Image className="absolute top-0 z-10" style={{ mixBlendMode: 'overlay' }} src={'/overlay.png'} alt={'3d model'} width={850} height={360} />*/}
                {/*<Image className="absolute top-0" src={'/subtract3d.png'} alt={'3d model'} width={850} height={360} />*/}
            </div>
        </div>
    );
}

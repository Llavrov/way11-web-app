'use client'

import TagGray from "@/components/common/tags/tagGray";
import Image from "next/image";
import CardsSwiper from "@/components/common/cardsSwiper";
import {useEffect, useRef, useState} from "react";

export default function OurNews() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    const [refs, setRefs] = useState({
        prevBtnRef: prevRef,
        nextBtnRef: nextRef
    });

    useEffect(() => {
        setRefs({
            prevBtnRef: prevRef,
            nextBtnRef: nextRef
        });
    }, []);

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
                    <Image ref={prevRef} className="cursor-pointer" src={'/svg/arrow-left.svg'} alt={'/src/arrow-left.svg'} width={63} height={49} />
                    <Image ref={nextRef} className="cursor-pointer" src={'/svg/arrow-right.svg'} alt={'/src/arrow-left.svg'} width={63} height={49} />
                </div>
            </div>

            <div className="w-[50vw] flex gap-[10px]">
                {
                    refs.nextBtnRef.current &&
                    refs.nextBtnRef.current &&
                    <CardsSwiper prevBtn={refs.prevBtnRef} nextBtn={refs.nextBtnRef} cards={[
                        {title: 'ss', image: '/about-us-01.png'},
                        {title: 'ss3', image: '/about-us-01.png'},
                        {title: 's2s', image: '/about-us-01.png'},
                        {title: 's22s', image: '/about-us-01.png'},
                        {title: 's23s', image: '/about-us-01.png'},
                        {title: 's22s', image: '/about-us-01.png'},
                        {title: 's23s', image: '/about-us-01.png'}]}
                    />
                }
            </div>
        </div>
    );
}

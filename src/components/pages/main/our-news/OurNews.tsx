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
        <div className="w-full flex relative flex-row lg:flex-col box-border lg:gap-6 justify-between rounded-[50px]">
            <div className="flex flex-col items-left justify-between gap-[30px] h-[463px] lg:h-auto pl-[50px] lg:pl-4">
                <div className="flex gap-2 flex-col items-left max-w-[470px]">
                    <div className="flex">
                        <TagGray title="блог" />
                    </div>
                    <p className="text-heading-l text-white lg:text-3xl lg:leading-9">
                        новости студии
                    </p>
                </div>

                <div className="flex gap-2 lg:hidden">
                    <Image ref={prevRef} className="cursor-pointer" src={'/svg/arrow-left.svg'} alt={'/src/arrow-left.svg'} width={63} height={49} />
                    <Image ref={nextRef} className="cursor-pointer" src={'/svg/arrow-right.svg'} alt={'/src/arrow-left.svg'} width={63} height={49} />
                </div>
            </div>

            <div className="w-[50vw] lg:w-full flex gap-[10px]">
                {
                    refs.nextBtnRef.current &&
                    refs.nextBtnRef.current &&
                    <CardsSwiper prevBtn={refs.prevBtnRef} nextBtn={refs.nextBtnRef} cards={[
                        {title: 'тусовка в офисе 2023', image: '/news-01.png'},
                        {title: 'тусовка в офисе 2023', image: '/news-02.png'},
                        {title: 'тусовка в офисе 2023', image: '/news-03.png'},
                        {title: 'тусовка в офисе 2023', image: '/news-01.png'},
                        {title: 'тусовка в офисе 2023', image: '/news-02.png'},
                        {title: 'тусовка в офисе 2023', image: '/news-03.png'},
                        {title: 'тусовка в офисе 2023', image: '/news-01.png'}]}
                    />
                }
            </div>
        </div>
    );
}

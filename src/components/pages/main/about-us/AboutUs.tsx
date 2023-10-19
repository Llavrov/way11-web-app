'use client'

import EmptyButton from "@/components/common/buttons/emptyButton";
import TagGray from "@/components/common/tags/tagGray";
import CardAboutUs from "@/components/common/cards/CardAboutUs";
import Link from "next/link";

const LIST_OF_NEWS = [
    {
        image: '/about-us-01.png',
        link: '/',
        title: '8 стартапов с нуля',
    },
    {
        image: '/about-us-02.png',
        link: '/',
        title: 'Российский и зарубежный рынок',
    },
    {
        image: '/about-us-03.png',
        link: '/',
        title: '№2 Ad‑Unions за 2022 год',
    }
];

export default function AboutUs() {
    return (
        <div className="w-full h-[530px] flex flex-col items-center px-[50px] md:px-0 box-border">
            <div className="w-full flex lg:flex-col justify-between h-[210px] lg:gap-6">
                <div className="max-w-[560px] flex flex-col gap-2 lg:px-4">
                    <div className="flex">
                        <TagGray title="наши успехи" />
                    </div>
                    <h1 className="text-white text-heading-l lg:w-full lg:text-3xl lg:leading-9">
                        немного о нас
                    </h1>
                </div>
                <div className="flex justify-between flex-col min-h-[460px] gap-[30px]">
                    <div className="flex no-scrollbar relative gap-1 lg:min-h-[367px] lg:overflow-x-scroll lg:px-4">
                        {
                            LIST_OF_NEWS.map((cardNewsObj) => (
                                <CardAboutUs key={cardNewsObj.title} {...cardNewsObj} />
                            ))
                        }
                    </div>

                    <Link href={'/about-us'} className="w-full lg:px-4">
                        <EmptyButton title={'больше о нас'} onClick={() => {}} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

'use client'

import EmptyButton from "@/components/emptyButton";
import Tag from "@/components/tag";
import CardAboutUs from "@/components/cards/CardAboutUs";

const LIST_OF_NEWS = [
    {
        image: '/about-us-01.png',
        link: '/',
        title: '8 стартапов </br> с нуля',
    },
    {
        image: '/about-us-02.png',
        link: '/',
        title: 'Российский и </br> зарубежный рынок',
    },
    {
        image: '/about-us-03.png',
        link: '/',
        title: '№2 Ad‑Unions за </br> 2022 год',
    }
];

export default function AboutUs() {
    return (
        <div className="w-full h-[530px] flex flex-col items-center px-[50px] pt-[50px] box-border">
            <div className="w-full flex justify-between h-[210px]">
                <div className="max-w-[560px] flex flex-col gap-2">
                    <div className="flex">
                        <Tag title="наши успехи" />
                    </div>
                    <h1 className="text-white text-heading-l">
                        Немного о нас
                    </h1>
                </div>
                <div className="flex justify-between flex-col gap-[30px]">
                    <div className="flex relative gap-1">
                        {
                            LIST_OF_NEWS.map((cardNewsObj) => (
                                <CardAboutUs key={cardNewsObj.title} {...cardNewsObj} />
                            ))
                        }
                    </div>

                    <EmptyButton title={'больше о нас'} onClick={() => undefined}  />
                </div>
            </div>
        </div>
    )
}

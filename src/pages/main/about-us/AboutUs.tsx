'use strict'

import NewsCard from "@/pages/main/about-us/NewsCard";

const LIST_OF_NEWS: {
    title: string;
    image: string;
    link: string;
} = [
    {
        image: '/about-us-01.png',
        link: '/',
        title: `8 стартапов </br> с нуля`,
    },
    {
        image: '/about-us-02.png',
        link: '/',
        title: `Российский и </br> зарубежный рынок`,
    },
    {
        image: '/about-us-03.png',
        link: '/',
        title: `№2 Ad‑Unions за </br> 2022 год`,
    }
];

export default function AboutUs() {
    return (
        <div className="w-full h-[480px] flex flex-col items-center justify-end p-[50px] box-border">
            <div className="w-full flex justify-between h-[210px]">
                <div className="max-w-[560px]">
                    <h1 className="text-white text-heading-l">
                        Путь в тысячу миль начинается с одного шага
                    </h1>
                </div>
                <div className="flex justify-between flex-col">
                    <div className="flex relative gap-[10px]">
                        {
                            LIST_OF_NEWS.map((cardNewsObj) => (
                                <NewsCard key={cardNewsObj.title} {...cardNewsObj} />
                            ))
                        }
                    </div>

                    <p className="text-20 max-w-[400px]">
                        Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса. В основе наших проектов лежат идеи, основанные на аналитике, креативе и технологиях.
                    </p>
                </div>
            </div>
        </div>
    )
}

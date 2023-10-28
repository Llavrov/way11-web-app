'use client'

import EmptyButton from "@/components/common/buttons/emptyButton";
import TagGray from "@/components/common/tags/tagGray";
import CardAboutUs from "@/components/common/cards/CardAboutUs";
import Link from "next/link";
import Image from "next/image";

const LIST_OF_NEWS = [
    {
        image: '/about-us-01.png',
        link: '/cases',
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
        title: '№2 на Лидирующая позиция за 2022 год',
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
                        <Link href={LIST_OF_NEWS[0].link} className="lg:min-w-[262px] overflow-hidden">
                            <div className="flex flex-col relative justify-between h-[370px] w-full max-w-[262px] flg:w-[calc(20vw-17px)] flg:h-[40vh] flg:min-h-[400px] flg:max-w-[20vw] rounded-5 box-border bg-white">
                                <Image
                                    className="absolute top-0 left-0 z-10 h-full object-cover w-full"
                                    style={{ mixBlendMode: 'overlay' }}
                                    src={'/overlay-min.svg'}
                                    alt={'3d model'}
                                    width={786}
                                    height={828}
                                />
                                <Image
                                    className="flg:min-w-[390px] rotate-[-20deg] object-contain rounded-5 overflow-hidden mt-[-20px] ml-[-40px]"
                                    src={LIST_OF_NEWS[0].image}
                                    alt={LIST_OF_NEWS[0].title}
                                    width={786}
                                    height={828}
                                />

                                <div className="w-full p-[25px] box-border">
                                    <p className="text-20 text-black flg:text-em-m">
                                        {LIST_OF_NEWS[0].title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href={LIST_OF_NEWS[1].link} className="lg:min-w-[262px] overflow-hidden">
                            <div className="flex flex-col relative justify-between h-[370px] w-full max-w-[262px] flg:w-[calc(20vw-17px)] flg:h-[40vh] flg:min-h-[400px] flg:max-w-[20vw] rounded-5 box-border bg-white">
                                <Image
                                    className="absolute top-0 left-0 z-10 h-full object-cover w-full"
                                    style={{ mixBlendMode: 'overlay' }}
                                    src={'/overlay-min.svg'}
                                    alt={'3d model'}
                                    width={786}
                                    height={828}
                                />
                                <Image
                                    className="flg:w-full object-contain min-w-[110%] rounded-5 overflow-hidden mt-[-40px]"
                                    src={LIST_OF_NEWS[1].image}
                                    alt={LIST_OF_NEWS[1].title}
                                    width={786}
                                    height={828}
                                />

                                <div className="w-full p-[25px] box-border">
                                    <p className="text-20 text-black flg:text-em-m">
                                        {LIST_OF_NEWS[1].title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                        <Link href={LIST_OF_NEWS[2].link} className="lg:min-w-[262px] overflow-hidden">
                            <div className="flex flex-col relative justify-between h-[370px] w-full max-w-[262px] flg:w-[calc(20vw-17px)] flg:h-[40vh] flg:min-h-[400px] flg:max-w-[20vw] rounded-5 box-border bg-white">
                                <Image
                                    className="absolute top-0 left-0 z-10 h-full object-cover w-full"
                                    style={{ mixBlendMode: 'overlay' }}
                                    src={'/overlay-min.svg'}
                                    alt={'3d model'}
                                    width={786}
                                    height={828}
                                />
                                <Image
                                    className="flg:w-[94%] object-contain rounded-5 overflow-hidden mt-[-40px] ml-[50px]"
                                    src={LIST_OF_NEWS[2].image}
                                    alt={LIST_OF_NEWS[2].title}
                                    width={786}
                                    height={828}
                                />

                                <div className="w-full p-[25px] box-border">
                                    <p className="text-20 text-black flg:text-em-m">
                                        {LIST_OF_NEWS[2].title}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <Link href={'/about-us'} className="w-full lg:px-4 no-scrollbar">
                        <EmptyButton title={'больше о нас'} onClick={() => {}} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

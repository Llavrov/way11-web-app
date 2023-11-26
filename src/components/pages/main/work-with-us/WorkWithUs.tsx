'use client'

import TagBlack from "@/components/common/tags/tagBlack";
import Image from "next/image";
import Link from "next/link";
import EmptyButton from "@/components/common/buttons/emptyButton";

export default function WorkWithUs() {
    return (
        <div className="w-[calc(100vw-100px)] flg:min-h-[500px] lg:w-[calc(100vw-32px)] overflow-hidden flex h-[500px] lg:h-[700px] big:h-[450px] px-[50px] pt-[50px] lg:px-4 relative flex-col box-border justify-between items-center bg-white rounded-[50px] lg:rounded-5">
            <div className="flex flex-col items-center justify-center gap-[30px] lg:gap-6 h-[280px]">
                <div className="flex gap-0 flex-col items-center mt-10 lg:mt-0 lg:gap-2">
                    <Link href={'/about-us'} className="flex">
                        <TagBlack title="работа с нами"/>
                    </Link>
                    <p className="text-heading-l text-black big:text-3xl lg:text-3xl lg:text-center lg:leading-9">
                        Стать частью команды WAY11
                    </p>
                </div>
            </div>

            <div className="w-full flex gap-20 mt-8 lg:flex-col-reverse lg:items-center">
                <div className="flex items-center justify-center flg:ml-[100px] lg:ml-10 w-[400px] h-[460px] lg:w-[420px] relative">
                    <Image
                        className="absolute -left-10 lg:left-0 top-0 z-10 h-full" style={{ mixBlendMode: 'overlay' }}
                        src={'/overlay-work-with-us.png'}
                        alt={'3d model'}
                        width={470}
                        height={270}
                    />
                    <Image
                        className="absolute z-[5] -top-[100px] min-w-[540px] big:min-w-[440px] lg:min-w-[380px]"
                        src={'/work-with-us-01.png'}
                        alt={'work-with-us-01'}
                        width={440}
                        height={440}
                    />
                    <Image
                        className="absolute top-10 translate-x-[-130px] min-w-[330px] big:min-w-[260px] lg:min-w-[200px]"
                        src={'/work-with-us-02.png'}
                        alt={'work-with-us-02'}
                        width={230}
                        height={230}
                    />
                </div>

                <div className="flex flex-col gap-10 w-[calc(100%-400px)] lg:w-full lg:items-center flg:w-[calc(100%-600px)]">
                    <p className="text-20 lg:text-text-m font-medium text-black max-w-[460px] lg:max-w-[350px] text-left lg:text-center">
                        Мы растем и наши двери всегда открыты для новых специалистов.
                        Если ты не боишься новых задач и хочешь работать в команде людей с горящими глазами - мы тебя ждем.
                    </p>

                    <Link href={'https://t.me/Forrest3301'} className="w-full no-scrollbar">
                        <EmptyButton color={"black"} title={'Стать частью команды'} onClick={() => {}} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

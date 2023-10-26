'use client';

import TagGray from "@/components/common/tags/tagGray";
import CardOfService from "@/components/common/cards/CardOfService";
import Image from "next/image";
import ExpertsComponent, {TExpert} from "@/components/pages/aboutUs/experts";
import {useEffect, useState} from "react";

export default function AboutUsPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile((window && window?.innerWidth) <= 768);
    }, [])

    const [selectTeammate, setSelectTeammate] = useState<TExpert>(
        {
            name: 'Вадим Колесников',
            role: 'Должность',
            image: '/vadim.png',
            socialNetworks: {
                tg: '',
                inst: ''
            }
        },
    );

    return (
        <div className="flex flex-col items-center w-full relative overflow-hidden justify-between pb-[120px] gap-[120px] box-border">
            <div className="h-screen w-full relative">
                <div className="absolute h-screen w-full top-0">
                    <div className="w-full h-screen bg-black opacity-80 absolute top-0" />
                    <Image
                        className="w-full h-screen object-cover"
                        src={'/background-about-us.png'}
                        alt={'/background-about-us.png'}
                        width={1440}
                        height={750}
                    />
                </div>
                <div className="absolute bottom-[50px] w-full flex justify-between h-[145px] px-[50px] lg:justify-end lg:flex-col lg:px-[20px] lg:h-[400px]">
                    <div className="flex items-start gap-8 max-w-[280px]">
                        <h1 className="text-heading-l text-white leading-[78px] lg:text-3xl lg:leading-9">
                            о студии
                            <p className="text-gray m-0">с 2022</p>
                        </h1>
                    </div>

                    <div className="flex justify-between flex-col max-w-[395px] flex-wrap gap-[10px]">
                        <p className="text-20 max-w-[400px]">
                            IT-аутсорс студия. Специализируемся на разработке платформ и систем с нуля, создании веб-сервисов. Ценим клиентов и их комфорт.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-between flex-wrap sm:p-3 px-[50px] lg:px-5 lg:gap-8">
                <div className="flex flex-col gap-2">
                    <div className="flex">
                        <TagGray title="наша миссия" />
                    </div>
                    <h2 className="text-6xl font-bold text-white my-0 lg:text-3xl lg:leading-9">приоритеты</h2>
                </div>

                <div className="w-full max-w-[742px] flex flex-col gap-[70px]">
                    <CardOfService tag="тезис" description="WAY11 - это коллектив талантливых людей, любящих свое дело. Специализируемся на полном цикле разработки: от аналитики до поддержки проекта и внедрения нового функционала. Уверены, что способны значительно улучшить функционирование вашего бизнеса за счет передовых решений и грамотно выстроенного процесса разработки.
А наш штат опытных специалистов позволяет нам выполнит всё в кратчайшие сроки." />
                </div>
            </div>

            <div className="w-full flex justify-between flex-wrap sm:p-3 px-[50px] lg:px-5 lg:gap-8">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <div className="flex">
                            <TagGray title="всегда на связи" />
                        </div>
                        <h2 className="text-6xl font-bold text-white my-0 lg:text-3xl lg:leading-9">наши эксперты</h2>
                    </div>

                    {
                        !isMobile
                            ? <Image className="w-[540px] h-[540px] object-top object-cover rounded-5" src={selectTeammate.image} alt={'picture of teammate'} width={540} height={540} />
                            : null
                    }
                </div>

                <div className="w-full lg:max-w-full max-w-[742px] flg_min:max-w-[50vw] feg:max-w-[60vw] flex flex-col gap-[70px]">
                    <ExpertsComponent onSelectTeammate={setSelectTeammate} />
                </div>
            </div>
        </div>
    )
}

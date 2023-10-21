'use client';

import Tag from "@/components/common/tags/tag";
import Link from "next/link";
import {useState} from "react";
import TagColor from "@/components/common/tags/tagColor";

export type TExpert = {
    name: string;
    role: string;
    image: string;
    socialNetworks: {tg: string, inst: string};
}

const EXPERTS = [
    {
        name: 'Вадим Колесников',
        role: 'Должность',
        image: '/vadim.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Вадим Колесников',
        role: 'Еще должность',
        image: '/about-us-01.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Вадим Колесников',
        role: 'Должность',
        image: '/about-us-02.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Вадим Колесников',
        role: 'Должность',
        image: '/about-us-03.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Вадим Колесников',
        role: 'Должность',
        image: '/vadim.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Вадим Колесников',
        role: 'Должность',
        image: '/vadim.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
]

export default function ExpertsComponent({onSelectTeammate}: {onSelectTeammate: (teammate: TExpert) => void}) {
    const [selectTeammate, setSelectTeammate] = useState(0);

    return (
        <div className="w-full flex justify-between flex-wrap sm:p-3 px-[50px] pt-[120px] lg:px-5 lg:gap-8">

            <div className="w-full flex-col">
                {
                    EXPERTS.map(({name, role, socialNetworks, image}, index) => (
                        <div onClick={() => {
                            onSelectTeammate({name, role, socialNetworks, image});
                            setSelectTeammate(index);
                        }} key={name + index} className="w-full flex flex-col gap-[10px] pb-12 lg:gap-0 max-w-[742px] lg:max-w-full cursor-pointer flg:max-w-[60vw]">
                            <div className="w-full bg-border-gray h-[1px] lg:mt-2"
                                 style={{
                                     border: selectTeammate === index ? '1px solid #EF8354' : '1px solid #5B5B5B',
                                 }}
                            />

                            <div className="flex justify-between pt-[5px]">
                                <p style={{
                                    color: selectTeammate === index ? '#EF8354' : 'white',
                                }} className="text-20 text-white max-w-[400px] flg:max-w-[60%] lg:text-[15px] lg:mt-3 lg:font-medium lg:max-w-full">
                                    {name}
                                </p>
                                <p style={{
                                    color: selectTeammate === index ? '#EF8354' : 'white',
                                }} className="text-20 text-white max-w-[400px] flg:max-w-[60%] lg:text-[15px] lg:mt-3 lg:font-medium lg:max-w-full">
                                    {role}
                                </p>

                                <div className="flex gap-2">
                                    {
                                        Object.entries(socialNetworks).map(([socialNetwork, link]) => (
                                            <Link key={socialNetwork} href={link}>
                                                <TagColor title={socialNetwork} color={selectTeammate === index ? '#EF8354' : 'white'} />
                                            </Link>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

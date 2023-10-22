'use client';

import Link from "next/link";
import {useState} from "react";
import TagColor from "@/components/common/tags/tagColor";
import {TExpert} from "@/components/pages/aboutUs/experts/index";

export const EXPERTS = [
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
        name: 'Жудиниллсон Армандо-Мучачо',
        role: 'Global teamlead',
        image: '/about-us-01.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Валентин Макаров',
        role: 'Teamlead',
        image: '/about-us-02.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Николай Коновалов',
        role: 'Senior UI/UX-дизайнер',
        image: '/about-us-03.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Никита Подгорный',
        role: 'Коммерческий директор',
        image: '/vadim.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
    {
        name: 'Форрест Гудлак',
        role: 'Руководитель отдела маркетинга',
        image: '/vadim.png',
        socialNetworks: {
            tg: '',
            inst: ''
        }
    },
]

export default function ListOfExperts({ onSelectTeammate }: {onSelectTeammate: (teammate: TExpert) => void}) {
    const [selectTeammate, setSelectTeammate] = useState(0);

    return (
        <>
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
                            }}
                               className="text-20 basis-[30%] text-white max-w-[400px] flg:max-w-[60%] lg:text-[15px] lg:mt-3 lg:font-medium lg:max-w-full"
                            >
                                {name}
                            </p>

                            <p style={{
                                color: selectTeammate === index ? '#EF8354' : '#8E8E93',
                            }} className="text-20 basis-[30%] text-white max-w-[400px] flg:max-w-[60%] lg:text-[15px] lg:mt-3 lg:font-medium lg:max-w-full">
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
        </>
    )
}

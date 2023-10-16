import Link from "next/link";
import CardCase from "@/components/common/cards/CardCase";
import EmptyButton from "@/components/common/buttons/emptyButton";
import CardOfService from "@/components/common/cards/CardOfService";
import TagGray from "@/components/common/tags/tagGray";
import {useEffect, useRef, useState} from "react";
import TagSticky from "@/components/common/tags/tagSticky";

const CARDS_OF_CASES = [
    {
        tag: 'аналитика',
        description: 'Изучаем спрос и конкурентов, строим эффективный CJM. Прорабатываем документацию и ТЗ, учитывая основные запросы клиента.'
    },
    {
        tag: 'аналитика',
        description: 'Изучаем спрос и конкурентов, строим эффективный CJM. Прорабатываем документацию и ТЗ, учитывая основные запросы клиента.'
    },
    {
        tag: 'аналитика',
        description: 'Изучаем спрос и конкурентов, строим эффективный CJM. Прорабатываем документацию и ТЗ, учитывая основные запросы клиента.'
    },
    {
        tag: 'аналитика',
        description: 'Изучаем спрос и конкурентов, строим эффективный CJM. Прорабатываем документацию и ТЗ, учитывая основные запросы клиента.'
    },
    {
        tag: 'аналитика',
        description: 'Изучаем спрос и конкурентов, строим эффективный CJM. Прорабатываем документацию и ТЗ, учитывая основные запросы клиента.'
    },
];

export default function OurServices() {
    const scrollRef = useRef(null)
    const [margins, setMargins] = useState<any>([10, 1700])

    useEffect(() => {
        // @ts-ignore
        setMargins([10, scrollRef?.current?.clientHeight])
    }, []);

    return (
        <div ref={scrollRef} className="w-full flex justify-between flex-wrap px-[50px] sm:p-3 ">
            {scrollRef ? <TagSticky heightArea={margins[1]} container={scrollRef} title={'в чем мы сильны'} tagText={'наши услуги'} /> : (<></>)}

            <div className="w-full max-w-[742px] flex flex-col gap-[70px]">
                {
                    CARDS_OF_CASES.map(({tag, description}) => (
                        <CardOfService key={tag} tag={tag} description={description} />
                    ))
                }
            </div>
        </div>
    )
}
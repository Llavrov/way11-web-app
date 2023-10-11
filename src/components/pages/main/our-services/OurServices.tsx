import Link from "next/link";
import CardCase from "@/components/common/cards/CardCase";
import EmptyButton from "@/components/common/buttons/emptyButton";
import CardOfService from "@/components/common/cards/CardOfService";
import TagGray from "@/components/common/tags/tagGray";

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
    return (
        <div className="w-full flex justify-between flex-wrap px-[50px] sm:p-3 ">
            <div className="flex flex-col gap-2">
                <div className="flex">
                    <TagGray title="наши услуги" />
                </div>
                <h2 className="text-6xl font-bold text-white my-0">в чём мы сильны</h2>
            </div>

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
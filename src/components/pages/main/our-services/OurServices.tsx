import CardOfService from "@/components/common/cards/CardOfService";
import {useEffect, useRef, useState} from "react";
import TagSticky from "@/components/common/tags/tagSticky";

const CARDS_OF_CASES = [
    {
        tag: 'аналитика',
        description: 'Изучаем спрос и конкурентов, строим эффективный CJM. Прорабатываем документацию и ТЗ, учитывая основные запросы клиента.'
    },
    {
        tag: 'мобильная разработка',
        description: 'Разрабатываем приложения для IOS и Android, учитывая архитектуру мобильного приложения и особенностей дизайна.'
    },
    {
        tag: 'веб-разработка',
        description: 'Создаем цифровые продукты: корпоративные и промо-сайты, платформы    и высоко нагруженные системы.'
    },
    {
        tag: 'IT-безопасность',
        description: ' Придерживаемся всех стандартов регулятора в сфере обеспечения защиты информации. Проводим аудиты безопасности информационных систем.'
    },
    {
        tag: 'UI/UX дизайн',
        description: 'Детально прорабатываем макеты, дизайн-систему и UI-kit. Для проверки дизайн-гипотиз отдельно создаем User Flow и интеррактивный прототип.'
    },
    {
        tag: 'поддержка проектов',
        description: 'Поддерживаем стабильную работу всех проектов и помогаем совершенствовать их, основываясь на последних тенденциях  в IT-сфере.'
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
            {scrollRef ? <TagSticky heightArea={margins[1]} container={scrollRef} title={'в чём мы сильны'} tagText={'наши услуги'} /> : (<></>)}

            <div className="w-full max-w-[742px] flg:max-w-[60vw] flex flex-col gap-[70px] mt-[92px] lg:mt-[40px]">
                {
                    CARDS_OF_CASES.map(({tag, description}) => (
                        <CardOfService key={tag} tag={tag} description={description} />
                    ))
                }
            </div>
        </div>
    )
}
import Link from "next/link";
import CardCase from "@/components/common/cards/CardCase";
import EmptyButton from "@/components/common/buttons/emptyButton";
import TagSticky from "@/components/common/tags/tagSticky";
import { useEffect, useRef, useState } from "react";
import {useScroll} from "framer-motion";
import {HEADER_HEIGHT, ONE_SECOND} from "@/components/common/header/Header";

const CARDS_OF_CASES = [
    {
        tags: ['Buy Now', 'E-commercial'],
        photo: '/cases/image4.png',
        background: '#DD622D',
        description: 'Кейс с созданием более доступной среды для наименее защищенных социальных групп.  Фишка проекта в том, что представленные товары имеют более низкую стоимость, за счет подступающего истечения срока годности.',
        link: '/case/buy-now',
    },
    {
        tags: ['ERP', 'промышленность'],
        photo: '/cases/image5.png',
        background: '#7C7AFE',
        description: 'Кейс с созданием более доступной среды для наименее защищенных социальных групп.  Фишка проекта в том, что представленные товары имеют более низкую стоимость, за счет подступающего истечения срока годности.',
        link: '/case/erp',
    },
    {
        tags: ['Lancelot', 'образование'],
        photo: '/cases/imag6.png',
        background: '#007FE0',
        description: 'Кейс, как наша команда приняла участие в конкурсе на разработку прототипа для предприятия-лидера в сфере горно-добывающей промышленности. В ходе которого: создали дизайн сайта и провели презентацию по проекту и обобщенной аналитике функционала.',
        link: '/case/lancelot',

    }
];

export default function Cases() {
    const scrollRef = useRef(null)
    const [margins, setMargins] = useState<any>([10, 1700])

    useEffect(() => {
        // @ts-ignore
        setMargins([10, scrollRef?.current?.clientHeight])
    }, []);

    return (
        <div className="w-full flex justify-between flex-wrap lg:flex-col lg:gap-6 px-[50px] lg:p-3" ref={scrollRef}>
            {scrollRef ? <TagSticky tagText={'что уже сделали'} heightArea={margins[1]} container={scrollRef} title={'проекты'}/> : (<></>)}

            <div className="flex flex-col sm:w-full gap-6 lg:gap-[50px]">
                {
                    CARDS_OF_CASES.map(({link, ...cardObj}) => (
                        <Link href={link} key={cardObj.background} >
                            <CardCase {...cardObj} />
                        </Link>
                    ))
                }

                <Link className="pt-[6px]" href="/cases">
                    <EmptyButton title="смотреть все" onClick={() => { }} />
                </Link>
            </div>

        </div>
    )
}
import Link from "next/link";
import CardCase from "@/components/common/cards/CardCase";
import EmptyButton from "@/components/common/buttons/emptyButton";
import { useTransform, motion, useScroll } from "framer-motion";
import TagSticky from "@/components/common/tags/tagSticky";
import { useEffect, useRef, useState } from "react";

const CARDS_OF_CASES = [
    {
        tags: ['Buy Now', 'E-commercial'],
        photo: '/cases/image4.png',
        background: '#DD622D',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка'
    },
    {
        tags: ['ERP', 'промышленность'],
        photo: '/cases/image5.png',
        background: '#7C7AFE',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка'
    },
    {
        tags: ['Lancelot', 'образование'],
        photo: '/cases/imag6.png',
        background: '#007FE0',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка'
    }
];

export default function Cases() {
    const scrollRef = useRef(null)
    const [margins, setMargins] = useState<any>([10, 1500]);

    useEffect(() => {
        // @ts-ignore
        setMargins([10, scrollRef?.current?.clientHeight])
    }, []);

    return (
        <div className="w-full flex justify-between flex-wrap px-[50px] sm:p-3" ref={scrollRef}>
            <TagSticky heightArea={margins[1]} innerH='1150' />

            <div className="flex flex-col sm:w-full gap-6">
                {
                    CARDS_OF_CASES.map((cardObj) => (
                        <CardCase key={cardObj.background} {...cardObj} />
                    ))
                }
                <Link className="pt-[6px]" href="/cases">
                    <EmptyButton title="смотреть все" onClick={() => { }} />
                </Link>
            </div>

        </div>
    )
}
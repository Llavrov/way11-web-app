import Link from "next/link";
import CardCase from "@/components/common/cards/CardCase";
import EmptyButton from "@/components/common/buttons/emptyButton";
import TagSticky from "@/components/common/tags/tagSticky";
import { useEffect, useRef, useState } from "react";
import {CARDS_OF_CASES} from "@/consts";

const CASE_CARDS = [
    CARDS_OF_CASES['buyNow'],
    CARDS_OF_CASES['erp'],
    CARDS_OF_CASES['lancelot'],
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
                    CASE_CARDS.map(({link, ...cardObj}) => (
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
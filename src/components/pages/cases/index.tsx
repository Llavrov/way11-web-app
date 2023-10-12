'use client';

import Link from "next/link";
import CardCase from "@/components/common/cards/CardCase";
import EmptyButton from "@/components/common/buttons/emptyButton";
import TagGray from "@/components/common/tags/tagGray";
import Tag from "@/components/common/tags/tag";
import {useState} from "react";
import Epr from "@/components/pages/cases/epr";
import Lancelot from "@/components/pages/cases/lancelot";
import BuyNow from "@/components/pages/cases/buyNow";
import AboutEducation from "@/components/pages/cases/aboutEducation";
import Sgmk from "@/components/pages/cases/sgmk";

const FILTERS = ['все проекты', 'e-commerce', 'образовательные платформы', 'промышленность'];

const CARDS_OF_CASES = {
    buyNow: {
        tags: [ 'Buy Now', 'E-commercial'],
            photo: '/cases/image4.png',
        background: '#DD622D',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка'
    },
    epr: {
        tags: [ 'ERP', 'промышленность'],
        photo: '/cases/image5.png',
        background: '#7C7AFE',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка'
    },
    lancelot: {
        tags: [ 'Lancelot', 'образование'],
        photo: '/cases/imag6.png',
        background: '#007FE0',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка'
    },
    aboutEducation: {
        tags: [ 'ПроОбразование', 'образовательные платформы'],
        photo: '/cases/image5.png',
        background: '#8885FF',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка'
    },
    sgmk: {
        tags: [ 'SGMK', 'промышленность'],
        photo: '/cases/imag6.png',
        background: '#F09D20',
        description: 'Тут должно быть краткое описание проекта, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка'
    }
};

export default function CasesPage() {
    const [activeTag, setActiveTag] = useState('все проекты');

    return (
        <div className="flex flex-col items-center w-full overflow-hidden justify-between px-[50px] pt-[200px] pb-[120px] gap-[120px] box-border">
            <div className="w-full flex justify-between">
                <div>
                    <h1 className="text-heading-l text-white">все наши кейсы</h1>
                    <h2 className="text-heading-l text-tag-gray opacity-50">2022-2022</h2>
                </div>

                <div className="flex max-w-[395px] flex-wrap gap-[10px]">
                    {
                        FILTERS.map((filter) => (
                            <div key={filter} onClick={() => setActiveTag(filter)}>
                                <Tag title={filter} active={filter === activeTag} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-full flex flex-col sm:w-full gap-[120px]">
                <Epr {...CARDS_OF_CASES["epr"]} />
                <div className="w-full flex justify-end">
                    <Lancelot {...CARDS_OF_CASES["lancelot"]} />
                </div>
                <BuyNow {...CARDS_OF_CASES["buyNow"]} />
                <AboutEducation {...CARDS_OF_CASES["aboutEducation"]} />
                <div className="w-full flex justify-end">
                    <Sgmk {...CARDS_OF_CASES["sgmk"]} />
                </div>
            </div>
        </div>
    )
}

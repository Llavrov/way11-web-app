'use client';

import Tag from "@/components/common/tags/tag";
import {useState} from "react";
import Epr from "@/components/pages/cases/epr";
import Lancelot from "@/components/pages/cases/lancelot";
import BuyNow from "@/components/pages/cases/buyNow";
import AboutEducation from "@/components/pages/cases/aboutEducation";
import Sgmk from "@/components/pages/cases/sgmk";
import Link from "next/link";
import {CARDS_OF_CASES} from "@/consts";

const FILTERS = ['все проекты', 'e-commerce', 'образовательные платформы', 'промышленность'];

export default function CasesPage() {
    const [activeTag, setActiveTag] = useState('все проекты');

    return (
        <div className="flex flex-col relative items-center w-full overflow-hidden justify-between px-[50px] lg:px-5 pt-[200px] pb-[120px] gap-[120px] box-border">
            <div className="w-full flex justify-between lg:flex-col">
                <div>
                    <h1 className="text-heading-l text-white lg:text-3xl lg:leading-9">все наши кейсы</h1>
                    <h2 className="text-heading-l text-tag-gray opacity-50 lg:text-3xl lg:leading-9">2022-2022</h2>
                </div>

                <div className="flex max-w-[395px] flex-wrap gap-[10px]">
                    {
                        FILTERS.map((filter) => (
                            <div className="lg:max-h-[34px]" key={filter} onClick={() => setActiveTag(filter)}>
                                <Tag title={filter} active={filter === activeTag} />
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="w-full relative flex flex-col sm:w-full gap-[120px] lg:gap-[50px]">
                <Link href={'/case/erp'}>
                    <Epr {...CARDS_OF_CASES["erp"]} />
                </Link>
                <div className="w-full flex justify-end lg:justify-start">
                    <Link className="lg:w-full" href={'/case/lancelot'}>
                        <Lancelot {...CARDS_OF_CASES["lancelot"]} />
                    </Link>
                </div>
                <Link href={'/case/buy-now'}>
                    <BuyNow {...CARDS_OF_CASES["buyNow"]} />
                </Link>
                <Link href={'/case/about-education'}>
                    <AboutEducation {...CARDS_OF_CASES["aboutEducation"]} />
                </Link>
                <div className="w-full flex justify-end lg:justify-start">
                    <Link className="lg:w-full" href={'/case/sgmk'}>
                        <Sgmk {...CARDS_OF_CASES["sgmk"]} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

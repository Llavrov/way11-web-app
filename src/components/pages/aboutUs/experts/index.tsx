'use client';

import {useEffect, useState} from "react";
import ListOfExperts from "@/components/pages/aboutUs/experts/listOfExperts";
import RCDropDown from "@/components/common/dropDown";
import {EXPERTS} from "@/consts";

export type TExpert = {
    name: string;
    role: string;
    image: string;
    socialNetworks?: {tg: string, inst?: string};
}

export default function ExpertsComponent({ onSelectTeammate }: {onSelectTeammate: (teammate: TExpert) => void}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile((window && window?.innerWidth) <= 768);
    }, [])

    return (
        <div className="w-full flex justify-between flex-wrap sm:p-3 px-[50px] pt-[120px] lg:px-0 lg:pt-0 lg:gap-8">
            <div className="w-full flex-col">
                {
                    isMobile ? <RCDropDown points={EXPERTS} /> : <ListOfExperts onSelectTeammate={onSelectTeammate} />
                }
            </div>
        </div>
    )
}

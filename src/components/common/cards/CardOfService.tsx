'use client'

import TagBlue from "@/components/common/tags/tagBlue";

type TCardOfService = {
    tag: string;
    description: string;
};

export default function CardOfService({tag, description}: TCardOfService) {
    return (
        <div className="w-full flex flex-col gap-[10px] lg:gap-0 max-w-[742px] lg:max-w-full flg:max-w-[60vw]">
            <div className="flex">
                <TagBlue title={tag} />
            </div>

            <div className="w-full bg-border-gray h-[1px] lg:mt-2" />

            <div className="flex justify-end lg:justify-start pt-[5px]">
                <p className="text-20 text-white max-w-[400px] flg:max-w-[60%] lg:text-[15px] lg:mt-3 lg:font-medium lg:max-w-full">
                    {description}
                </p>
            </div>
        </div>
    )
}

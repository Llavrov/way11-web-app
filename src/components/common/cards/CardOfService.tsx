'use client'

import TagBlue from "@/components/common/tags/tagBlue";

type TCardOfService = {
    tag: string;
    description: string;
};

export default function CardOfService({tag, description}: TCardOfService) {
    return (
        <div className="w-full flex flex-col gap-[10px] max-w-[742px] flg:max-w-[60vw]">
            <div className="flex">
                <TagBlue title={tag} />
            </div>

            <div className="w-full bg-border-gray h-[1px]" />

            <div className="flex justify-end pt-[5px]">
                <p className="text-20 text-white max-w-[400px] flg:max-w-[60%]">
                    {description}
                </p>
            </div>
        </div>
    )
}

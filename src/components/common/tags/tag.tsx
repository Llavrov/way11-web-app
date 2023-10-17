'use client'

type TTag = {
    title: string;
    color?: string;
    active?: boolean;
}

export default function Tag({ title, active }: TTag) {
    return (
        <span
            style={{ color: active ? '#EF8354' : 'white', border: active ? '1px solid #EF8354' : '1px solid white' }}
            className="flex py-[10px] px-[20px] text-18 lg:text-text-s rounded-[100px] lg:py-[8px] lg:px-[16px] lg:text-16 lg:mt-5 box-border text-white border-solid border-white border cursor-pointer"
        >
            {title}
        </span>
    )
}

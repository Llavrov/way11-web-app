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
            className="flex rounded-[100px] py-[10px] px-[20px] box-border text-18 text-white border-solid border-white border cursor-pointer"
        >
            {title}
        </span>
    )
}

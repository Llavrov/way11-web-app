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
            className={`flex rounded-[100px] ${window.innerWidth <= 1024 ? 'py-[8px] px-[16px] text-16 mt-5' : 'py-[10px] px-[20px] text-18'} box-border text-white border-solid border-white border cursor-pointer`}
        >
            {title}
        </span>
    )
}

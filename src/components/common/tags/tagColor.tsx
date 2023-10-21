'use client'

type TTag = {
    title: string;
    color: string;
}

export default function TagColor({ title, color = 'white' }: TTag) {
    return (
        <span
            style={{ color, border: `1px solid ${color}` }}
            className="flex py-[10px] px-[20px] text-18 rounded-[100px] lg:py-[8px] box-border text-white border-solid border-white border cursor-pointer"
        >
            {title}
        </span>
    )
}

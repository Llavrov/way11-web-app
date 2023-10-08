'use client'

type TTag = {
    title: string;
    color?: string;
}

function Tag({ title, color }: TTag) {
    return (
        <span
            className="flex rounded-[100px] py-[10px] px-[20px] box-border text-18 text-white border-solid border-white border"
            style={{ color, border: `1px solid ${color ?? '#fff'}` }}
        >
            {title}
        </span>
    )
}

export default Tag;
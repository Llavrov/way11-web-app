'use client'

type TTag = {
    title: string;
    color?: string;
}

export default function TagBlack({ title }: TTag) {
    return (
        <span
            className="flex rounded-[100px] py-[10px] px-[20px] box-border text-18 text-black border-solid border-black border"
        >
            {title}
        </span>
    )
}

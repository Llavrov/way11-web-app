'use client'

type TTag = {
    title: string;
}

export default function TagBlue({title}: TTag) {
    return (
        <span className="rounded-[100px] py-[10px] px-[20px] box-border text-18 text-white bg-blue">
            {title}
        </span>
    )
}

'use client'

type TTag = {
    title: string;
    color?: string;
}

function TagGray({ title }: TTag) {
    return (
        <span
            className="flex rounded-[100px] py-[10px] px-[20px] box-border text-18 text-tag-gray border-solid border-tag-gray border"
        >
            {title}
        </span>
    )
}

export default TagGray;

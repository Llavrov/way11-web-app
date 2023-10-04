'use client'

type TTag = {
    title: string;
}

function Tag({title}: TTag) {
    return (
        <span className="flex rounded-[100px] py-[10px] px-[20px] box-border text-18 text-white border-solid border-white border">
            {title}
        </span>
    )
}

export default Tag;
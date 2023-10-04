'use client'

type TTag = {
    title: string;
}

function TagWhite({title}: TTag) {
    return (
        <span className="rounded-[100px] py-[10px] px-[20px] box-border text-18 text-black bg-white mr-[5px]">
            {title}
        </span>
    )
}

export default TagWhite;
'use client'

type TEmptyButton = {
    title: string,
    onClick: () => void,
}

function EmptyButton({title, onClick}: TEmptyButton) {
    return (
        <button
            onClick={onClick}
            className="w-full flex justify-center items-center rounded-[15px] py-[25px] box-border text-20 text-white border border-white border-solid"
        >
            {title}
        </button>
    )
}

export default EmptyButton;
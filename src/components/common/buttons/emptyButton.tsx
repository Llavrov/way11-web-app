'use client'

type TEmptyButton = {
    title: string,
    onClick: () => void,
}

function EmptyButton({title, onClick}: TEmptyButton) {
    return (
        <button
            onClick={onClick}
            className="w-full lg:w-[calc(100%-32px)] lg:mx-4 flex justify-center items-center rounded-[100px] bg-white py-[25px] lg:py-[15px] box-border text-20 text-black"
        >
            {title}
        </button>
    )
}

export default EmptyButton;
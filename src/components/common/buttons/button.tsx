'use client'

type TButton = {
    title: string,
    onClick: () => void,
}

function Button({title, onClick}: TButton) {
    return (
        <button
            onClick={onClick}
            className="flex rounded-[100px] py-[10px] px-[34px] box-border bg-white text-20 text-black"
        >
            {title}
        </button>
    )
}

export default Button;
'use client'

import classNames from "classnames";

type TEmptyButton = {
    title: string,
    onClick: () => void,
    color?: "white" | "black",
}

function EmptyButton({title, onClick, color}: TEmptyButton) {
    return (
        <button
            onClick={onClick}
            className={classNames("w-full flex justify-center items-center rounded-[100px] py-[25px] lg:py-[15px] box-border text-20 text-black", {
                ["bg-white"]: color !== "black",
                ["bg-black text-white h-[54px]"]: color === "black",
            })}
        >
            {title}
        </button>
    )
}

export default EmptyButton;
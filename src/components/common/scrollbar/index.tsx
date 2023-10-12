'use client'

import Image from "next/image";

export default function Scrollbar({ images }: { images: string[]}) {
    return (
        <div className="w-full h-[461px] px-[50px] box-border flex gap-[10px] overflow-x-scroll no-scrollbar">
            {
                images.map((image, index) => (
                    <>
                        {
                            index === 0
                                ? (<Image className="object-cover rounded-5" src={image} alt={image} width={546} height={461} />)
                                : (<Image className="object-cover rounded-5" src={image} alt={image} width={784} height={461} />)
                        }
                    </>
                ))
            }
        </div>
    )
}

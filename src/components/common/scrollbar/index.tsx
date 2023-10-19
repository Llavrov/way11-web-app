'use client'

import Image from "next/image";

export default function Scrollbar({ images }: { images: string[]}) {
    return (
        <div className="w-full h-[461px] lg:h-[392px] px-[50px] lg:px-[20px] box-border flex gap-[10px] overflow-x-scroll no-scrollbar">
            {
                images.map((image, index) => (
                    <>
                        {
                            index === 0
                                ? (<Image className="object-cover rounded-5 lg:h-[392px] lg:max-w-[calc(100%-40px)]" src={image} alt={image} width={546} height={461} />)
                                : (<Image className="object-cover rounded-5 lg:h-[392px]" src={image} alt={image} width={784} height={461} />)
                        }
                    </>
                ))
            }
        </div>
    )
}

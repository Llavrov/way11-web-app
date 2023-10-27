'use client'

import Image from "next/image";
import WAModal from "@/components/common/modal";
import {CloseIcon} from "next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon";
import {useState} from "react";

export default function Scrollbar({ images }: { images: string[]}) {
    const [activeImage, setActiveImage] = useState(images[0])
    const [isOpen, setIsOpen] = useState(false)

    function handleOpenMenu() {
        setIsOpen(false);
    }

    return (
        <div className="w-full h-[461px] lg:h-[392px] relative px-[50px] lg:px-[20px] box-border flex gap-[10px] overflow-x-scroll no-scrollbar">
            <WAModal handleOpenMenu={handleOpenMenu} openMenu={isOpen}>
                <div className="w-full h-full absolute">
                    <div onClick={handleOpenMenu} className="absolute right-2 top-2 bg-black w-[24px] h-[24px] rounded-4">
                        <CloseIcon />
                    </div>

                    <Image
                        className="object-contain w-full h-full rounded-5"
                        src={activeImage}
                        alt={activeImage}
                        width={546}
                        height={461}
                    />
                </div>
            </WAModal>

            {
                images.map((image, index) => (
                    <>
                        {
                            index === 0
                                ? (

                                        <Image
                                            onClick={() => {
                                                setActiveImage(image);
                                                setIsOpen(true)
                                            }}
                                            className="w-full min-w-[500px] lg:min-w-80% object-cover object-left rounded-5 lg:h-[392px] lg:max-w-[calc(100%-40px)]"
                                            src={image}
                                            alt={image}
                                            width={1638}
                                            height={1383}
                                        />

                                )
                                : (
                                        <Image
                                            onClick={() => {
                                                setActiveImage(image);
                                                setIsOpen(true)
                                            }}
                                            className="object-cover rounded-5 lg:h-[392px]"
                                            src={image}
                                            alt={image}
                                            width={2352}
                                            height={1383}
                                        />

                                )
                        }
                    </>
                ))
            }
        </div>
    )
}

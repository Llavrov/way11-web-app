
import Image from "next/image";
import TagWhite from "@/components/tagWhite";
import { title } from "process";

type TCardCase = {
    tags: string[],
    photo: string,
    background: string
};

export default function CardCase({tags, photo, background}: TCardCase) {
    return (
        <div className="p-5 rounded-10" style={{ backgroundColor: background }}>
            <div >
                {
                    tags.map((title) => (
                        <TagWhite key={title} title={title} />
                    ))
                }
            </div>
            <div>
                <Image className="w-full h-full p-10" src={photo} width={375} height={658} alt={title} />
            </div>
        </div>
    )
}
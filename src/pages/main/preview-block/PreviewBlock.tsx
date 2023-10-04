'use strict'

import Image from 'next/image'
import Tag from "@/components/tag";

const LIST_OF_TAGS = ['inst', 'youtube', 'tenchat', 'tg'];

export default function PreviewBlock() {
    return (
        <div className="w-full flex h-[calc(100vh-140px)] flex-col items-center justify-end p-[50px] box-border">
            <div className="w-full flex justify-between h-[210px]">
                <div className="max-w-[560px]">
                    <h1 className="text-white text-heading-l">
                        Путь в тысячу миль начинается с одного шага
                    </h1>
                </div>
                <div className="flex justify-between flex-col">
                    <div className="flex relative gap-[10px]">
                        {
                            LIST_OF_TAGS.map((title) => (
                                <Tag title={title} key={title} />
                            ))
                        }
                    </div>
                    <p className="text-20 max-w-[400px]">
                        Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса. В основе наших проектов лежат идеи, основанные на аналитике, креативе и технологиях.
                    </p>
                </div>
            </div>
        </div>
    )
}

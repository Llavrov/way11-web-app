'use client';

import Tag from "@/components/common/tags/tag";
import TagGray from "@/components/common/tags/tagGray";
import CardOfService from "@/components/common/cards/CardOfService";
import Image from "next/image";
import Scrollbar from "@/components/common/scrollbar";
import EmptyButton from "@/components/common/buttons/emptyButton";

type TCasePage = {
    title: string;
    tag: string;
    description: string;
    image: string;
    imageBackground: string;
    taskAndSolution: string;
    solution: Array<{
        number: number;
        content: string;
    }>;
}

export default function CasePage({ title, tag, description, image, imageBackground = 'white', taskAndSolution, solution }: TCasePage) {
    return (
        <div className="flex flex-col items-center w-full relative overflow-hidden justify-between pt-[200px] gap-[120px] box-border">
            <div className="w-full flex justify-between h-[210px] px-[50px]">
                <div className="flex items-start gap-8">
                    <Image className="pt-4" src={'/svg/arrow-left.svg'} alt={'/src/arrow-left.svg'} width={63} height={49} />
                    <h1 className="text-heading-l text-white">{title}</h1>
                </div>

                <div className="flex justify-between flex-col max-w-[395px] flex-wrap gap-[10px]">
                    <div className="flex">
                        <Tag title={tag} />
                    </div>

                    <p className="text-20 max-w-[400px]">
                        {description}
                    </p>
                </div>
            </div>

            <div style={{ background: imageBackground }} className="w-[calc(100vw-100px)] overflow-hidden flex h-[600px] px-[50px] relative flex-col box-border justify-center items-center rounded-[50px]">
                <div className="flex items-center justify-center w-[764px] h-[435px] relative">
                    <Image className="w-full h-full object-contain" src={image} alt={'picture of case'} width={764} height={435} />
                </div>
            </div>

            <div className="w-full flex justify-between flex-wrap sm:p-3 px-[50px]">
                <div className="flex flex-col gap-2">
                    <div className="flex">
                        <TagGray title="что предстояло решить" />
                    </div>
                    <h2 className="text-6xl font-bold text-white my-0">проблематика и задача</h2>
                </div>

                <div className="w-full max-w-[742px] flex flex-col gap-[70px]">
                    <CardOfService tag="тезис" description={taskAndSolution} />
                </div>
            </div>

            <div className="w-full flex justify-between flex-wrap sm:p-3 px-[50px]">
                <div className="flex flex-col gap-2">
                    <div className="flex">
                        <TagGray title="что сделали" />
                    </div>
                    <h2 className="text-6xl font-bold text-white my-0">решение</h2>
                </div>

                <div className="w-full max-w-[742px] flex flex-col gap-[70px]">
                    {
                        solution.map(({number, content}) => (
                            <CardOfService key={number} tag={`шаг (${number})`} description={content} />
                        ))
                    }
                </div>
            </div>

            <div className="flex flex-col gap-6">
                <div className="flex px-[50px]">
                    <TagGray title="готовые страницы" />
                </div>

                <Scrollbar images={['/cases/imag6.png', '/cases/imag6.png', '/cases/imag6.png', '/cases/imag6.png']} />

                <div className="w-full flex justify-end px-[50px]">
                    <div className="w-full max-w-[790px]">
                        <EmptyButton title="отправить" onClick={() => {}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

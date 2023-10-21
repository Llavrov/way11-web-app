'use client'

import TagGray from "@/components/common/tags/tagGray";
import QUMultiLineTextField from "@/components/common/textFields/QUMultiLineTextField";
import QUTextField from "@/components/common/textFields/QUTextField";
import EmptyButton from "@/components/common/buttons/emptyButton";
import FilePickerComponent from "../../../common/filePickerComponent";
import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function ContactUs() {
    return (
        <div id="contact-us" className="w-full flex relative flex-row lg:flex-col box-border justify-between rounded-[50px] px-[50px] lg:px-4">
            <div className="flex gap-2 relative flex-col items-left justify-between max-w-[470px] lg:max-w-[230px]">
                <div className="w-full">
                    <div className="flex">
                        <TagGray title="обратная связь" />
                    </div>
                    <p className="text-heading-l text-white lg:text-3xl lg:leading-9">
                        предложите свой проект
                    </p>
                </div>

                <Link href={'#preview'} className="lg:hidden">
                    <Image src={"/scroll-up.svg"} alt="image picker" width={104} height={104} />
                </Link>
            </div>

            <div className="w-[790px] lg:w-full flex flex-col overflow-x-scroll gap-[10px] pt-[64px] lg:pt-[24px]">
                <div className="flex gap-2 lg:flex-col">
                    <QUTextField type="text" placeholder="Имя*" />
                    <QUTextField type="text" placeholder="Компания" />
                </div>

                <div className="flex gap-2 lg:flex-col">
                    <QUTextField type="text" placeholder="Телефон*" />
                    <QUTextField type="text" placeholder="E-mail*" />
                </div>

                <QUTextField type="text" placeholder="Бюджет проекта" />

                <QUMultiLineTextField placeholder="Описание проекта" />

                <FilePickerComponent />

                <EmptyButton title="отправить" onClick={() => {}} />
            </div>
        </div>
    );
}

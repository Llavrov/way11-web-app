'use client'

import Tag from "@/components/tag";
import QUMultiLineTextField from "@/components/textFields/QUMultiLineTextField";
import QUTextField from "@/components/textFields/QUTextField";
import EmptyButton from "@/components/emptyButton";
import FilePickerComponent from "@/components/filePickerComponent";

export default function ContactUs() {
    return (
        <div className="w-full flex relative flex-row box-border justify-between rounded-[50px] px-[50px]">
            <div className="flex gap-2 flex-col items-left max-w-[470px]">
                <div className="flex">
                    <Tag title="обратная связь" />
                </div>
                <p className="text-heading-l text-white">
                    предложите свой проект
                </p>
            </div>

            <div className="w-[790px] flex flex-col overflow-x-scroll gap-[10px] pt-[64px]">
                <div className="flex gap-2">
                    <QUTextField type="text" placeholder="Имя*" />
                    <QUTextField type="text" placeholder="Компания" />
                </div>

                <div className="flex gap-2">
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

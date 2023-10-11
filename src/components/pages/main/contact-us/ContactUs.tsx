'use client'

import TagGray from "@/components/common/tags/tagGray";
import QUMultiLineTextField from "@/components/common/textFields/QUMultiLineTextField";
import QUTextField from "@/components/common/textFields/QUTextField";
import EmptyButton from "@/components/common/buttons/emptyButton";
import FilePickerComponent from "../../../common/filePickerComponent";

export default function ContactUs() {
    return (
        <div className="w-full flex relative flex-row box-border justify-between rounded-[50px] px-[50px]">
            <div className="flex gap-2 flex-col items-left max-w-[470px]">
                <div className="flex">
                    <TagGray title="обратная связь" />
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

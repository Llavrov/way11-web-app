'use client'

import TagGray from "@/components/common/tags/tagGray";
import QUMultiLineTextField from "@/components/common/textFields/QUMultiLineTextField";
import QUTextField from "@/components/common/textFields/QUTextField";
import EmptyButton from "@/components/common/buttons/emptyButton";
import FilePickerComponent from "../../../common/filePickerComponent";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

interface FormData {
    name: string;
    company?: string;
    phone: string;
    email: string;
    budget?: string;
    description?: string;
}

export default function ContactUs() {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        company: "",
        phone: "",
        email: "",
        budget: "",
        description: "",
    });

    function handleSendForm() {
        const token = process.env.TG_BOT_API_KEY;
        const chat_id = process.env.TG_BOT_USER;

        const form = `
----- Форма с сайта -----%0A
Имя: ${formData.name}%0A
${
    formData.company ? (
        `Компания: ${formData.company}%0A`
    ) : ''
}
Телефон: ${formData.phone}%0A
Email: ${formData.email}%0A
${
    formData.budget ? (
        `Бюджет: ${formData.budget}%0A`
    ) : ''
}
${
    formData.description ? (
        `Описание: ${formData.description}`
    ) : ''
}
`;

        const sendToTelegramUrl = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${form}`;

        try {
            fetch(sendToTelegramUrl).then(() => setFormData({
                name: "",
                company: "",
                phone: "",
                email: "",
                budget: "",
                description: "",
            }))
        } catch (e) {}
    }

    const handleInputChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div id="contact-us" className="w-full flex relative flex-row lg:flex-col box-border justify-between rounded-[50px] px-[50px] lg:px-4">
            {/* Левая колонка с заголовком */}
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

            {/* Правая колонка с формой */}
            <div className="w-[790px] lg:w-full flex flex-col gap-[10px] pt-[64px] lg:pt-[24px]">
                <div className="flex gap-2 lg:flex-col">
                    <QUTextField
                        type="text"
                        placeholder="Имя*"
                        onChange={(changedValue) => handleInputChange('name', changedValue)}
                        value={formData.name}
                    />
                    <QUTextField
                        type="text"
                        placeholder="Компания"
                        onChange={(changedValue) => handleInputChange('company', changedValue)}
                        value={formData.company}
                    />
                </div>

                <div className="flex gap-2 lg:flex-col">
                    <QUTextField
                        type="text"
                        placeholder="Телефон*"
                        onChange={(changedValue) => handleInputChange('phone', changedValue)}
                        value={formData.phone}
                    />
                    <QUTextField
                        type="text"
                        placeholder="E-mail*"
                        onChange={(changedValue) => handleInputChange('email', changedValue)}
                        value={formData.email}
                    />
                </div>

                <QUTextField
                    type="text"
                    placeholder="Бюджет проекта"
                    onChange={(changedValue) => handleInputChange('budget', changedValue)}
                    value={formData.budget}
                />

                <QUMultiLineTextField
                    placeholder="Описание проекта"
                    onChange={(changedValue) => handleInputChange('description', changedValue)}
                    value={formData.description}
                />

                <FilePickerComponent />

                <EmptyButton title="отправить" onClick={handleSendForm} />
            </div>
        </div>
    );
}

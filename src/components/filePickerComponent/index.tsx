import Image from "next/image";
import React, {useEffect, useState} from "react";
import {log} from "util";

export default function FilePickerComponent() {
    const [files, setFiles] = useState<File[]>([]);

    const uploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        setFiles([...files, file]);
    };

    useEffect(() => console.log(files), [files])

    return (
        <div className="flex flex-col w-full gap-6 pt-[14px] pb-6">
            {
                files.length ? (
                    <div className="flex flex-col gap-2">
                        {
                            files.length ?
                                files.map((file, index) => (
                                    <div key={index}
                                         className="w-full flex justify-between bg-base-gray px-6 py-[15px] rounded-[10px] box-border">
                                        <div className="flex gap-3">
                                            <Image src={"/file.svg"} alt="file" width={16} height={20}/>
                                            <p className="text-20">{file.name}</p>
                                        </div>

                                        <div onClick={() => setFiles([...files.filter((_, i) => i !== index)])} className="cursor-pointer flex justify-center items-center">
                                            <Image className="min-w-[16px] min-h-[16px]" src={"/close.svg"} alt="file" width={16} height={16}/>
                                        </div>
                                    </div>
                                )) : null
                        }
                    </div>
                ) : null
            }

            <label className="w-full flex gap-5 items-center">
                <span className="flex gap-3 items-center cursor-pointer">
                    <Image src={"/image-picker.svg"} alt="image picker" width={44} height={44} />
                    <p className="text-20 text-white">прикрепить файл</p>
                </span>

                <input
                    type="file"
                    accept=".doc, .pdf, .txt"
                    className="hidden"
                    onChange={uploadHandler}
                />
            </label>
        </div>
    );
}

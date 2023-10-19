'use client';

import Tag from "@/components/common/tags/tag";
import Image from "next/image";
import Scrollbar from "@/components/common/scrollbar";

export default function NewsPage() {
    return (
        <div className="flex flex-col items-center w-full overflow-hidden justify-between pt-[200px] lg:pt-[140px] gap-[120px] lg:gap-[60px] box-border lg:pb-[60px]">
            <div className="w-full flex justify-between h-[210px] lg:h-auto px-[50px] lg:flex-col lg:px-[20px] lg:gap-6 ">
                <div className="flex items-start gap-8 max-w-[610px]">
                    <Image className="pt-4 lg:pt-0 lg:w-[44px]" src={'/svg/arrow-left.svg'} alt={'/src/arrow-left.svg'} width={63} height={49} />
                    <h1 className="text-heading-l text-white lg:text-3xl lg:leading-9">Тусовка в офисе 2023</h1>
                </div>

                <div className="flex justify-between flex-col max-w-[395px] flex-wrap gap-[10px]">
                    <div className="flex">
                        <Tag title="события" />
                    </div>

                    <p className="text-20 max-w-[400px] lg:text-[15px] lg:mt-3 lg:font-medium">
                        Тут должно быть краткое описание события, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка
                    </p>
                </div>
            </div>

            <Scrollbar images={['/party.png', '/party.png', '/party.png']} />

            <div className="w-full flex justify-end px-[50px] lg:px-5">
                <div className="w-full flex flex-col gap-[10px] max-w-[742px] lg:max-w-full">
                    <div className="w-full bg-border-gray h-[1px]" />

                    <div className="flex justify-end pt-[5px]">
                        <p className="text-20 text-white max-w-[400px] lg:max-w-full lg:text-[15px] lg:font-medium">
                            Пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием. Чтобы создать вебинар понадобится потратить несколько минут: подключить эфир через zoom или YouTube, поставить модератора на эфир и настроить сценарий комментариев. По завершению эфира пользователю предоставляется возможность создать автовебинар с сохранением комментариев, сценария всплывающих окон. Стоимость проведения вебинара списывается с “баланса” пользователя автоматически.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

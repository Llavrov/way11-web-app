'use client';

import Tag from "@/components/common/tags/tag";
import Image from "next/image";
import Scrollbar from "@/components/common/scrollbar";

export default function NewsPage() {
    return (
        <div className="flex flex-col items-center w-full overflow-hidden justify-between pt-[200px] gap-[120px] box-border">
            <div className="w-full flex justify-between h-[210px] px-[50px]">
                <div className="flex items-start gap-8 max-w-[610px]">
                    <Image className="pt-4" src={'/svg/arrow-left.svg'} alt={'/src/arrow-left.svg'} width={63} height={49} />
                    <h1 className="text-heading-l text-white">Тусовка в офисе 2023</h1>
                </div>

                <div className="flex justify-between flex-col max-w-[395px] flex-wrap gap-[10px]">
                    <div className="flex">
                        <Tag title="события" />
                    </div>

                    <p className="text-20 max-w-[400px]">
                        Тут должно быть краткое описание события, просто в общих словах, что, да как, но примерно в таком объеме текста и ещё чуть-чуть, вот теперь всё. Ну может ещё 1 строчка
                    </p>
                </div>
            </div>

            <Scrollbar images={['/party.png', '/party.png', '/party.png']} />

            <div className="w-full flex justify-end px-[50px]">
                <div className="w-full flex flex-col gap-[10px] max-w-[742px]">
                    <div className="w-full bg-border-gray h-[1px]" />

                    <div className="flex justify-end pt-[5px]">
                        <p className="text-20 text-white max-w-[400px]">
                            Пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием. Чтобы создать вебинар понадобится потратить несколько минут: подключить эфир через zoom или YouTube, поставить модератора на эфир и настроить сценарий комментариев. По завершению эфира пользователю предоставляется возможность создать автовебинар с сохранением комментариев, сценария всплывающих окон. Стоимость проведения вебинара списывается с “баланса” пользователя автоматически.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

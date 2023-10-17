'use client';

import TagGray from "@/components/common/tags/tagGray";
import CardOfService from "@/components/common/cards/CardOfService";
import Image from "next/image";

export default function AboutUsPage() {
    return (
        <div className="flex flex-col items-center w-full relative overflow-hidden justify-between pb-[120px] gap-[120px] box-border">
            <div className="h-screen w-full relative">
                <div className="absolute h-screen w-full top-0">
                    <div className="w-full h-screen bg-black opacity-80 absolute top-0" />
                    <Image
                        className="w-full h-screen object-cover"
                        src={'/background-about-us.png'}
                        alt={'/background-about-us.png'}
                        width={1440}
                        height={750}
                    />
                </div>
                <div className="absolute bottom-[50px] w-full flex justify-between h-[145px] px-[50px]">
                    <div className="flex items-start gap-8 max-w-[280px]">
                        <h1 className="text-heading-l text-white leading-[78px]">
                            о студии
                            <p className="text-gray m-0">с 2022</p>
                        </h1>
                    </div>

                    <div className="flex justify-between flex-col max-w-[395px] flex-wrap gap-[10px]">
                        <p className="text-20 max-w-[400px]">
                            Команда Way11 поможет вам реализовать IT‑решения для любого бизнеса. В основе наших проектов лежат идеи, основанные на аналитике, креативе и технологиях.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-between flex-wrap sm:p-3 px-[50px]">
                <div className="flex flex-col gap-2">
                    <div className="flex">
                        <TagGray title="наша миссия" />
                    </div>
                    <h2 className="text-6xl font-bold text-white my-0">приоритеты</h2>
                </div>

                <div className="w-full max-w-[742px] flex flex-col gap-[70px]">
                    <CardOfService tag="тезис" description="Пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием. Чтобы создать вебинар понадобится потратить несколько минут: подключить эфир через zoom или YouTube, поставить модератора на эфир и настроить сценарий комментариев. По завершению эфира пользователю предоставляется возможность создать автовебинар с сохранением комментариев, сценария всплывающих окон. Стоимость проведения вебинара списывается с “баланса” пользователя автоматически." />
                </div>
            </div>

            <div className="w-full flex justify-between flex-wrap sm:p-3 px-[50px]">
                <div className="flex flex-col gap-2">
                    <div className="flex">
                        <TagGray title="всегда на связи" />
                    </div>
                    <h2 className="text-6xl font-bold text-white my-0">наши эксперты</h2>
                </div>

                <div className="w-full max-w-[742px] flex flex-col gap-[70px]">
                    <CardOfService tag="тезис" description="Пользователь создаёт мероприятие за 1 минуту и может отправлять ссылку для регистрации своим зрителям. В день вебинара по базе зарегистрированных пользователей пройдет рассылка с напоминанием. Чтобы создать вебинар понадобится потратить несколько минут: подключить эфир через zoom или YouTube, поставить модератора на эфир и настроить сценарий комментариев. По завершению эфира пользователю предоставляется возможность создать автовебинар с сохранением комментариев, сценария всплывающих окон. Стоимость проведения вебинара списывается с “баланса” пользователя автоматически." />
                </div>
            </div>
        </div>
    )
}

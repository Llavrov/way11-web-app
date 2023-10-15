import { Swiper, SwiperSlide } from "swiper/react";
import {useRef} from "react";
import CardOfNews from "@/components/common/cards/CardOfNews";

type TCardSwiper = {
    title: string;
    image: string;
}

export default function CardsSwiper({ cards }: { cards: TCardSwiper[] }) {
    const swiperRef = useRef();

    const sliderSettings = {
        440: { slidesPerView: 1, spaceBetween: 30 },
        680: { slidesPerView: 2, spaceBetween: 30 },
        1024: { slidesPerView: 3, spaceBetween: 30 },
    };

    return (
        <div className="swiper-component ml-[-400px] max-w-[1186px]">
            <Swiper
                style={{
                    width: '1186px',
                    height: '462px'
                }}
                loop={true}
                spaceBetween={10}
                navigation={{
                    prevEl: '#swiper-button-prev',
                    nextEl: '#swiper-button-next'
                }}
                initialSlide={0}
                slidesPerView={3}
                breakpoints={sliderSettings}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                className="pr-[400px]"
            >
                {
                    cards && cards.map(({title, image}, index) => (
                        <SwiperSlide key={title} className={`swiper-slide max-w-[390px] ${index === cards.length - 1 ? 'pr-[400px]' : ''}`}>
                            <CardOfNews title={title} image={image} link={'/'} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
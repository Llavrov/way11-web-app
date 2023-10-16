import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import { useRef } from "react";
import CardOfNews from "@/components/common/cards/CardOfNews";

type TCardSwiper = {
    title: string;
    image: string;
};

export default function CardsSwiper({
    cards,
    prevBtn,
    nextBtn,
}: {
    cards: TCardSwiper[];
    prevBtn: React.RefObject<HTMLDivElement>;
    nextBtn: React.RefObject<HTMLDivElement>;
}) {
    const swiperRef = useRef();

    const sliderSettings = {
        440: { slidesPerView: 1, spaceBetween: 10 },
        680: { slidesPerView: 2, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 10 },
    };


    return (
        <div className="swiper-component max-w-[1186px]">
            <Swiper
                style={{
                    width: '1186px',
                    height: '462px',
                }}
                modules={[Navigation]}
                navigation={{
                    prevEl: prevBtn.current ?? '',
                    nextEl: nextBtn.current ?? '',
                }}
                loop={true}
                slidesPerGroup={1}
                initialSlide={0}
                slidesPerView={3}
                breakpoints={sliderSettings}
                onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiperRef.current = swiper;
                }}
                effect="fade"
                className="pr-[400px]"
            >
                {cards &&
                    cards.map(({ title, image }, index) => (
                        <SwiperSlide
                            key={title}
                            className={`swiper-slide max-w-[390px]`}
                        >
                            <CardOfNews title={title} image={image} link={'/'} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

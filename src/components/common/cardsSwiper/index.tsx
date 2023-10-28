import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from 'swiper/modules';
import { useRef } from "react";
import CardOfNews from "@/components/common/cards/CardOfNews";

type TCardSwiper = {
    title: string;
    image: string;
    link: string;
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
        <div
             className="swiper-component w-[1586px] max-w-[1586px] pl-[800px] ml-[-390px] lg:pl-4 lg:ml-0"
             style={{
                 paddingLeft: cards.length <= 3 ? '0' : '800px',
                 marginLeft: cards.length <= 3 ? '0' : '-390px'
             }}>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: prevBtn.current ?? '',
                    nextEl: nextBtn.current ?? '',
                }}
                loop={cards.length > 3}
                slidesPerGroup={1}
                initialSlide={(window && window?.innerWidth >= 768) ? 1 : 0}
                slidesPerView={3}
                breakpoints={sliderSettings}
                onBeforeInit={(swiper) => {
                    // @ts-ignore
                    swiperRef.current = swiper;
                }}
                effect="fade"
                className="w-[1186px] lg:w-full lg:h-[367px] h-[462px] pr-[400px] lg:pr-0"
                style={{
                    paddingRight: cards.length <= 3 ? '0' : '400px'
                }}
            >
                {cards &&
                    cards.map(({ title, image, link }, index) => (
                        <SwiperSlide
                            key={title + index}
                            className={`swiper-slide w-[390px] min-w-[390px] lg:min-w-[272px] lg:max-w-[272px] lg:w-[272px] lg:px-5 box-border`}
                            style={{
                                opacity: cards.length <= 3 ? '1' : 'inherit'
                            }}
                        >
                            <CardOfNews title={title} image={image} link={link} position={index % 2 === 0 ? 'object-left' : 'object-right' } />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}

'use client';

import PreviewBlock from "@/components/pages/main/preview-block/PreviewBlock";
import AboutUs from "@/components/pages/main/about-us/AboutUs";
import OurClients from "@/components/pages/main/our-clients/OurClients";
import OurPhilosophy from "@/components/pages/main/our-philosophy/OurPhilosophy";
import OurNews from "@/components/pages/main/our-news/OurNews";
import ContactUs from "@/components/pages/main/contact-us/ContactUs";
import Cases from "@/components/pages/main/cases/Cases";
import OurServices from "@/components/pages/main/our-services/OurServices";
import Footer from "@/components/common/footer/Footer";
import CardsSwiper from "@/components/common/cardsSwiper";

export default function MainPage() {
    return (
        <div className="flex flex-col items-center w-full overflow-hidden justify-between">
            <PreviewBlock />

            <section className="flex flex-col items-center w-full gap-[240px] py-[120px]">
                <AboutUs />
                <Cases />

                <OurClients />
                <OurPhilosophy />
                <OurServices />

                <OurNews />
                <ContactUs />
            </section>
        </div>
    )
}

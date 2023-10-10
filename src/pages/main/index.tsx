'use client';

import PreviewBlock from "@/pages/main/preview-block/PreviewBlock";
import AboutUs from "@/pages/main/about-us/AboutUs";
import OurClients from "@/pages/main/our-clients/OurClients";
import OurPhilosophy from "@/pages/main/our-philosophy/OurPhilosophy";
import OurNews from "@/pages/main/our-news/OurNews";
import ContactUs from "@/pages/main/contact-us/ContactUs";
import Cases from "@/pages/main/cases/Cases";

export default function Main() {
    return (
        <div className="flex flex-col items-center w-full overflow-hidden justify-between">
            <PreviewBlock />

            <section className="flex flex-col items-center w-full gap-[240px] py-[120px]">
                <AboutUs />
                <Cases />

                <OurClients />
                <OurPhilosophy />
                <OurNews />

                <ContactUs />
            </section>
        </div>
    )
}

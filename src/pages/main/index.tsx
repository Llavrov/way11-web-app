'use client';

import PreviewBlock from "@/pages/main/preview-block/PreviewBlock";
import AboutUs from "@/pages/main/about-us/AboutUs";

export default function Main() {
    return (
        <div className="flex flex-col items-center w-full overflow-hidden justify-between">
            <PreviewBlock />
            <AboutUs />
        </div>
    )
}

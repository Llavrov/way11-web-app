'use strict'

import PreviewBlock from "@/pages/main/preview-block/PreviewBlock";
import AboutUs from "@/pages/main/about-us/AboutUs";

export default function Main() {
    return (
        <div className="w-full flex flex-col items-center">

            <PreviewBlock />
            <AboutUs />
        </div>
    )
}

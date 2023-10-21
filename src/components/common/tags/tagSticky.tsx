import { motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TagGray from "./tagGray";
import {ONE_SECOND} from "@/components/common/header/Header";

export const TABLET = 1370;

const fadeIdVariants = {
    hidden: {
        opacity: 0,
        transition: {
            duration: 2,
            type: "spring",
            stiffness: 50
        }
    },
    animationOne: {
        opacity: 1,
        transition: {
            duration: 2,
            type: "spring",
            stiffness: 50
        }
    },
    exit: {
        opacity: 0
    }
}

function TagSticky({ heightArea, container, title, tagText }: {heightArea: number, container: React.RefObject<HTMLDivElement>, title: string, tagText: string}) {
    const utpRef = useRef(null);
    const { scrollY } = useScroll();
    const [position, setPosition] = useState<any>('relative');
    const [top, setTop] = useState<any>('0px');
    const [scrollTop, setScrollTop] = useState({
        lastScroll: 0,
        isScrollTop: true,
        lastUpdate: 0
    });

    useEffect(() => {
        const updateOpacity = () => {
            if ((window && window?.innerWidth) >= TABLET) {
                // @ts-ignore
                const innerHeightOfContainer = String(container.current?.getBoundingClientRect()?.height - 800);
                // @ts-ignore
                const distanceFromTop = utpRef?.current?.getBoundingClientRect()?.top + window.scrollY;
                const scrollRange = [distanceFromTop, distanceFromTop + +innerHeightOfContainer + 500];
                const scrollProgress = (scrollY.get() - scrollRange[0]) / (scrollRange[1] - scrollRange[0]);

                if (scrollProgress > -0.08 && scrollProgress < 1 && window.innerWidth >= +innerHeightOfContainer) {
                    setPosition('fixed');
                    setTop('0')
                } else if (scrollProgress >= 1) {
                    setPosition('relative');
                    setTop(+innerHeightOfContainer + 620)
                } else {
                    setPosition('relative');
                    setTop('0px')
                }
            }

            if (scrollTop.lastScroll >= scrollY.get() && scrollTop.lastUpdate > ONE_SECOND) {
                setScrollTop({
                    lastScroll: scrollY.get(),
                    isScrollTop: true,
                    lastUpdate: Date.now() - scrollTop.lastUpdate,
                })
            } else {
                setScrollTop({
                    lastScroll: scrollY.get(),
                    isScrollTop: false,
                    lastUpdate: Date.now() - scrollTop.lastUpdate,
                })
            }
        };

        scrollY.on('change', updateOpacity);
    }, [scrollY, utpRef, container, scrollTop]);

    return (
        <motion.div
            ref={utpRef}
        >
            <motion.div className='h-[200px] lg:h-auto pt-[50px] opacity-1'
                variants={fadeIdVariants}
                initial="hidden"
                whileInView="animationOne"
                exit='exit' 
                style={{
                    position,
                    top,
                    paddingTop: (scrollTop.isScrollTop && position !== 'relative') ? '160px' : '50px',
                    transition: '0.3 padding',
                }}
            >
                <motion.div className="flex flex-col gap-1">
                    <div className="flex">
                        <TagGray title={tagText} />
                    </div>
                    <h2 className="text-6xl font-bold text-white my-0 lg:text-3xl lg:leading-9">
                        {title}
                    </h2>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default TagSticky;
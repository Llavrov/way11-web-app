import { motion, useScroll, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import TagGray from "./tagGray";


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

    useEffect(() => {
        const updateOpacity = () => {
            // @ts-ignore
            const innerHeightOfContainer = String(container.current?.getBoundingClientRect()?.height - 800);
            // @ts-ignore
            const distanceFromTop = utpRef?.current?.getBoundingClientRect()?.top + window.scrollY;
            const scrollRange = [distanceFromTop, distanceFromTop + +innerHeightOfContainer + 500];
            const scrollProgress = (scrollY.get() - scrollRange[0]) / (scrollRange[1] - scrollRange[0]);

            if (scrollProgress > -0.08 && scrollProgress < 1 && window.innerWidth >= +innerHeightOfContainer) {
                setPosition('fixed');
                setTop('120px')
            } else if (scrollProgress >= 1) {
                setPosition('relative');
                setTop(+innerHeightOfContainer + 620)
            } else {
                setPosition('relative');
                setTop('0px')
            }
        };

        scrollY.on('change', updateOpacity);
    }, [scrollY, utpRef, container]);

    return (
        <motion.div
            ref={utpRef}
        >
            <motion.div className='h-[200px] mt-10 opacity-1'
                variants={fadeIdVariants}
                initial="hidden"
                whileInView="animationOne"
                exit='exit' 
                style={{ position, top }}>
                <motion.div className="flex flex-col gap-1">
                    <div className="flex">
                        <TagGray title={tagText} />
                    </div>
                    <h2 className="text-6xl font-bold text-white my-0">
                        {title}
                    </h2>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default TagSticky;
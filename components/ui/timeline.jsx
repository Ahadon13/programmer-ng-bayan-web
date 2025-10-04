"use client";
import { animate, createScope, onScroll } from "animejs";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
    const ref = useRef(null);
    const containerRef = useRef(null);
    const [height, setHeight] = useState(0);

    const animeJsRoot = useRef(null);
    const scope = useRef(null);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    useEffect(() => {
        scope.current = createScope({ root: animeJsRoot }).add(() => {
            animate(".projectS", {
                opacity: [0, 1],
                ease: "easeInOutQuad",
                autoplay: onScroll({
                    container: ".scroll-container",
                    enter: "bottom-=30 top",
                    leave: "top+=500 bottom",
                    sync: true,
                    debug: false,
                }),
            });

            animate(".projectDeployed", {
                y: ["-1rem", "0rem"],
                opacity: [0, 1],
                ease: "easeInOutQuad",
                autoplay: onScroll({
                    container: ".scroll-container",
                    enter: "bottom-=50 top",
                    leave: "top+=400 bottom",
                    sync: true,
                    debug: false,
                }),
            });

            animate(".projectContent", {
                y: ["0rem", "1rem"],
                opacity: [0, 1],
                ease: "easeInOutQuad",
                autoplay: onScroll({
                    container: ".scroll-container",
                    enter: "bottom-=50 top",
                    leave: "top+=400 bottom",
                    sync: true,
                    debug: false,
                }),
            });
        });
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div
            className="w-full bg-transparent max-w-7xl mx-auto"
            ref={containerRef}
        >
            <div
                className="text-center pt-20 pb-28 max-sm:px-5 md:px-0 lg:px-0"
                ref={animeJsRoot}
            >
                <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight">
                    Our Projects
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed font-medium">
                    Discover our portfolio of innovative web solutions and
                    software projects. Each project reflects our commitment to
                    clean code, modern design, and exceptional user experience
                    for the Filipino tech community.
                </p>
            </div>
            <div ref={ref} className="relative pb-20">
                {data.map((item, index) => (
                    <div
                        key={item.title || index}
                        className="flex w-full justify-start pt-10 md:pt-30 md:gap-10"
                    >
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full bg-neutral-200 border border-neutral-300 p-2 dark:bg-neutral-700 dark:border-neutral-600" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-4xl font-bold text-neutral-500 dark:text-neutral-200 ">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-5 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};

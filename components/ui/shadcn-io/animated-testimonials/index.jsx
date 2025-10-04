"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
    className,
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    const isActive = (index) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    const randomRotateY = () => {
        return Math.floor(Math.random() * 21) - 10;
    };

    return (
        <div
            className={cn(
                "mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12",
                className
            )}
        >
            <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={testimonial.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index)
                                            ? 0
                                            : randomRotateY(),
                                        zIndex: isActive(index)
                                            ? 40
                                            : testimonials.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <img
                                        src={testimonial.src}
                                        alt={testimonial.name}
                                        width={500}
                                        height={500}
                                        draggable={false}
                                        className="h-full w-full rounded-3xl object-cover object-center"
                                    />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
                {/* Text Section with Fixed Overflow */}
                <div className="flex flex-col justify-between py-4">
                    <motion.div
                        key={active}
                        initial={{
                            y: 20,
                            opacity: 0,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        exit={{
                            y: -20,
                            opacity: 0,
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut",
                        }}
                        className="min-h-0 flex flex-col"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {testimonials[active].name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-neutral-400 mb-6">
                            {testimonials[active].designation}
                        </p>

                        {/* Fixed overflow with proper height constraint and scrollbar */}
                        <div className="max-h-48 md:max-h-56 overflow-y-auto pr-2 custom-scrollbar">
                            <motion.p className="text-base md:text-lg text-gray-600 dark:text-neutral-400 leading-relaxed">
                                {testimonials[active].quote
                                    .split(" ")
                                    .map((word, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{
                                                filter: "blur(10px)",
                                                opacity: 0,
                                                y: 5,
                                            }}
                                            animate={{
                                                filter: "blur(0px)",
                                                opacity: 1,
                                                y: 0,
                                            }}
                                            transition={{
                                                duration: 0.2,
                                                ease: "easeInOut",
                                                delay: 0.02 * index,
                                            }}
                                            className="inline-block"
                                        >
                                            {word}&nbsp;
                                        </motion.span>
                                    ))}
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Bigger Navigation Buttons */}
                    <div className="flex gap-4 pt-8 md:pt-6">
                        <button
                            onClick={handlePrev}
                            className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                        >
                            <ChevronLeft className="h-6 w-6 text-gray-700 transition-transform duration-300 group-hover/button:rotate-12" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="group/button flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
                        >
                            <ChevronRight className="h-6 w-6 text-gray-700 transition-transform duration-300 group-hover/button:-rotate-12" />
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }

                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #f1f1f1;
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #888;
                    border-radius: 10px;
                }

                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
        </div>
    );
};

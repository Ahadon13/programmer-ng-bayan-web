import React, { useState, useEffect, useRef } from "react";
import { animate } from "animejs";
import { Code, Smartphone, Monitor, Cpu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { GridPattern } from "../../../components/ui/shadcn-io/grid-pattern";
import { AnimatedTestimonials } from "../../../components/ui/shadcn-io/animated-testimonials";
import { FlipWords } from "../../../components/ui/shadcn-io/flip-words";
import { Timeline } from "../../../components/ui/timeline";
import { ImageModal } from "../../../components/ui/image-modal";
import { Link } from "@inertiajs/react";

// About Us Section Component
const AboutUsSection = () => {
    const observerRef = useRef();
    const animationRefs = useRef({});

    // Sample team/company images (replace with your actual images)
    const teamImages = [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop&crop=center",
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=center",
    ];

    // Animation functions
    const animateIn = (element, delay = 0) => {
        // Cancel any existing animation
        if (animationRefs.current[element.id]) {
            animationRefs.current[element.id].pause();
        }

        // Determine animation type based on element
        if (element.classList.contains("image-element")) {
            // Images animate from right
            animationRefs.current[element.id] = animate(element, {
                translateX: [100, 0],
                opacity: [0, 1],
                scale: [0.8, 1],
                rotate: [5, 0],
                duration: 800,
                delay: delay,
                easing: "easeOutCubic",
            });
        } else if (element.classList.contains("float-element")) {
            // Floating elements with rotation
            const finalOpacity = element.classList.contains("float-1")
                ? 0.2
                : 0.3;
            animationRefs.current[element.id] = animate(element, {
                scale: [0, 1],
                opacity: [0, finalOpacity],
                rotate: [45, 0],
                duration: 600,
                delay: delay,
                easing: "easeOutBack",
            });
        } else {
            // Text elements animate from bottom
            animationRefs.current[element.id] = animate(element, {
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 600,
                delay: delay,
                easing: "easeOutQuart",
            });
        }
    };

    const animateOut = (element) => {
        // Cancel any existing animation
        if (animationRefs.current[element.id]) {
            animationRefs.current[element.id].pause();
        }

        // Determine animation type based on element
        if (element.classList.contains("image-element")) {
            // Images animate to right
            animationRefs.current[element.id] = animate(element, {
                translateX: [0, 100],
                opacity: [1, 0],
                scale: [1, 0.8],
                rotate: [0, -5],
                duration: 400,
                easing: "easeInCubic",
            });
        } else if (element.classList.contains("float-element")) {
            // Floating elements
            const initialOpacity = element.classList.contains("float-1")
                ? 0.2
                : 0.3;
            animationRefs.current[element.id] = animate(element, {
                scale: [1, 0],
                opacity: [initialOpacity, 0],
                rotate: [0, -45],
                duration: 300,
                easing: "easeInBack",
            });
        } else {
            // Text elements animate down
            animationRefs.current[element.id] = animate(element, {
                translateY: [0, 20],
                opacity: [1, 0],
                duration: 300,
                easing: "easeInQuart",
            });
        }
    };

    useEffect(() => {
        // Initialize intersection observer
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Get delay based on element type and position
                        let delay = 0;
                        if (entry.target.id === "about-label") delay = 0;
                        else if (entry.target.id === "main-heading")
                            delay = 400;
                        else if (entry.target.id === "description") delay = 500;
                        else if (entry.target.id === "learn-more-btn")
                            delay = 600;
                        else if (entry.target.id === "img-1") delay = 700;
                        else if (entry.target.id === "img-2") delay = 800;
                        else if (entry.target.id === "img-3") delay = 800;
                        else if (entry.target.id === "img-4") delay = 800;
                        else if (entry.target.id === "float-1") delay = 1000;
                        else if (entry.target.id === "float-2") delay = 1000;

                        animateIn(entry.target, delay);
                    } else {
                        animateOut(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "50px",
            }
        );

        const elements = document.querySelectorAll("[data-animate]");
        elements.forEach((el) => {
            // Set initial state
            if (
                el.classList.contains("image-element") ||
                el.classList.contains("float-element")
            ) {
                el.style.opacity = "0";
                el.style.transform = el.classList.contains("image-element")
                    ? "translateX(100px) scale(0.8) rotate(5deg)"
                    : "scale(0) rotate(45deg)";
            } else {
                el.style.opacity = "0";
                el.style.transform = "translateY(30px)";
            }

            observerRef.current.observe(el);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            // Cancel all animations
            Object.values(animationRefs.current).forEach((animation) => {
                if (animation && animation.pause) animation.pause();
            });
        };
    }, []);

    return (
        <section className="px-5 py-16 lg:py-22 bg-white dark:bg-neutral-900 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        {/* About Us Label */}
                        <div
                            data-animate
                            id="about-label"
                            className="text-element"
                        >
                            <span className="text-gray-500 dark:text-neutral-400 text-sm font-medium tracking-wider uppercase">
                                About Us
                            </span>
                        </div>
                        {/* Main Heading */}
                        <div
                            data-animate
                            id="main-heading"
                            className="text-element"
                        >
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-neutral-500 leading-tight">
                                The Start of our{" "}
                                <span className="text-[#103a5e] dark:text-white">
                                    Journey!
                                </span>
                            </h2>
                        </div>
                        {/* Description */}
                        <div
                            data-animate
                            id="description"
                            className="text-element"
                        >
                            <p className="text-gray-600 dark:text-neutral-400 text-lg leading-relaxed">
                                Programmer ng Bayan is your trusted partner in
                                innovation—offering services from Arduino and
                                IoT projects to custom software development,
                                system integration, and expert consultation. We
                                are dedicated to turning ideas into powerful
                                digital solutions tailored to your needs.
                            </p>
                        </div>
                        {/* Learn More Button */}
                        <div
                            data-animate
                            id="learn-more-btn"
                            className="text-element"
                        >
                            <Link
                                href={route("about-us")}
                                className="inline-block bg-transparent border-2 border-[#103a5e] text-[#103a5e] dark:border-neutral-700 dark:text-white dark:hover:border-[#103a5e] px-8 py-3 rounded-full font-semibold hover:bg-[#103a5e] hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>

                    {/* Right Images Grid */}
                    <div className="relative">
                        <div className="grid grid-cols-12 gap-3 h-96">
                            {/* Large image - top left */}
                            <div
                                data-animate
                                id="img-1"
                                className="col-span-6 row-span-2 image-element"
                            >
                                <img
                                    src={teamImages[0]}
                                    alt="Team collaboration"
                                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                />
                            </div>

                            {/* Medium image - top right */}
                            <div
                                data-animate
                                id="img-2"
                                className="col-span-6 image-element"
                            >
                                <img
                                    src={teamImages[1]}
                                    alt="Team building"
                                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                />
                            </div>

                            {/* Small image - middle right */}
                            <div
                                data-animate
                                id="img-3"
                                className="col-span-3 image-element"
                            >
                                <img
                                    src={teamImages[2]}
                                    alt="Team meeting"
                                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                />
                            </div>

                            {/* Small image - bottom right */}
                            <div
                                data-animate
                                id="img-4"
                                className="col-span-3 image-element"
                            >
                                <img
                                    src={teamImages[3]}
                                    alt="Team celebration"
                                    className="w-full h-full object-cover rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Decorative floating elements */}
                        <div
                            data-animate
                            id="float-1"
                            className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#103a5e] to-blue-600 dark:from-[#103a5e] dark:to-blue-600 rounded-full float-element float-1"
                        ></div>

                        <div
                            data-animate
                            id="float-2"
                            className="absolute -bottom-6 -left-6 w-12 h-12 bg-gradient-to-br from-cyan-400 to-[#103a5e] dark:from-cyan-400 dark:to-[#103a5e] rounded-full float-element float-2"
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Services Section Component
const ServicesSection = () => {
    const observerRef = useRef();
    const animationRefs = useRef({});

    const services = [
        {
            id: "web-dev",
            number: "1",
            title: "Web Development",
            description:
                "We create modern, responsive websites and web applications using cutting-edge technologies, ensuring optimal performance and exceptional user experience.",
            icon: Code,
            delay: 200,
            position: "top",
        },
        {
            id: "mobile-dev",
            number: "2",
            title: "Mobile Development",
            description:
                "Custom mobile applications for iOS and Android platforms, designed to engage users and drive sustainable business growth.",
            icon: Smartphone,
            delay: 400,
            position: "bottom",
        },
        {
            id: "arduino-dev",
            number: "3",
            title: "Arduino & IoT Development",
            description:
                "From prototype to production, we develop innovative Arduino and IoT solutions that seamlessly connect physical and digital worlds.",
            icon: Cpu,
            delay: 600,
            position: "top",
        },
        {
            id: "consultation",
            number: "4",
            title: "System Integration & Consultation",
            description:
                "Strategic technology consulting and comprehensive system integration services to optimize your tech infrastructure and decision-making.",
            icon: Zap,
            delay: 800,
            position: "bottom",
        },
    ];

    // Animation functions
    const animateIn = (element, delay = 0) => {
        // Cancel any existing animation
        if (animationRefs.current[element.id]) {
            animationRefs.current[element.id].pause();
        }

        // Different animations based on element type
        if (element.id === "services-header") {
            animationRefs.current[element.id] = animate(element, {
                translateY: [50, 0],
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 1000,
                delay: delay,
                ease: "out(3)",
            });
        } else if (element.id === "services-cta") {
            animationRefs.current[element.id] = animate(element, {
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 800,
                delay: delay,
                ease: "out(2)",
            });
        } else if (element.classList.contains("service-card")) {
            // Service cards animate from below with scale
            animationRefs.current[element.id] = animate(element, {
                translateY: [60, 0],
                opacity: [0, 1],
                scale: [0.95, 1],
                duration: 900,
                delay: delay,
                easing: "cubic-bezier(0.25, 1, 0.5, 1)", // smoother spring-out
            });
        } else if (element.classList.contains("floating-element")) {
            // Floating elements
            animationRefs.current[element.id] = animate(element, {
                scale: [0, 1],
                opacity: [0, 1],
                rotate: [180, 0],
                duration: 600,
                delay: delay + 500,
                ease: "out(4)",
            });
        }
    };

    const animateOut = (element) => {
        // Cancel any existing animation
        if (animationRefs.current[element.id]) {
            animationRefs.current[element.id].pause();
        }

        if (element.id === "services-header") {
            animationRefs.current[element.id] = animate(element, {
                translateY: [0, -30],
                opacity: [1, 0],
                scale: [1, 0.95],
                duration: 600,
                ease: "in(2)",
            });
        } else if (element.id === "services-cta") {
            animationRefs.current[element.id] = animate(element, {
                translateY: [0, 20],
                opacity: [1, 0],
                duration: 400,
                ease: "in(2)",
            });
        } else if (element.classList.contains("service-card")) {
            animationRefs.current[element.id] = animate(element, {
                translateY: [0, 40],
                opacity: [1, 0],
                scale: [1, 0.95],
                duration: 500,
                easing: "cubic-bezier(0.4, 0, 0.2, 1)", // smoother ease-in
            });
        } else if (element.classList.contains("floating-element")) {
            animationRefs.current[element.id] = animate(element, {
                scale: [1, 0],
                opacity: [1, 0],
                rotate: [0, -180],
                duration: 300,
                ease: "in(2)",
            });
        }
    };

    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Get delay based on element
                        let delay = 0;
                        if (entry.target.id === "services-header") delay = 0;
                        else if (entry.target.id === "web-dev") delay = 400;
                        else if (entry.target.id === "mobile-dev") delay = 600;
                        else if (entry.target.id === "arduino-dev") delay = 800;
                        else if (entry.target.id === "consultation")
                            delay = 900;
                        else if (entry.target.id === "services-cta")
                            delay = 900;
                        else if (
                            entry.target.classList.contains("floating-element")
                        )
                            delay = 1000;

                        animateIn(entry.target, delay);
                    } else {
                        animateOut(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "100px",
            }
        );

        const elements = document.querySelectorAll("[data-animate-service]");
        elements.forEach((el) => {
            // Set initial state
            if (el.id === "services-header") {
                el.style.opacity = "0";
                el.style.transform = "translateY(50px) scale(0.95)";
            } else if (el.id === "services-cta") {
                el.style.opacity = "0";
                el.style.transform = "translateY(30px)";
            } else if (el.classList.contains("service-card")) {
                el.style.opacity = "0";
                el.style.transform = "translateY(60px) scale(0.9)";
            } else if (el.classList.contains("floating-element")) {
                el.style.opacity = "0";
                el.style.transform = "scale(0) rotate(180deg)";
            }

            observerRef.current.observe(el);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
            // Cancel all animations
            Object.values(animationRefs.current).forEach((animation) => {
                if (animation && animation.pause) animation.pause();
            });
        };
    }, []);

    return (
        <section className="py-16 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950 relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-[#103a5e]/5 dark:bg-neutral-700/20 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-32 right-16 w-48 h-48 bg-blue-400/10 dark:bg-neutral-600/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#103a5e]/5 dark:bg-neutral-700/20 rounded-full blur-xl"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20 max-sm:px-5">
                    <div data-animate-service id="services-header">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-neutral-100 mb-8 tracking-tight">
                            Offered Services
                        </h2>
                        <p className="text-lg md:text-xl text-gray-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed font-medium">
                            We are committed to delivering high-quality work
                            that exceeds expectations, with every project
                            handled with precision, integrity, and reliability.
                        </p>
                    </div>
                </div>

                {/* Services Container */}
                <div className="relative">
                    {/* Curved Connecting Line */}
                    <div className="hidden lg:block absolute inset-0 pointer-events-none">
                        <svg
                            className="w-full h-full"
                            viewBox="0 0 1200 600"
                            preserveAspectRatio="none"
                        >
                            <defs>
                                <linearGradient
                                    id="lineGradient"
                                    x1="0%"
                                    y1="0%"
                                    x2="100%"
                                    y2="0%"
                                >
                                    <stop offset="0%" stopColor="#fbbf24" />
                                    <stop offset="50%" stopColor="#f59e0b" />
                                    <stop offset="100%" stopColor="#d97706" />
                                </linearGradient>
                            </defs>
                            <path
                                d="M200 150 Q400 50 600 150 Q800 250 1000 150 Q1100 100 1150 180 Q1100 300 900 350 Q700 400 500 350 Q300 300 150 380 Q100 420 200 450"
                                stroke="url(#lineGradient)"
                                strokeWidth="4"
                                fill="none"
                                className="drop-shadow-sm"
                                strokeLinecap="round"
                                strokeDasharray="0"
                            />
                        </svg>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-5 gap-8">
                        {services.map((service) => {
                            const Icon = service.icon;

                            return (
                                <div
                                    key={service.id}
                                    data-animate-service
                                    id={service.id}
                                    className={`relative service-card ${
                                        service.position === "bottom"
                                            ? "lg:mt-24"
                                            : ""
                                    }`}
                                >
                                    {/* Service Card */}
                                    <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100/50 dark:border-neutral-800 hover:border-[#103a5e]/20 group relative overflow-hidden backdrop-blur-sm">
                                        {/* Background Pattern */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#103a5e]/2 to-blue-50/30 dark:via-neutral-800/40 dark:to-neutral-800/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Large Background Number */}
                                        <div className="absolute -top-4 right-0 text-[120px] font-black text-[#103a5e]/5 dark:text-neutral-700/20 leading-none select-none group-hover:text-[#103a5e]/10 transition-colors duration-500">
                                            {service.number}
                                        </div>

                                        {/* Icon Container */}
                                        <div className="relative z-10 mb-6">
                                            <div className="w-20 h-20 bg-gradient-to-br from-[#103a5e] via-blue-600 to-blue-700 dark:from-neutral-700 dark:via-neutral-600 dark:to-neutral-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg group-hover:shadow-xl">
                                                <Icon
                                                    className="w-10 h-10 text-white"
                                                    strokeWidth={1.5}
                                                />
                                            </div>

                                            {/* Service Number Badge */}
                                            <div className="absolute -top-2 -left-1 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                                                {service.number}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative z-10 space-y-4">
                                            <h3 className="text-2xl font-bold text-gray-900 dark:text-neutral-100 group-hover:text-orange-500 transition-colors duration-300 leading-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-neutral-400 leading-relaxed text-base group-hover:text-gray-700 dark:group-hover:text-neutral-300 transition-colors duration-300">
                                                {service.description}
                                            </p>
                                        </div>

                                        {/* Decorative Elements */}
                                        <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-[#103a5e]/10 to-blue-200/20 dark:from-neutral-700/20 dark:to-neutral-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm"></div>
                                        <div className="absolute top-1/2 -right-8 w-24 h-24 bg-gradient-to-br from-yellow-200/30 to-orange-300/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 blur-lg"></div>
                                    </div>

                                    {/* Floating Animation Elements */}
                                    <div
                                        data-animate-service
                                        id={`floating-${service.id}`}
                                        className="absolute -top-3 -right-3 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full floating-element"
                                    ></div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Call to Action */}
                <div
                    data-animate-service
                    id="services-cta"
                    className="text-center mt-16 p-5"
                >
                    <div className="bg-gradient-to-r from-[#103a5e] to-blue-600 dark:from-neutral-800 dark:to-neutral-700 rounded-2xl p-8 text-white">
                        <h3 className="text-3xl font-bold mb-4">
                            Ready to Start Your Project?
                        </h3>
                        <p className="text-xl mb-6 opacity-90">
                            Let's discuss how we can bring your innovative ideas
                            to life with our expertise.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-[#103a5e] dark:bg-neutral-100 dark:text-neutral-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-neutral-200 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Start Your Project
                            </button>
                            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-[#103a5e] dark:hover:text-neutral-900 dark:hover:bg-neutral-100 transition-all duration-300 transform hover:scale-105">
                                Get Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Alternating Marquee Component
const AlternatingMarquee = () => {
    const marqueeText =
        "FLEXIBLE • RESPONSIVE • SECURE • CUSTOMIZABLE • TECH-SAVVY • INNOVATIVE • SCALABLE • RELIABLE • EFFICIENT • USER-CENTRIC • ";

    const repeatedText = marqueeText.repeat(3);

    const containerStyle = {
        width: "100%",
        overflow: "hidden",
        backgroundColor: "transparent",
        padding: "1rem 0",
        position: "relative",
    };

    const rowStyle = {
        display: "flex",
        whiteSpace: "nowrap",
        fontSize: "6rem",
        fontWeight: "bold",
        fontFamily: "Sora, sans-serif",
        marginBottom: "0.3rem",
    };

    // Update colors to Tailwind neutral + dark mode
    const styleSheet = `
    @keyframes marqueeLeft {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-33.33%); }
    }

    @keyframes marqueeRight {
      0% { transform: translateX(-33.33%); }
      100% { transform: translateX(0%); }
    }

    .marquee-left { animation: marqueeLeft 50s linear infinite; }
    .marquee-right { animation: marqueeRight 50s linear infinite; }

    /* Light Mode */
    .text-solid {
      color: #0066ff;
      -webkit-text-stroke: 0;
    }
    .text-outline {
      color: transparent;
      -webkit-text-stroke: 2px #0066ff;
    }

    /* Dark Mode */
    .dark .text-solid {
      color: #e5e7eb !important; /* neutral-200 */
    }
    .dark .text-outline {
      color: transparent;
      -webkit-text-stroke: 2px #e5e7eb !important; /* neutral-200 */
    }
  `;

    const renderAlternatingText = (text, startWithSolid) =>
        text.split(" ").map((word, index) => {
            const isEven = index % 2 === 0;
            const shouldBeSolid = startWithSolid ? isEven : !isEven;
            return (
                <span
                    key={index}
                    className={shouldBeSolid ? "text-solid" : "text-outline"}
                >
                    {word + " "}
                </span>
            );
        });

    return (
        <section className="py-16 bg-gradient-to-br from-blue-100/30 via-white to-blue-200/20 dark:from-neutral-800 dark:to-neutral-800 relative overflow-hidden transition-colors duration-500">
            <div style={containerStyle}>
                <style>{styleSheet}</style>

                {/* Rows */}
                <div style={rowStyle}>
                    <div className="marquee-left flex">
                        {renderAlternatingText(repeatedText, true)}
                    </div>
                </div>

                <div style={rowStyle}>
                    <div className="marquee-right flex">
                        {renderAlternatingText(repeatedText, false)}
                    </div>
                </div>

                <div style={rowStyle}>
                    <div className="marquee-left flex">
                        {renderAlternatingText(repeatedText, true)}
                    </div>
                </div>

                <div style={rowStyle}>
                    <div className="marquee-right flex">
                        {renderAlternatingText(repeatedText, false)}
                    </div>
                </div>

                <div style={rowStyle}>
                    <div className="marquee-left flex">
                        {renderAlternatingText(repeatedText, true)}
                    </div>
                </div>
            </div>
        </section>
    );
};

// Project Section Component
const ProjectTimeline = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const handleOpen = (src) => setSelectedImage(src);
    const handleClose = () => setSelectedImage(null);

    const data = [
        {
            title: "LoRaCast",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-500 md:text-lg dark:text-neutral-200">
                        LoRaCast is a medical technology startup developing a
                        wireless long-range system for monitoring vital signs of
                        patients.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            "../../../storage/assets/images/loracast/loracast_device.jpg",
                            "../../../storage/assets/images/loracast/loracast_dashboard.jpg",
                            "../../../storage/assets/images/loracast/loracast_dashboard-2.jpg",
                            "../../../storage/assets/images/loracast/loracast_device-2.jpg",
                        ].map((src, i) => (
                            <div
                                key={i}
                                onClick={() => handleOpen(src)}
                                className="cursor-pointer"
                            >
                                <img
                                    src={src}
                                    alt={`LoRaCast ${i}`}
                                    className="h-44 w-full rounded-lg object-cover hover:scale-105 ease-in-out duration-200 transition shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] lg:h-60"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: "Growify",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal text-neutral-500 md:text-lg dark:text-neutral-200">
                        Growify is a real-time plant monitoring system for
                        mushrooms using Arduino and IoT technology. Growify
                        helps urban gardeners and farmers optimize plant health
                        and growth by providing real-time data on soil moisture,
                        temperature, humidity, and light levels through a
                        user-friendly mobile app.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            "../../../storage/assets/images/growify/growify_ui.jpg",
                            "../../../storage/assets/images/growify/growify_dashboard.jpg",
                            "../../../storage/assets/images/growify/growify_ui-4.jpg",
                            "../../../storage/assets/images/growify/growify_ui-3.jpg",
                        ].map((src, i) => (
                            <div
                                key={i}
                                onClick={() => handleOpen(src)}
                                className="cursor-pointer"
                            >
                                <img
                                    src={src}
                                    alt={`LoRaCast ${i}`}
                                    className="h-44 w-full rounded-lg object-cover hover:scale-105 ease-in-out duration-200 transition lg:h-60"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            ),
        },
    ];
    return (
        <section className="relative w-full overflow-clip py-16 border-b border-gray-100 dark:border-neutral-800 bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950">
            {/* Timeline */}
            <Timeline data={data} />
            {/* Modal */}
            <ImageModal
                isOpen={!!selectedImage}
                onClose={handleClose}
                imageSrc={selectedImage}
                alt="Project preview"
            />
        </section>
    );
};

// Testimonials Section Component
const TestimonialsSection = () => {
    const testimonials = [
        {
            quote: "Programmer ng Bayan transformed our Arduino IoT project into a seamless smart home system. Their expertise in both hardware and software development is truly exceptional. The team's dedication to quality and innovation exceeded our expectations.",
            name: "Maria Santos",
            src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=center",
        },
        {
            quote: "Their web development services helped us launch our e-commerce platform in record time. The attention to detail, responsive design, and smooth user experience have significantly boosted our online sales. Highly recommended!",
            name: "John Reyes",
            src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=center",
        },
        {
            quote: "Working with Programmer ng Bayan on our mobile app was a game-changer. They understood our vision perfectly and delivered a solution that our users love. The consultation services helped us make informed technology decisions.",
            name: "Angela Cruz",
            src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=center",
        },
        {
            quote: "The system integration expertise of Programmer ng Bayan helped us streamline our operations. They successfully connected our legacy systems with modern solutions, improving efficiency by 60%. Truly a reliable tech partner!",
            name: "Roberto Garcia",
            src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=center",
        },
        {
            quote: "From concept to deployment, their team handled our Arduino project with professionalism and expertise. The IoT solution they developed has revolutionized our agricultural monitoring system. Outstanding work!",
            name: "Lisa Mendoza",
            src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=center",
        },
    ];
    return (
        <section className="py-16 bg-white dark:bg-neutral-900">
            <div className="max-w-7xl mx-auto px-5">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                        Testimonials
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed font-medium">
                        What our clients say about us
                    </p>
                </div>
                <AnimatedTestimonials testimonials={testimonials} />
            </div>
        </section>
    );
};

export default function Home() {
    const [showButtons, setShowButtons] = useState(false);
    const sections = [
        "About",
        "Services",
        "Marquee",
        "Projects",
        "Testimonials",
    ];

    // Scroll to top on component mount/refresh
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
        setTimeout(() => setShowButtons(true), 1000);
    }, []);

    return (
        <>
            <section className="max-w-7xl mx-auto max-xl:!mx-5 sm:px-6 lg:px-8 pt-24 pb-32 mt-20 relative overflow-hidden">
                <GridPattern
                    squares={[
                        [20, 2],
                        [5, 7],
                        [24, 15],
                        [1, 15],
                        [2, 6],
                        [4, 18],
                        [2, 10],
                        [5, 3],
                        [27, 9],
                        [28, 8],
                        [27, 4],
                    ]}
                    className={cn(
                        "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                        "opacity-90",
                        "fill-[#103a5e]",
                        "stroke-[#103a5e]/10 dark:stroke-neutral-200/5",
                        "max-sm:hidden"
                    )}
                />
                {/* Content */}
                <div
                    data-aos="zoom-in"
                    className="text-center space-y-8 z-10 relative"
                >
                    <h1 className=" font-extrabold flex flex-col text-[#103a5e] dark:text-white leading-tight">
                        <h1 className="text-5xl md:text-6xl mb-8">
                            Programmer ng Bayan
                        </h1>
                        <span className="italic text-4xl md:text-5xl">
                            "Your{" "}
                            <FlipWords
                                words={[
                                    "Complete",
                                    "Modern",
                                    "Awesome",
                                    "Reliable",
                                    "Innovative",
                                    "Trusted",
                                    "Scalable",
                                    "Creative",
                                    "Future-ready",
                                    "Next-gen",
                                    "Intelligent",
                                ]}
                                duration={1500}
                                className="text-blue-600 pb-2"
                            />
                            Tech Solutions Partner"
                        </span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-neutral-400 max-w-3xl mx-auto">
                        From Arduino & IoT projects to custom software
                        development, system integration, and expert consultation
                        - we bring your innovative ideas to life.
                    </p>
                    {/* Buttons with fade + slide animation */}
                    <div className="pt-14 px-4 flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            className={`bg-[#103a5e] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-200 transform
                            ${
                                showButtons
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-10"
                            }
                            hover:scale-105 hover:shadow-lg`}
                        >
                            Start Your Project
                        </button>

                        <button
                            className={`bg-white border border-[#103a5e] text-[#103a5e] dark:bg-neutral-700 dark:border-neutral-700 dark:text-white px-6 py-2 rounded-xl font-semibold transition-all duration-200 transform
                            ${
                                showButtons
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-10"
                            }
                            hover:scale-105 hover:shadow-lg`}
                        >
                            Get Consultation
                        </button>
                    </div>
                </div>
            </section>

            {/* Sections with custom About section */}
            {sections.map((section) => {
                if (section === "About") {
                    return (
                        <div key={section} id="about">
                            <AboutUsSection />
                        </div>
                    );
                }

                if (section === "Services") {
                    return (
                        <div key={section} id="services">
                            <ServicesSection />
                        </div>
                    );
                }

                if (section === "Marquee") {
                    return (
                        <div key={section} id="marquee">
                            <AlternatingMarquee />
                        </div>
                    );
                }
                if (section === "Testimonials") {
                    return (
                        <div key={section} id="testimonials">
                            <TestimonialsSection />
                        </div>
                    );
                }

                if (section === "Projects") {
                    return (
                        <div key={section} id="projects">
                            <ProjectTimeline />
                        </div>
                    );
                }

                return (
                    <section
                        key={section}
                        id={section.toLowerCase().replace(" ", "-")}
                        className="py-20 border-b border-gray-100 max-w-7xl mx-auto max-xl:!mx-5"
                    >
                        <div className="max-w-7xl mx-auto max-xl:!mx-5 px-4 sm:px-6 lg:px-8">
                            <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
                                {section}
                            </h2>
                            <p className="text-gray-600 text-center max-w-2xl mx-auto">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris.
                            </p>
                        </div>
                    </section>
                );
            })}
        </>
    );
}

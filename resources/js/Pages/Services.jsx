import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { MonitorPlay, Smartphone, Cpu, Layers, ArrowRight } from "lucide-react";
import {
    SiLaravel,
    SiPhp,
    SiTailwindcss,
    SiMysql,
    SiReact,
    SiJavascript,
    SiNodedotjs,
    SiPython,
    SiArduino,
    SiHtml5,
    SiCss3,
    SiGit,
    SiGithub,
    SiDocker,
    SiUnity,
    SiHostinger,
    SiVuedotjs,
    SiNuxtdotjs,
    SiFigma,
    SiUbuntu,
    SiAndroidstudio,
    SiXcode,
    SiFlutter,
    SiWordpress,
    SiFramer,
    SiLivewire,
} from "react-icons/si";
import { TbBrandAlpineJs, TbBrandCSharp, TbBrandVscode } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { GridPattern } from "../../../components/ui/shadcn-io/grid-pattern";

export default function ServicesPage() {
    const services = [
        {
            id: "web",
            title: "Web Development",
            short: "Responsive, performant web apps using modern stacks (React, TALL, Laravel, Node).",
            details:
                "We build high-performance websites and enterprise-grade web applications tailored to your needs. Our expertise covers SPAs, PWAs, API integrations, testing, and CI/CD pipelines.",
            features: [
                "SPAs & SSR",
                "Progressive Web Apps",
                "E2E testing & CI/CD",
            ],
            icon: MonitorPlay,
        },
        {
            id: "mobile",
            title: "Mobile Development",
            short: "Cross-platform & native mobile apps with smooth UX and offline support.",
            details:
                "We deliver cross-platform and native mobile apps that provide seamless user experiences, including offline functionality and app store deployment support.",
            features: [
                "Flutter & Android/iOS",
                "Native Modules",
                "App store deployment",
            ],
            icon: Smartphone,
        },
        {
            id: "iot",
            title: "Arduino & IoT Development",
            short: "Prototyping, device firmware, connectivity, telemetry and dashboards.",
            details:
                "We create IoT solutions from device firmware to backend dashboards, enabling you to monitor, automate, and optimize with technologies like Arduino, ESP32, MQTT, and REST APIs.",
            features: [
                "Arduino / ESP32",
                "MQTT / REST APIs",
                "Sensor integration",
            ],
            icon: Cpu,
        },
        {
            id: "si",
            title: "System Integration & Consultation",
            short: "Architecture design, integrations, migrations, and security reviews.",
            details:
                "We provide enterprise-grade integration, migration, and consultation services, ensuring scalability, security, and seamless operation across your IT infrastructure.",
            features: [
                "API design",
                "Enterprise integrations",
                "Security & audits",
            ],
            icon: Layers,
        },
    ];

    const tools = [
        { name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
        { name: "PHP", icon: <SiPhp className="text-indigo-700" /> },
        { name: "Livewire", icon: <SiLivewire className="text-pink-500" /> },
        {
            name: "Alpine.js",
            icon: <TbBrandAlpineJs className="text-cyan-700" />,
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className="text-cyan-500" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
        { name: "React", icon: <SiReact className="text-sky-400" /> },
        {
            name: "JavaScript",
            icon: <SiJavascript className="text-yellow-400" />,
        },
        { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
        { name: "Python", icon: <SiPython className="text-blue-500" /> },
        { name: "Arduino", icon: <SiArduino className="text-green-500" /> },
        { name: "HTML5", icon: <SiHtml5 className="text-orange-600" /> },
        { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        {
            name: "GitHub",
            icon: <SiGithub className="text-gray-800 dark:text-white" />,
        },
        { name: "Docker", icon: <SiDocker className="text-blue-400" /> },
        { name: "Unity", icon: <SiUnity className="text-black" /> },
        {
            name: "Hostinger",
            icon: <SiHostinger className="text-purple-600" />,
        },
        { name: "Vue.js", icon: <SiVuedotjs className="text-green-700" /> },
        { name: "Nuxt.js", icon: <SiNuxtdotjs className="text-green-500" /> },
        { name: "Figma", icon: <SiFigma className="text-neutral-600" /> },
        { name: "C#", icon: <TbBrandCSharp className="text-purple-700" /> },
        { name: "Java", icon: <FaJava className="text-red-700" /> },
        { name: "Ubuntu", icon: <SiUbuntu className="text-orange-600" /> },
        {
            name: "Android Studio",
            icon: <SiAndroidstudio className="text-green-600" />,
        },
        { name: "Xcode", icon: <SiXcode className="text-blue-600" /> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
        { name: "WordPress", icon: <SiWordpress className="text-blue-700" /> },
        { name: "Framer", icon: <SiFramer className="text-purple-600" /> },
        { name: "VS Code", icon: <TbBrandVscode className="text-blue-600" /> },
    ];

    const [activeService, setActiveService] = useState(null);
    const overlayRef = useRef(null);

    // Close overlay when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                overlayRef.current &&
                !overlayRef.current.contains(event.target)
            ) {
                setActiveService(null);
            }
        };

        if (activeService) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeService]);

    const toggleService = (id) => {
        setActiveService(activeService === id ? null : id);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#103a5e] to-blue-600 relative mt-32">
                {/* Background Animation */}
                <motion.div
                    className="absolute inset-0 bg-[url('../../../storage/assets/images/logo.svg')] opacity-10"
                    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "reverse",
                        repeatDelay: 1,
                    }}
                />
                <div className="w-full max-w-7xl mx-auto h-[400px] max-[1280px]:px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
                    <div className="z-10 text-white flex flex-col justify-center">
                        <motion.h1
                            className="text-5xl md:text-6xl font-extrabold"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Services
                        </motion.h1>
                        <motion.p
                            className="mt-4 text-lg max-w-xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            We create cutting-edge solutions for web, mobile,
                            IoT, and enterprise systems. From idea to execution,
                            we help you build products that scale.
                        </motion.p>
                    </div>
                    {/* Right Side Image / Icon */}
                    <div className="z-10 hidden md:flex items-center justify-center absolute max-[1280px]:right-6 right-0 top-6 h-full w-full md:w-auto">
                        <motion.img
                            src="../../../storage/assets/images/Handcoding.svg"
                            alt="Technology Illustration"
                            className="w-80 md:w-[400px] lg:w-[600px] drop-shadow-lg rounded-xl"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="relative min-h-screen bg-neutral-100 dark:bg-neutral-900 pt-24 pb-16 overflow-hidden">
                {/* Animated Background Blobs */}
                <motion.div
                    className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#103a5e]/20 blur-3xl"
                    animate={{ x: [0, 50, -50, 0], y: [0, -40, 40, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 14,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute top-20 -right-40 w-96 h-96 rounded-full bg-blue-700/20 blur-3xl"
                    animate={{ x: [0, -60, 60, 0], y: [0, 30, -30, 0] }}
                    transition={{
                        repeat: Infinity,
                        duration: 16,
                        ease: "easeInOut",
                    }}
                />

                <div className="relative max-w-6xl mx-auto px-6">
                    <header className="mb-12 text-center">
                        <motion.h2
                            className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#103a5e] dark:text-white"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            What We Offer
                        </motion.h2>
                        <motion.p
                            className="mt-3 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            From full-stack development to IoT and system
                            integration, we deliver reliable and scalable
                            solutions.
                        </motion.p>
                    </header>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {services.map((s) => {
                            const Icon = s.icon;
                            const isActive = activeService === s.id;
                            return (
                                <motion.div
                                    key={s.id}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative rounded-xl p-6 min-h-[200px] flex flex-col justify-between shadow-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 cursor-default"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex items-center gap-3">
                                            <div className="hidden sm:block p-3 rounded-md bg-[#103a5e]/10 text-[#103a5e] dark:bg-neutral-700 dark:text-white">
                                                <Icon className="w-7 h-7" />
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-semibold dark:text-white">
                                                    {s.title}
                                                </h4>
                                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                                    {s.short}
                                                </p>
                                            </div>
                                        </div>

                                        <motion.button
                                            onClick={() => toggleService(s.id)}
                                            className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg bg-[#103a5e] text-white shadow-md"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            {"Learn"}
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </div>

                                    <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-neutral-700 dark:text-neutral-400">
                                        {s.features.map((f) => (
                                            <span
                                                key={f}
                                                className="flex items-center gap-2 rounded-md bg-neutral-200 dark:bg-neutral-700 px-2 py-1"
                                            >
                                                <svg
                                                    className="w-3 h-3 opacity-80"
                                                    viewBox="0 0 8 8"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <circle
                                                        cx="4"
                                                        cy="4"
                                                        r="4"
                                                        fill="currentColor"
                                                    />
                                                </svg>
                                                {f}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Click Content Reveal */}
                                    <AnimatePresence>
                                        {isActive && (
                                            <motion.div
                                                ref={overlayRef}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 20 }}
                                                transition={{ duration: 0.3 }}
                                                className="absolute inset-0 rounded-xl bg-neutral-900/95 text-white p-6 flex flex-col justify-center"
                                            >
                                                {/* Close Button */}
                                                <div className="absolute top-6 right-6">
                                                    <motion.button
                                                        onClick={() =>
                                                            setActiveService(
                                                                null
                                                            )
                                                        }
                                                        className="inline-flex items-center gap-2 text-sm font-semibold px-3 py-2 rounded-lg bg-[#103a5e] text-white shadow-md"
                                                        whileHover={{
                                                            scale: 1.05,
                                                        }}
                                                        whileTap={{
                                                            scale: 0.95,
                                                        }}
                                                    >
                                                        {"Close"}
                                                        <ArrowRight className="w-4 h-4" />
                                                    </motion.button>
                                                </div>
                                                <h4 className="text-xl font-bold mb-3">
                                                    {s.title}
                                                </h4>
                                                <p className="text-sm leading-relaxed">
                                                    {s.details}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            );
                        })}
                    </div>

                    <footer className="mt-12 text-center text-sm text-neutral-600 dark:text-neutral-400">
                        Need a tailored quote? <strong>Contact us</strong> — we
                        love fast prototypes and long-term partnerships.
                    </footer>
                </div>
            </section>

            {/* Tools Section */}
            <section className="relative bg-white dark:bg-neutral-900 py-24">
                <div className="max-w-7xl mx-auto max-[1280px]:px-6 flex justify-center items-center relative">
                    <div className="w-full z-10">
                        <header className="mb-12 text-center">
                            <motion.h2
                                className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#103a5e] dark:text-white"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                Tools & Technologies
                            </motion.h2>
                            <motion.p
                                className="mt-3 text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                We use modern frameworks and technologies to
                                deliver secure, scalable, and high-performing
                                solutions.
                            </motion.p>
                        </header>

                        {/* Grid of Tools */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                            {tools.map((tool, index) => (
                                <motion.div
                                    key={tool.name || index}
                                    className="flex flex-col items-center justify-center rounded-xl p-6 shadow-md bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="text-5xl mb-3">
                                        {tool.icon}
                                    </div>
                                    <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-200">
                                        {tool.name}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <GridPattern
                        strokeDasharray="5 6"
                        className={cn(
                            "stroke-[#103a5e]/10 dark:stroke-neutral-700",
                            "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
                        )}
                    />
                </div>
            </section>
        </>
    );
}

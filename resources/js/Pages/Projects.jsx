import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
    "Web Development",
    "Mobile Development",
    "Arduino/IoT Development",
    "Consultancy",
];

const projects = [
    {
        title: "LoRaCast",
        description:
            "LoRaCast is a medical technology startup developing a wireless long-range system for monitoring vital signs of patients.",
        tags: ["Laravel", "IoT", "Arduino"],
        images: [
            "../../../storage/assets/images/loracast/loracast_device-2.jpg",
            "../../../storage/assets/images/loracast/loracast_dashboard.jpg",
            "../../../storage/assets/images/loracast/loracast_device.jpg",
            "../../../storage/assets/images/loracast/loracast_dashboard-2.jpg",
        ],
        categories: ["Web Development", "Arduino/IoT Development"],
    },
    {
        title: "Growify",
        description:
            "Growify is a real-time plant monitoring system for mushrooms using Arduino and IoT technology. It provides real-time data on soil moisture, temperature, humidity, and light levels through a mobile app.",
        tags: ["Laravel", "IoT", "Arduino"],
        images: [
            "../../../storage/assets/images/growify/growify_ui.jpg",
            "../../../storage/assets/images/growify/growify_dashboard.jpg",
            "../../../storage/assets/images/growify/growify_ui-4.jpg",
            "../../../storage/assets/images/growify/growify_ui-3.jpg",
        ],
        categories: ["Mobile Development", "Arduino/IoT Development"],
    },
];

export default function ProjectPage() {
    const [activeCategory, setActiveCategory] = useState("Web Development");
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fullscreen, setFullscreen] = useState(false);

    const filteredProjects = projects.filter((p) =>
        p.categories.includes(activeCategory)
    );

    const nextImage = () => {
        if (!selectedProject) return;
        setCurrentImageIndex(
            (prev) => (prev + 1) % selectedProject.images.length
        );
    };

    const prevImage = () => {
        if (!selectedProject) return;
        setCurrentImageIndex(
            (prev) =>
                (prev - 1 + selectedProject.images.length) %
                selectedProject.images.length
        );
    };

    const closeModal = () => {
        setSelectedProject(null);
        setFullscreen(false);
    };

    return (
        <section className="max-w-7xl mx-auto max-[1280px]:px-6 pb-20 mt-32 flex flex-col items-center justify-center">
            {/* Header */}
            <div className="flex flex-col items-center justify-center">
                <motion.h1
                    className="text-4xl font-bold pt-8 text-neutral-900 dark:text-white"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    Our Projects
                </motion.h1>

                <motion.p
                    className="text-lg text-neutral-600 dark:text-neutral-300 w-full md:w-[80%] text-center pt-1"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Explore the projects we've built since our team's inception,
                    highlighting our growth and collaboration.
                </motion.p>

                {/* Category Buttons (scrollable) */}
                <motion.div
                    className="relative w-full mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`rounded-full px-5 py-2 transition font-medium whitespace-nowrap ${
                                activeCategory === category
                                    ? "bg-primary text-white"
                                    : "bg-white text-black hover:bg-gray-200 dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-700"
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {category}
                        </motion.button>
                    ))}
                </motion.div>
            </div>

            {/* Project Cards */}
            <div className="grid md:grid-cols-2 gap-10 mt-20 w-full">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        className="rounded-2xl p-8 shadow-lg border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex flex-col flex-1 h-full">
                            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-2">
                                {project.title}
                            </h2>
                            <p className="text-sm text-neutral-700 dark:text-neutral-300 mb-5 leading-relaxed line-clamp-6">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-3 py-1 rounded-full text-sm font-medium"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-auto max-lg:hidden">
                                <motion.button
                                    className="bg-primary text-white font-semibold flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/90 transition whitespace-nowrap"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => {
                                        setSelectedProject(project);
                                        setCurrentImageIndex(0);
                                    }}
                                >
                                    View Project{" "}
                                    <ArrowRight className="size-5" />
                                </motion.button>
                            </div>
                        </div>

                        <div className="size-full lg:max-h-[300px] lg:max-w-[300px] mt-6 md:mt-0 rounded-xl overflow-hidden flex justify-center">
                            <img
                                src={project.images[0]}
                                alt={project.title}
                                className="size-full max-h-[350px] lg:max-w-[300px] lg:max-h-[300px] rounded-xl shadow-lg object-contain object-center bg-primary/10"
                            />
                        </div>
                        <div className="mt-10 flex justify-end lg:hidden w-full">
                            <motion.button
                                className="bg-primary text-white font-semibold flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary/90 transition whitespace-nowrap"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    setSelectedProject(project);
                                    setCurrentImageIndex(0);
                                }}
                            >
                                View Project <ArrowRight className="size-5" />
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modal Viewer */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center overflow-auto z-50 p-6"
                        onClick={closeModal}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="relative bg-white dark:bg-neutral-900 rounded-2xl p-6 w-full min-h-[500px] my-auto max-w-5xl shadow-xl flex flex-col md:flex-row"
                            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            {/* Carousel - Left Side */}
                            <div className="relative w-full flex-shrink-0 md:w-1/2 h-72 mt-5 md:h-auto flex items-center justify-center bg-neutral-100 dark:bg-neutral-800 rounded-xl overflow-hidden">
                                <motion.img
                                    key={currentImageIndex}
                                    src={
                                        selectedProject.images[
                                            currentImageIndex
                                        ]
                                    }
                                    alt="Project Slide"
                                    className="object-contain w-full h-[550px] cursor-pointer"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.4 }}
                                    onClick={() => setFullscreen(true)}
                                />

                                <button
                                    onClick={prevImage}
                                    className="absolute left-3 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
                                >
                                    <ChevronLeft />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-3 bg-black/40 text-white rounded-full p-2 hover:bg-black/60"
                                >
                                    <ChevronRight />
                                </button>
                            </div>

                            {/* Details - Right Side */}
                            <div className="flex-1 mt-6 md:mt-0 md:ml-6">
                                <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white mb-3">
                                    {selectedProject.title}
                                </h2>
                                <p className="text-neutral-700 dark:text-neutral-300 mb-5 leading-relaxed">
                                    {selectedProject.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 px-3 py-1 rounded-full text-sm font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Close Button */}
                            <button
                                className="absolute top-3 right-3 text-neutral-600 dark:text-neutral-300 hover:text-primary"
                                onClick={closeModal}
                            >
                                <X size={24} />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Fullscreen Carousel */}
            <AnimatePresence>
                {fullscreen && selectedProject && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center"
                        onClick={() => setFullscreen(false)}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.img
                            key={currentImageIndex}
                            src={selectedProject.images[currentImageIndex]}
                            alt="Full Screen"
                            className="object-contain w-full h-full max-h-screen max-w-6xl"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4 }}
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setFullscreen(false);
                            }}
                            className="absolute top-6 right-6 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
                        >
                            <X size={28} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                prevImage();
                            }}
                            className="absolute left-6 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
                        >
                            <ChevronLeft size={28} />
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                nextImage();
                            }}
                            className="absolute right-6 text-white bg-black/40 hover:bg-black/60 rounded-full p-2"
                        >
                            <ChevronRight size={28} />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

import React, { useEffect, useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import { motion } from "motion/react";

export default function About() {
    const [activeCategory, setActiveCategory] = useState("Web Developers");

    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    const teamMembers = [
        {
            name: "Ahadon Caraing",
            role: "Web Developers",
            image: "../../../storage/assets/images/team/caraing.jpg",
            phone: "+63 967 406 5638",
            email: "caraingahadon13@gmail.com",
            linkedin: "https://www.linkedin.com/in/ahadon113033",
        },
        {
            name: "Marvin Estolloso",
            role: "Web Developers",
            image: "../../../storage/assets/images/team/estolloso.jpg",
            phone: "+63 912 345 6789",
            email: "john.doe@example.com",
            linkedin: "https://www.linkedin.com/in/johndoe",
        },
        {
            name: "John frits Antipuesto",
            role: "Web Developers",
            image: "../../../storage/assets/images/team/antipuesto.png",
            phone: "+63 912 345 6789",
            email: "john.doe@example.com",
            linkedin: "https://www.linkedin.com/in/johndoe",
        },
        {
            name: "Lowell Jay Orcullo",
            role: "Web Developers",
            image: "../../../storage/assets/images/team/orcullo.jpg",
            phone: "+63 912 345 6789",
            email: "john.doe@example.com",
            linkedin: "https://www.linkedin.com/in/johndoe",
        },
        {
            name: "Michael Labastida",
            role: "Web Developers",
            image: "../../../storage/assets/images/team/labastida.jpg",
            phone: "+63 912 345 6789",
            email: "john.doe@example.com",
            linkedin: "https://www.linkedin.com/in/johndoe",
        },
        {
            name: "Michael Labastida",
            role: "Mobile Developers",
            image: "../../../storage/assets/images/team/labastida.jpg",
            phone: "+63 912 345 6789",
            email: "john.doe@example.com",
            linkedin: "https://www.linkedin.com/in/johndoe",
        },
        {
            name: "Michael Labastida",
            role: "UI/UX Designers",
            image: "../../../storage/assets/images/team/labastida.jpg",
            phone: "+63 912 345 6789",
            email: "john.doe@example.com",
            linkedin: "https://www.linkedin.com/in/johndoe",
        },
        {
            name: "Lowell Jay Orcullo",
            role: "Mobile Developers",
            image: "../../../storage/assets/images/team/orcullo.jpg",
            phone: "+63 912 345 6789",
            email: "john.doe@example.com",
            linkedin: "https://www.linkedin.com/in/johndoe",
        },
        {
            name: "Marvin Estolloso",
            role: "Arduino Developers",
            image: "../../../storage/assets/images/team/estolloso.jpg",
            phone: "+63 912 345 6789",
            email: "john.doe@example.com",
            linkedin: "https://www.linkedin.com/in/johndoe",
        },
    ];

    const categories = [
        "Web Developers",
        "Mobile Developers",
        "Arduino Developers",
        "UI/UX Designers",
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-[#103a5e] to-blue-600 mt-32">
                <div className="w-full h-[400px] max-w-7xl mx-auto max-[1280px]:px-5 bg-cover bg-no-repeat relative grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.img
                        src="../../../storage/assets/images/logo.svg"
                        alt="About Us"
                        className="object-cover object-center w-full absolute opacity-20 h-full z-10 -left-[250px] text-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        transition={{ duration: 1.5 }}
                    />

                    <div className="z-20 flex flex-col text-left text-white py-32">
                        <motion.h1
                            className="text-5xl md:text-6xl font-extrabold"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Our Stories
                        </motion.h1>
                        <motion.p
                            className="text-lg mt-2"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                        >
                            Our journey was far from easy—through countless
                            failures, we grew stronger and more united,
                            constantly learning and evolving into the successful
                            team we are today.
                        </motion.p>
                    </div>

                    <div className="z-20 relative grid-cols-3 gap-6 pt-10 hidden md:grid">
                        <div className="flex flex-col gap-4">
                            <motion.img
                                src="../../../storage/assets/images/about/aboutImage1.png"
                                alt="About Us"
                                className="object-cover object-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            />
                            <motion.img
                                src="../../../storage/assets/images/about/aboutImage4.png"
                                alt="About Us"
                                className="object-cover object-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <motion.img
                                src="../../../storage/assets/images/about/aboutImage2.png"
                                alt="About Us"
                                className="object-cover object-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            />
                            <motion.img
                                src="../../../storage/assets/images/about/aboutImage5.png"
                                alt="About Us"
                                className="object-cover object-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            />
                            <motion.img
                                src="../../../storage/assets/images/about/aboutImage7.png"
                                alt="About Us"
                                className="object-cover object-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.0 }}
                            />
                            <motion.img
                                src="../../../storage/assets/images/about/aboutImage9.png"
                                alt="About Us"
                                className="object-cover object-center max-[1180px]:hidden"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                            />
                        </div>
                        <div className="flex flex-col gap-4">
                            <motion.img
                                src="../../../storage/assets/images/about/aboutImage3.png"
                                alt="About Us"
                                className="object-cover object-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.4 }}
                            />
                            <motion.img
                                src="../../../storage/assets/images/about/aboutImage6.png"
                                alt="About Us"
                                className="object-cover object-center"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.6 }}
                            />
                            <motion.img
                                src="../../../storage/assets/images/about/aboutImage8.png"
                                alt="About Us"
                                className="object-cover object-center max-[1180px]:hidden"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.8 }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* How We Started */}
            <section className="max-w-7xl mx-auto max-[1280px]:px-5 flex flex-col mt-16">
                <div>
                    <motion.h1
                        className="text-4xl font-bold"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        How We Started
                    </motion.h1>
                </div>
                <motion.div
                    className="mt-4 text-lightGray leading-relaxed space-y-4 max-[1180px]:w-full w-[800px]"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <p>
                        We began our journey as a group of college students who
                        shared a love for coding and a passion for exploring new
                        technologies. At first, we took on small projects as a
                        way to learn, grow, and challenge ourselves with
                        real-world problems.
                    </p>
                    <p>
                        What started as curiosity eventually grew into something
                        greater — a team dedicated to helping others through
                        technology. From finding projects to sharpen our skills,
                        we eventually founded
                        <span className="font-semibold text-primary">
                            {" "}
                            Programmer ng Bayan
                        </span>
                        , a platform built to serve clients and communities
                        alike.
                    </p>
                    <p>
                        Our founder and CEO,{" "}
                        <span className="font-semibold">Marvin Estolloso</span>,
                        is a passionate, business-driven man who strives to help
                        people in need of assistance with their projects.
                        Hisestolloso eagerness to explore, innovate, and solve
                        problems has become the foundation of our culture.
                    </p>
                    <p>
                        As his team, we don’t just follow him as a leader — we
                        look up to him as a model of hard work, resilience, and
                        determination. His vision inspires us to push boundaries
                        and achieve the goals we set together.
                    </p>
                </motion.div>
            </section>

            {/* Our Team */}
            <section className="max-w-7xl mx-auto max-[1280px]:px-5 flex flex-col py-16 px-20 items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    {/* Heading */}
                    <motion.h1
                        className="text-4xl font-bold pt-8"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        Meet Our Team
                    </motion.h1>

                    <motion.p
                        className="text-lg text-lightGray w-full md:w-[80%] text-center pt-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Take a glimpse into the dedicated professionals working
                        collaboratively to bring the project to life.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        {categories.map((category, i) => (
                            <motion.button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full px-4 py-2 transition ${
                                    activeCategory === category
                                        ? "bg-primary text-white"
                                        : "bg-whiteGray text-black hover:bg-gray-200"
                                }`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </motion.div>
                </div>

                {/* Team Members */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7">
                    {teamMembers
                        .filter((member) => member.role === activeCategory)
                        .map((member, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center justify-center p-5 border border-white rounded-md hover:border hover:border-primary"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                whileHover={{ scale: 1.05 }}
                                viewport={{ once: true }}
                            >
                                <motion.img
                                    src={member.image}
                                    alt={member.name}
                                    className="size-[130px] object-cover object-center rounded-full mb-4"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.1 * index,
                                    }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.1, rotate: 2 }}
                                />
                                <h2 className="text-2xl font-bold whitespace-nowrap">
                                    {member.name}
                                </h2>
                                <p className="text-lg text-lightGray">
                                    {member.role.replace(/s$/, "")}
                                </p>

                                {/* Contact Info */}
                                <div className="mt-4 text-start space-y-1">
                                    <p className="text-sm text-darkGray flex items-center gap-2">
                                        <DynamicIcon
                                            name="phone"
                                            className="text-primary"
                                            size={18}
                                        />
                                        {member.phone}
                                    </p>
                                    <p className="text-sm text-darkGray flex items-center gap-2">
                                        <DynamicIcon
                                            name="mail"
                                            className="text-primary"
                                            size={18}
                                        />
                                        {member.email}
                                    </p>
                                    <p className="text-sm text-darkGray flex items-center gap-2">
                                        <DynamicIcon
                                            name="linkedin"
                                            className="text-primary"
                                            size={18}
                                        />
                                        <a
                                            href={member.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline"
                                        >
                                            {member.linkedin.replace(
                                                "https://www.",
                                                ""
                                            )}
                                        </a>
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                </div>
            </section>
        </>
    );
}

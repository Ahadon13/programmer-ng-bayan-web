import { Head } from "@inertiajs/react";
import React, { useEffect, useContext } from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider } from "@/Components/ThemeContext";

export default function GuestLayout({ children, title }) {
    useEffect(() => {
        AOS.init({
            duration: 1500,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    return (
        <ThemeProvider>
            <div className="min-h-screen bg-white dark:bg-neutral-900">
                <Head title={title} />
                <Navbar />

                <main className="w-full overflow-hidden">{children}</main>

                <Footer />
            </div>
        </ThemeProvider>
    );
}

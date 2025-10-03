import { Link } from "@inertiajs/react";
import React, { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

// Navbar Component with Glassmorphism
const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Home", route: "home" },
        { label: "About Us", route: "about-us" },
        { label: "Services", route: "services" },
        { label: "Contact Us", route: "contact-us" },
    ];

    return (
        <nav
            data-aos="fade-down"
            className={`fixed top-5 shadow-[0_0px_15px_rgb(187,187,187,0.26)] left-0 right-0 z-50 transition-all duration-300 max-w-7xl mx-auto max-xl:!mx-5 rounded-lg ${
                isScrolled
                    ? "opacity-100 bg-white/95 border-b"
                    : "opacity-100 bg-white"
            }`}
        >
            <div className=" px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 w-[75px] flex items-start">
                        <img
                            src="../../../storage/assets/images/logo.png"
                            alt="Programmer Logo"
                            className="h-10 w-auto"
                        />
                    </div>
                    {/* Desktop Navigation */}
                    <div className="hidden min-[930px]:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.route}
                                    href={route(item.route)}
                                    className="text-gray-800 dark:text-gray-300 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-white/10"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* Social Icons */}
                    <div className="hidden min-[930px]:flex items-center justify-end space-x-4 divide-x-2 ml-10 w-[75px]">
                        <Link
                            title="Chat with us"
                            href="#"
                            className="text-gray-700 dark:text-gray-300 hover:text-gray-900 transition-colors duration-200 pl-4"
                        >
                            <MessageCircle className="h-5 w-5" />
                        </Link>
                    </div>
                    {/* Mobile menu button */}
                    <div className="min-[930px]:hidden">
                        <button
                            onClick={() =>
                                setIsMobileMenuOpen(!isMobileMenuOpen)
                            }
                            className="text-gray-700 hover:text-gray-900 inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div className="min-[930px]:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md rounded-lg mt-2 border border-white/20">
                            {navItems.map((item) => (
                                <Link
                                    key={item.route}
                                    href={route(item.route)}
                                    className="text-gray-800 dark:text-gray-300 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <div className="flex space-x-4 px-3 py-2">
                                <Link
                                    href="#"
                                    className="text-gray-700 hover:text-gray-900"
                                >
                                    <MessageCircle className="h-5 w-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

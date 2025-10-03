import { Link } from "@inertiajs/react";
import React from "react";
const Footer = () => {
    const quickLinks = [
        { label: "Home", route: "home" },
        { label: "About Us", route: "about-us" },
        { label: "Services", route: "services" },
        { label: "Contact Us", route: "contact-us" },
    ];

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex-shrink-0 min-w-[75px] flex items-start">
                            <img
                                src="../../../storage/assets/images/logo.png"
                                alt="Programmer Logo"
                                className="h-[130px] w-[140px]"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Your{" "}
                                <span className="text-blue-600">Complete</span>
                            </h3>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Tech Solutions Partner
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                We bring your innovative ideas to life.
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Quick Links
                        </h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <Link
                                        key={link.route}
                                        href={route(link.route)}
                                        className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-sm"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Contact Us!
                            </h3>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p>programmerngbayan@gmail.com</p>
                                <p>+639955109612</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Address
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Purok 3G, RTU Apokon, Tagum City, Davao del
                                Norte, Philippines, 8100
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        © 2023 Programmer ng Bayan. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

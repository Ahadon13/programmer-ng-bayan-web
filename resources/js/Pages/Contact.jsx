import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "../../../components/ui/shadcn-io/interactive-grid-pattern";
import { BackgroundGradient } from "../../../components/ui/shadcn-io/background-gradient";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Facebook } from "lucide-react";

export default function About() {
    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    return (
        <>
            {/* Contact us */}
            <section className="relative w-full mt-32">
                <div className="max-w-7xl mx-auto max-[1280px]:px-5 h-[700px] flex justify-center items-center relative">
                    {/* Background Grid */}
                    <InteractiveGridPattern
                        squares={[32, 31]}
                        className={cn(
                            "[mask-image:radial-gradient(700px_circle_at_center,white,transparent)]",
                            "inset-0 h-full"
                        )}
                        squaresClassName="hover:fill-primary"
                    />
                    {/* Single Card */}
                    <BackgroundGradient>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                            className="relative bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-10 max-w-xl w-full text-center"
                        >
                            {/* Title */}
                            <h2 className="text-3xl font-bold mb-4 text-primary">
                                Contact our team
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 mb-8">
                                Interested in availing our services? Whether
                                it’s web development, IT consulting, or tailored
                                solutions for your business, our team is ready
                                to help. Just reach out through the options
                                below — especially via chat for faster response
                                and real-time assistance.
                            </p>

                            {/* CTA Button */}
                            <a
                                href=""
                                className="inline-block px-8 py-3 rounded-xl bg-primary text-white font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-transform"
                            >
                                Chat with us
                            </a>

                            {/* Divider */}
                            <div className="my-8 border-t border-gray-200 dark:border-gray-700"></div>

                            {/* Other Info */}
                            <div className="grid gap-6 text-left">
                                {/* Call us */}
                                <div className="flex items-start space-x-3 hover:text-primary transition">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <span>+639955109612</span>
                                </div>

                                {/* Visit us */}
                                <div className="flex items-start space-x-3 hover:text-primary transition">
                                    <MapPin className="h-5 w-5 text-primary shrink-0" />
                                    <span>
                                        Purok 3G, RTU Apokon, Tagum City, Davao
                                        del Norte, Philippines, 8100
                                    </span>
                                </div>
                            </div>

                            {/* Facebook Page */}
                            <div className="mt-10 flex justify-center">
                                <a
                                    href="https://www.facebook.com/people/Programmer-ng-Bayan/61574749689977/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center space-x-2 text-primary hover:underline hover:scale-105 transition-transform"
                                >
                                    <Facebook className="h-5 w-5 shrink-0" />
                                    <span>Programmer ng Bayan</span>
                                </a>
                            </div>
                        </motion.div>
                    </BackgroundGradient>
                </div>
            </section>
        </>
    );
}

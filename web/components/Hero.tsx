"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
            {/* Space Background */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60"
                style={{ backgroundImage: "url('/hero-mountains.jpg')" }}
            />
            {/* Background Parallax Element */}
            <motion.div
                initial={{ opacity: 0, scale: 1.1, y: "-5%" }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: ["-5%", "-2%", "-5%"],
                }}
                transition={{
                    duration: 1.5,
                    ease: "easeOut",
                    y: {
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[140%] h-[120%] bg-contain bg-center bg-no-repeat opacity-60 mix-blend-screen"
                style={{ backgroundImage: "url('/hero-map.jpg')" }}
            >
                {/* Dark Radial Gradient for Readability */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.8)_100%)]" />
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            <div className="z-10 text-center px-4 max-w-5xl mx-auto text-white">
                <motion.h1
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold font-serif mb-6 tracking-tight drop-shadow-2xl"
                >
                    Откройте для себя <br />
                    <span className="text-cta font-extrabold tracking-wide">
                        Чечню
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-lg md:text-3xl text-slate-100 mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-xl font-light"
                >
                    Путешествие через древние башни, захватывающие горы и современные чудеса Грозного.
                </motion.p>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.1, duration: 0.6 }}
                >
                    <a
                        href="#places"
                        className="inline-flex items-center gap-2 bg-cta text-white px-10 py-5 rounded-full text-xl font-semibold hover:bg-[#D97706] transition-all shadow-lg hover:shadow-amber-500/50 transform hover:-translate-y-1"
                    >
                        Начать исследование
                        <ArrowRight className="w-6 h-6" />
                    </a>
                </motion.div>
            </div>

            {/* Decorative Elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-20 bg-white/50 mx-auto" />
            </motion.div>
        </section>
    );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const places = [
    {
        id: 1,
        title: "Грозный-Сити",
        description: "Современное сердце столицы с захватывающими дух небоскребами.",
        image: "/grozny-city-v2.jpg",
        details: "Комплекс высотных зданий в Грозном, расположенный на берегу реки Сунжа. Здесь находятся жилые дома, гостиница, офисно-деловой центр. С крыши небоскреба открывается великолепный вид на весь город и горы."
    },
    {
        id: 2,
        title: "Сердце Чечни",
        description: "Одна из крупнейших мечетей в Европе, шедевр архитектуры.",
        image: "/heart-of-chechnya.jpg",
        details: "Мечеть «Сердце Чечни» имени Ахмат-Хаджи Кадырова — одна из самых больших мечетей мира. Расположена в центре Грозного на берегу реки Сунжа. Входит в состав Исламского комплекса."
    },
    {
        id: 3,
        title: "Озеро Кезеной-Ам",
        description: "Жемчужина Кавказа, кристально чистое высокогорное озеро.",
        image: "/kezenoy-am.jpg",
        details: "Высокогорное озеро в Чеберлоевском районе Чеченской Республики. Самое большое и глубокое озеро Северного Кавказа. Расположено на высоте 1869 метров над уровнем моря."
    },
];

export default function PlacesGallery() {
    const [selectedPlace, setSelectedPlace] = useState<typeof places[0] | null>(null);

    return (
        <section id="places" className="relative py-24 px-4 overflow-hidden bg-cta/90">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-center text-white mb-12"
                >
                    Обязательные к посещению места
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {places.map((place, index) => (
                        <motion.div
                            key={place.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            onClick={() => setSelectedPlace(place)}
                            className="group relative overflow-hidden rounded-xl shadow-xl cursor-pointer bg-white/10 backdrop-blur-sm border border-white/20 hover:shadow-2xl hover:shadow-black/30 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <motion.img
                                    src={place.image}
                                    alt={place.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Overlay with rich gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold mb-2 drop-shadow-md">{place.title}</h3>
                                <p className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm text-slate-100 drop-shadow-sm transform translate-y-4 group-hover:translate-y-0">
                                    {place.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedPlace && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedPlace(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90" // Removed backdrop-blur for performance
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl"
                            transition={{ type: "spring", stiffness: 200, damping: 25 }}
                        >
                            <div className="relative aspect-video">
                                <motion.img
                                    src={selectedPlace.image}
                                    alt={selectedPlace.title}
                                    className="w-full h-full object-cover"
                                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                                />
                                <motion.button
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.1 } }} // Fast exit
                                    transition={{ delay: 0.3 }}
                                    onClick={() => setSelectedPlace(null)}
                                    className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                                >
                                    <X size={24} />
                                </motion.button>
                            </div>

                            <motion.div
                                className="p-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                                transition={{ delay: 0.1 }}
                            >
                                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                                    {selectedPlace.title}
                                </h3>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    {selectedPlace.details}
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";

export default function HistorySection() {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="bg-slate-100 rounded-2xl w-full overflow-hidden relative shadow-lg">
                        {/* Placeholder for history image */}
                        <img
                            src="/ancient-towers.jpg"
                            alt="Древние чеченские башни"
                            className="w-full h-auto transition-transform duration-700 hover:scale-110"
                        />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h2 className="text-4xl font-bold text-text mb-6">Земля Легенд</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        История Чеченской Республики высечена в камне ее древних башен и духе ее народа. От суровых вершин Кавказских гор до оживленных улиц Грозного, каждый уголок рассказывает историю стойкости, культуры и гостеприимства.
                    </p>
                    <p className="text-slate-600 text-lg leading-relaxed">
                        Откройте для себя вайнахское архитектурное наследие, восходящее к Средневековью, и станьте свидетелем удивительного превращения Грозного в современную жемчужину Кавказа.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

import { motion } from "motion/react";

export default function Home() {
  //#0e15a3
  return (
    <section
      className="flex justify-center items-center h-screen relative"
      id="home"
    >
      <div className="absolute inset-0 bg-[url('../../fondo.jpg')] bg-cover bg-center opacity-40"></div>
      <div className="max-w-6xl flex flex-col justify-center items-center relative">
        <motion.h2
          className="text-5xl font-bold text-[#0e15a3] mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Mission Critical Communications S.A.
        </motion.h2>
        <motion.h3
          className="text-2xl font-bold text-black pb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Soluciones Tecnológicas para Infraestructuras Críticas
        </motion.h3>
      </div>
    </section>
  );
}

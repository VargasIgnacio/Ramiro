import React from 'react';
import Navbar from '../Navbar';
import { motion } from 'framer-motion';
import { RiCodeSSlashLine } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { PiDatabaseLight } from "react-icons/pi";
import { HiOutlineChip } from "react-icons/hi";
import { useTranslation } from 'react-i18next'; // Asegúrate de importar el hook useTranslation

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const Hero = () => {
  const { t } = useTranslation(); // Asegúrate de usar useTranslation aquí para acceder a las traducciones

  return (
    <section className="min-h-screen flex justify-center items-center px-4 relative">
      <Navbar
        onScrollToAbout={() => scrollToSection('about')}
        onScrollToProjects={() => scrollToSection('projects')}
        onScrollToContact={() => scrollToSection('contact')}
      />

      <motion.div
        className="z-10 text-center space-y-6 max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          className="text-neutral-100 text-4xl sm:text-5xl md:text-6xl font-bold"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          {t('hero.name')} {/* Correcto: t() para obtener la traducción */}
        </motion.h1>

        <motion.h2
          className="text-[#00a8e8] text-xl sm:text-2xl font-medium"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {t('hero.jobTitle')} {/* Correcto: t() para obtener la traducción */}
        </motion.h2>

        <motion.p
          className="text-neutral-400 text-sm sm:text-base leading-relaxed"
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t('hero.description')} {/* Correcto: t() para obtener la traducción */}
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 pt-4 cursor-default"
          variants={staggerContainer}
        >
          {[ 
            { aptitudes: 'JavaScript', icon: <RiCodeSSlashLine /> },
            { aptitudes: 'MySQL', icon: <PiDatabaseLight /> },
            { aptitudes: 'Java', icon: <HiOutlineChip /> },
            { aptitudes: 'Angular', icon: <MdDashboard /> },
          ].map(({ aptitudes, icon }, i) => (
            <motion.div
              key={i}
              className="text-neutral-300 border backdrop-blur-[10px] border-neutral-600 px-4 py-2 rounded-xl text-sm flex items-center gap-2 hover:-translate-y-1 transition-all duration-500 hover:bg-[#00a8e8]/10"
              variants={fadeUp}
              transition={{ duration: 0.4, delay: 0 + i * 0.1 }}
            >
              {icon} {aptitudes}
            </motion.div>
          ))}
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
          <motion.button
            onClick={() => scrollToSection('projects')}
            className="text-neutral-400 hover:text-neutral-100 
             bg-[#00a8e8]/50 hover:bg-[#0094cc] transition-all backdrop-blur-[10px] duration-500 px-6 py-2 rounded-full font-semibold shadow-md cursor-pointer"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('hero.experienceButton')} {/* Correcto: t() para obtener la traducción */}
          </motion.button>

          <motion.a
            href="/CV-Ramiro-Borello.pdf" // ACA VA LA RUTA DEL CV DE RAMA
            download
            className="text-neutral-400 backdrop-blur-[10px] hover:text-neutral-200 border cursor-pointer border-neutral-600 px-6 py-2 rounded-full font-semibold hover:bg-neutral-800 transition-all duration-500"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {t('hero.downloadButton')} {/* Correcto: t() para obtener la traducción */}
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

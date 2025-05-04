import React from 'react';
import { LuBookText } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { RiCodeSSlashLine } from "react-icons/ri";
import { TbBulb } from "react-icons/tb";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0 } },
};

const Projects = () => {
  const { t } = useTranslation();
  const educationItems = t('projects.education', { returnObjects: true });
  const aptitudesItems = t('projects.skills', { returnObjects: true });

  const icons = [<RiCodeSSlashLine />, <TbBulb />];

  return (
    <section id="projects" className="max-w-4xl mx-auto px-4 py-16">
      <div className="flex justify-center">
        <h2 className="30:text-3xl 40:text-4xl font-bold mb-6 text-white relative inline-block">
          {t('projects.title')}
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-28 bg-[#00a8e8] pb-0.5"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-15 gap-8">
        {educationItems.map((item, index) => {
          const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
          return (
            <motion.div
              key={index}
              ref={ref}
              className="backdrop-blur-[10px] border px-5 py-6 rounded-xl hover:border-[#007ea7]/80 transition-all duration-500 bg-neutral-800/30 border-neutral-700"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
            >
              <div className="flex items-center mb-4">
                <div className="p-1.5 h-fit bg-[#007ea7]/20 rounded-sm">
                  <LuBookText size={23} className="text-[#007ea7]/80" />
                </div>
                <div className="px-3">
                  <p className="text-[#007ea7]/90 font-semibold text-sm">{item.estado}</p>
                  <h4 className="text-neutral-50 font-semibold text-xl">{item.titulo}</h4>
                </div>
              </div>
              <p className="text-neutral-300 text-[16px] ml-12">{item.institucion}</p>
              <div className="pt-2">
                <span className="text-neutral-500 text-[14px] flex ml-12 items-center gap-2">
                  <CiCalendar size={17} className="text-[#007ea7]/80" />
                  {item.fecha}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex justify-center mt-16 mb-10 px-4">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white relative inline-block text-center" data-aos="fade">
            {t('projects.aptitudesTitle')}
           <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-11 bg-[#00a8e8] pb-0.5"></span>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 max-w-4xl mx-auto">
        {aptitudesItems.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center border-b pb-9 border-neutral-700"
          >
            <div data-aos="fade" className="flex items-center gap-4">
              <span className="text-[#00a8e8]/80 rounded-sm text-xl bg-[#007ea7]/20 py-1.5 px-1.5">
                {icons[index]}
              </span>
              <h4 className="text-neutral-100 text-xl font-semibold">{tech.titulo}</h4>
            </div>

            <ul className="space-y-3 pt-5 w-full">
              {tech.aptitudes.map((item, idx) => (
                <li
                  key={idx}
                  data-aos="fade"
                  className="text-[#007ea7] font-semibold text-[16px] py-1 flex flex-col items-center text-center"
                >
                  {item.nombre}
                  <span className="text-neutral-300 font-normal pt-2">
                    {item.detalle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

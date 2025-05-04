import { FiMail } from 'react-icons/fi';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next'; // Importar useTranslation

const Footer = () => {
  const { t } = useTranslation(); // Usar hook para obtener las traducciones

  return (
    <motion.footer
      className="text-neutral-400 text-sm pb-6 border-t mt-10 border-neutral-800 backdrop-blur-[10px]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="max-w-6xl mx-auto my-10 flex flex-col md:flex-row justify-between items-center">
        
        <p className="text-[#0094cc] font-medium 40:text-base mb-4 md:mb-0">
          {t('footer.projectMessage')} {/* Traducción */}
        </p>

        <div className="flex gap-5 text-xl text-neutral-400">
          <a href="mailto:ramiroborello2@gmail.com" className="hover:text-[#0094cc] transition">
            <FiMail />
          </a>
          <a href="https://www.linkedin.com/in/ramiro-borello-991989342/" target="_blank" rel="noopener noreferrer" className="hover:text-[#0094cc] transition">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/ramitaax" target="_blank" rel="noopener noreferrer" className="hover:text-[#0094cc] transition">
            <FaGithub />
          </a>
        </div>
      </div>

      <hr className="my-4 border-neutral-800 max-w-6xl mx-auto" />

      <div className="text-center mt-10 text-xs text-neutral-500 space-y-1">
        <p>© 2025 Ramiro Borello. {t('footer.allRightsReserved')}</p> {/* Traducción */}
        <a className="text-neutral-300 hover:text-[#0094cc] transition-all duration-300" target="blank_" href="https://www.kiad.dev">
          {t('footer.developedBy')} {/* Traducción */}
        </a>
      </div>
    </motion.footer>
  );
};

export default Footer;

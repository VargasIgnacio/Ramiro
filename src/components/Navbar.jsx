import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onScrollToAbout, onScrollToProjects, onScrollToContact }) => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowHeader(false);
        setMenuOpen(false); 
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = (callback) => {
    setMenuOpen(false);
    callback();
  };

  return (
    <header className={`backdrop-blur-[10px] animate-fade-down fixed top-0 z-20 30:w-[20rem] 40:w-[24rem] md:w-[50rem] mx-auto my-7 border py-2 px-5 rounded-3xl bg-neutral-800/50 border-neutral-700 transition-transform duration-500 ${showHeader ? 'translate-y-0' : '-translate-y-32'}`}>
      <div className="flex items-center justify-between">
        <div className="w-18 py-1.5 mx-3 transition-transform duration-300 hover:rotate-6">
          <img src="R . B 2.png" alt="Logo" />
        </div>

        
        <nav className="hidden md:flex space-x-6 text-neutral-300 font-pl font-bold text-sm">
          <button onClick={() => handleNavClick(onScrollToAbout)} className="hover:text-[#00a8e8] cursor-pointer transition-all">Sobre mí</button>
          <button onClick={() => handleNavClick(onScrollToProjects)} className="hover:text-[#00a8e8] cursor-pointer transition-all">Experiencia</button>
          <button onClick={() => handleNavClick(onScrollToContact)} className="hover:text-[#00a8e8] cursor-pointer transition-all">Contacto</button>
          <a href="https://www.linkedin.com/in/ramiro-borello-991989342/" target="_blank" rel="noopener noreferrer" className="hover:text-[#00a8e8] transition-all">
            Linkedin
          </a>
        </nav>

        <div className="hidden md:flex items-center text-xs hover:text-[#00a8e8] px-4 text-neutral-300">
          <button className='cursor-pointer'>ES</button>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden text-neutral-300 text-2xl">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25 }}
      className="md:hidden mt-4 rounded-2xl bg-black/40 px-4 py-5 flex flex-col gap-y-3 items-center text-center text-neutral-200 font-medium text- shadow-lg"
    >
      <button onClick={() => handleNavClick(onScrollToAbout)} className="hover:bg-[#00a8e8]/10 px-4 py-2 rounded-lg transition-all">
        Sobre mí
      </button>
      <button onClick={() => handleNavClick(onScrollToProjects)} className="hover:bg-[#00a8e8]/10 px-4 py-2 rounded-lg transition-all">
        Experiencia
      </button>
      <button onClick={() => handleNavClick(onScrollToContact)} className="hover:bg-[#00a8e8]/10 px-4 py-2 rounded-lg transition-all">
        Contacto
      </button>
      <a
        href="https://www.linkedin.com/in/ramiro-borello-991989342/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:bg-[#00a8e8]/10 px-4 py-2 rounded-lg transition-all"
      >
        Linkedin
      </a>
    </motion.div>
  )}
</AnimatePresence>

    </header>
  );
};

export default Navbar;

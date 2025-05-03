import React, { useEffect } from 'react'; 
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <section

      className="max-w-3xl mx-auto px-4 py-16 text-neutral-300"
      
    >
      <div className='flex justify-center mb-9'data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-white relative inline-block " >
          Sobre mí
          <span className="absolute left-11 -bottom-3 w-17 bg-[#00a8e8] pb-0.5"></span>
        </h2>
      </div>


      <p className="mb-5 leading-relaxed" data-aos="fade-up">
        Soy un <span className="text-[#00a8e8] font-semibold">desarrollador junior</span> con experiencia en la creación de aplicaciones web utilizando tecnologías como 
        <span data-aos="fade-up" className="text-white font-medium"> Angular</span>, 
        <span data-aos="fade-up" className="text-white font-medium"> JavaScript</span>, 
        <span data-aos="fade-up" className="text-white font-medium"> MySQL</span> y 
        <span data-aos="fade-up" className="text-white font-medium"> Java</span>.
      </p>

      <p data-aos="fade-up" className="mb-5 leading-relaxed">
      Además, soy <span className='text-[#00a8e8] font-medium'>técnico en electrónica</span>, lo que complementa mi perfil con una sólida base en sistemas y hardware. También tengo manejo de sistemas operativos <span className='text-white font-medium'>Linux</span>, lo cual me permite desenvolverme con soltura en entornos de desarrollo y administración más especializados.
      </p>
      
      <p data-aos="fade-up" className="mb-5 leading-relaxed">
      Cuento con conocimientos en <span className='text-white font-medium'>mantenimiento de computadoras y redes</span>, lo cual me permite abordar problemas tecnológicos de forma integral.
      </p>
      
      <p data-aos="fade-up" className="mb-5 leading-relaxed">
        Me apasiona mejorar continuamente mis habilidades tanto en el <span className="text-[#00a8e8] font-semibold">frontend</span> como en el <span className="text-[#00a8e8] font-semibold">backend</span>, y en la optimización de infraestructuras digitales.
      </p>

      <p data-aos="fade-up" className="leading-relaxed">
        Mi objetivo es crecer como profesional, aportando <span className="text-white font-medium">soluciones eficientes</span> y fomentando el <span className="text-white font-medium">trabajo en equipo</span> en cada proyecto.
      </p>
    </section>
  );
};

export default About;

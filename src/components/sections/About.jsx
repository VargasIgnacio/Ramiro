import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation, Trans } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="max-w-3xl mx-auto px-4 py-16 text-neutral-300">
      <div className='flex justify-center mb-9' data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-white relative inline-block">
          {t('about.title')}
          <span className="absolute left-1/2 transform -translate-x-1/2 -bottom-3 w-14 bg-[#00a8e8] pb-0.5"></span>
        </h2>
      </div>

      <p className="mb-5 leading-relaxed" data-aos="fade-up">
        <Trans i18nKey="about.paragraph1" components={{
          1: <span className="text-[#00a8e8] font-semibold" />,
          3: <span className="text-white font-medium" />,
          5: <span className="text-white font-medium" />,
          7: <span className="text-white font-medium" />,
          9: <span className="text-white font-medium" />
        }} />
      </p>

      <p data-aos="fade-up" className="mb-5 leading-relaxed">
        <Trans i18nKey="about.paragraph2" components={{
          1: <span className="text-[#00a8e8] font-medium" />,
          3: <span className="text-white font-medium" />
        }} />
      </p>

      <p data-aos="fade-up" className="mb-5 leading-relaxed">
        <Trans i18nKey="about.paragraph3" components={{
          1: <span className='text-white font-medium' />
        }} />
      </p>

      <p data-aos="fade-up" className="mb-5 leading-relaxed">
        <Trans i18nKey="about.paragraph4" components={{
          1: <span className="text-[#00a8e8] font-semibold" />,
          3: <span className="text-[#00a8e8] font-semibold" />
        }} />
      </p>

      <p data-aos="fade-up" className="leading-relaxed">
        <Trans i18nKey="about.paragraph5" components={{
          1: <span className="text-white font-medium" />,
          3: <span className="text-white font-medium" />
        }} />
      </p>
    </section>
  );
};

export default About;

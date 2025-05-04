import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next'; // Importar useTranslation

const Contact = () => {
  const { t } = useTranslation(); // Usar hook para obtener las traducciones
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm('ramiroborello', 'template_4hrpxpr', form.current, 'k2KFe5VSL_mA5dGXL')
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setSuccess(false);
        }
      )
      .finally(() => setSending(false));
  };

  return (
    <section className="min-h-screen px-4 py-16 flex justify-center items-center">
      <div data-aos="fade-up" className="w-full max-w-xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h3 className="text-neutral-100 text-3xl md:text-4xl font-bold">
            {t('contact.title')} {/* Traducción */}
          </h3>
          <p className="text-neutral-400 leading-tight text-sm sm:text-base">
            {t('contact.subtitle')} {/* Traducción */}
          </p>
        </div>

        <div
          data-aos="fade-up"
          className="backdrop-blur-[10px] bg-neutral-800/30 p-6 sm:p-8 border rounded-2xl border-neutral-700 shadow-md"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div>
              <label className="block text-neutral-300 mb-1 text-sm">{t('contact.form.nameLabel')}</label> {/* Traducción */}
              <input
                required
                name="user_name"
                placeholder={t('contact.form.namePlaceholder')} 
                type="text"
                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white transition focus:outline-none focus:border-[#00a8e8]/50"
              />
            </div>

            <div>
              <label className="block text-neutral-300 mb-1 text-sm">{t('contact.form.emailLabel')}</label> {/* Traducción */}
              <input
                required
                name="user_email"
                placeholder={t('contact.form.emailPlaceholder')} 
                type="email"
                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white transition focus:outline-none focus:border-[#00a8e8]/50"
              />
            </div>

            <div>
              <label className="block text-neutral-300 mb-1 text-sm">{t('contact.form.subjectLabel')}</label> {/* Traducción */}
              <input
                required
                name="subject"
                placeholder={t('contact.form.subjectPlaceholder')} 
                type="text"
                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white transition focus:outline-none focus:border-[#00a8e8]/50"
              />
            </div>

            <div>
              <label className="block text-neutral-300 mb-1 text-sm">{t('contact.form.messageLabel')}</label> {/* Traducción */}
              <textarea
                name="message"
                rows={4}
                maxLength={500}
                className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white transition focus:outline-none focus:border-[#00a8e8]/50 resize-y max-h-40"
                placeholder={t('contact.form.messagePlaceholder')} 
                required
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#00a8e8]/70 hover:bg-[#00a8e8] text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                disabled={sending}
              >
                {sending ? t('contact.form.submitSending') : t('contact.form.submit')} {/* Traducción */}
              </button>
              {success === true && (
                <p className="text-green-400 text-sm pt-3 text-center">{t('contact.form.success')}</p> 
              )}
              {success === false && (
                <p className="text-red-400 text-sm pt-3 text-center">{t('contact.form.error')}</p> 
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

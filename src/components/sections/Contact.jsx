import { transform } from 'framer-motion'
import React from 'react'

const Contact = () => {
  return (
      <section className="min-h-screen px-4 py-16 flex justify-center items-center">
        <div
          data-aos="fade-up"
          className="w-full max-w-xl mx-auto space-y-10"
        >
          <div className="text-center space-y-3">
            <h3 className="text-neutral-100 text-3xl md:text-4xl font-bold">
              Contáctame
            </h3>
            <p className="text-neutral-400 leading-tight text-sm sm:text-base">
              ¿Querés contarme tu idea o hacerme una consulta? <br />
              Mandame un mensaje, ¡te leo!
            </p>
          </div>
    
          <div
            data-aos="fade-up"
            className="backdrop-blur-[10px] bg-neutral-800/30 p-6 sm:p-8 border rounded-2xl border-neutral-700 shadow-md"
          >
            <form className="space-y-5">
              <div>
                <label className="block text-neutral-300 mb-1 text-sm">
                  Nombre
                </label>
                <input
                  required
                  name="user_name"
                  placeholder="Tu Nombre completo"
                  type="text"
                  className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white transition focus:outline-none focus:border-[#00a8e8]/50"
                />
              </div>
    
              <div>
                <label className="block text-neutral-300 mb-1 text-sm">
                  Email
                </label>
                <input
                  required
                  name="user_email"
                  placeholder="TuEmail@gmail.com"
                  type="email"
                  className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white transition focus:outline-none focus:border-[#00a8e8]/50"
                />
              </div>
    
              <div>
                <label className="block text-neutral-300 mb-1 text-sm">
                  Asunto
                </label>
                <input
                  required
                  name="subject"
                  placeholder="Motivo de tu consulta"
                  type="text"
                  className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white transition focus:outline-none focus:border-[#00a8e8]/50"
                />
              </div>
    
              <div>
                <label className="block text-neutral-300 mb-1 text-sm">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full bg-neutral-800/50 border border-neutral-700 rounded-lg px-3 py-2 text-sm text-white transition focus:outline-none focus:border-[#00a8e8]/50 resize-y max-h-40"
                  placeholder="Escribe tu mensaje aquí (máx. 500 caracteres)"
                  required
                ></textarea>
              </div>
    
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#00a8e8]/70 hover:bg-[#00a8e8] text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                  tabIndex="0"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    )
    
};

export default Contact
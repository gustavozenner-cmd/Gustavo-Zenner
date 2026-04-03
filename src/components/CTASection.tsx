import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTASection({ type }: { type: 'intermediate' | 'final' }) {
  const isFinal = type === 'final';
  
  return (
    <section className={`py-20 ${isFinal ? 'bg-slate-950 text-white' : 'bg-blue-600 text-white'}`}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            {isFinal 
              ? "¿Listo para liderar el futuro de la formación?" 
              : "Lleva tu formación al siguiente nivel"}
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-2xl mx-auto">
            {isFinal
              ? "No te quedes atrás. Implementa metodologías innovadoras y potencia tus resultados con Inteligencia Artificial."
              : "Descubre cómo la tecnología y una metodología clara pueden transformar la experiencia de aprendizaje."}
          </p>
          {isFinal ? (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* EMAIL */}
              <a 
                href="mailto:gustavo.zenner@gmail.com" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] w-full sm:w-auto"
              >
                Email <ArrowRight className="w-5 h-5" />
              </a>

              {/* WHATSAPP */}
              <a 
                href="https://wa.me/34674965671?text=Hola%2C%20quiero%20información%20sobre%20tu%20método%20Zenner"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 bg-emerald-600 hover:bg-emerald-500 text-white shadow-[0_0_20px_rgba(5,150,105,0.4)] w-full sm:w-auto"
              >
                WhatsApp <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          ) : (
            <a
              href="mailto:gustavo.zenner@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105 bg-white text-blue-600 hover:bg-slate-50 shadow-lg"
            >
              Hablemos de tu proyecto
              <ArrowRight className="w-5 h-5" />
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}

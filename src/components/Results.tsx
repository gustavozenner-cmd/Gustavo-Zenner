import { motion } from 'motion/react';
import { GraduationCap, Video, Quote } from 'lucide-react';

export default function Results() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-display text-slate-900 mb-6"
          >
            Resultados reales en formación
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            La teoría es importante, pero la práctica y los resultados son lo que verdaderamente transforma.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Casos Prácticos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
          >
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Casos Prácticos</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-600">
                <span className="text-emerald-500 font-bold">→</span>
                <span>Formación en competencias digitales para adultos con mejora directa en empleabilidad.</span>
              </li>
              <li className="flex gap-3 text-slate-600">
                <span className="text-emerald-500 font-bold">→</span>
                <span>Integración de IA en el aula resultando en un aumento medible de motivación y participación.</span>
              </li>
            </ul>
          </motion.div>

          {/* Proyectos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-50 rounded-3xl p-8 border border-slate-100"
          >
            <div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-6">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Proyectos</h3>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-600">
                <span className="text-purple-500 font-bold">→</span>
                <span>Creación de contenido audiovisual educativo de alto impacto.</span>
              </li>
              <li className="flex gap-3 text-slate-600">
                <span className="text-purple-500 font-bold">→</span>
                <span>Diseño de actividades interactivas potenciadas con IA.</span>
              </li>
              <li className="flex gap-3 text-slate-600">
                <span className="text-purple-500 font-bold">→</span>
                <span>Formación aplicada en entornos corporativos y reales.</span>
              </li>
            </ul>
          </motion.div>

          {/* Testimonios */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-4">
              <Quote className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl font-medium leading-relaxed mb-6">
                "Gracias a Gustavo, entendí la tecnología de forma práctica y sin complicaciones. Su método cambió mi forma de trabajar."
              </p>
              <div>
                <p className="font-bold">Alumno de Formación Profesional</p>
                <p className="text-blue-200 text-sm">Curso de Competencias Digitales</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

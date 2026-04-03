import { motion } from 'motion/react';
import { Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold font-display text-slate-900 mb-4">Formación Acreditada</h2>
          <p className="text-slate-600">Base sólida para una docencia de calidad</p>
        </motion.div>

        <div className="space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Especialista en Tecnología Educativa</h3>
              <p className="text-slate-600">Formación avanzada en integración de herramientas digitales y metodologías activas en el aula.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-6 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-blue-200 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Experto en Producción Audiovisual</h3>
              <p className="text-slate-600">Dominio de narrativas visuales y creación de contenido multimedia para entornos de aprendizaje.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

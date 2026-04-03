import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

export default function ValueProposition() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900 mb-6">
                Aprender con propósito,<br />
                <span className="text-blue-600">aplicar con impacto.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Mi enfoque se aleja de la teoría vacía. Cada concepto, cada herramienta y cada sesión está diseñada para generar un cambio tangible en tu forma de trabajar o enseñar.
              </p>
              <ul className="space-y-4">
                {[
                  "Superación real de la brecha digital",
                  "Aplicación inmediata de los conocimientos",
                  "Adaptabilidad a diferentes niveles técnicos",
                  "Acompañamiento cercano y motivador"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-full bg-gradient-to-tr from-blue-100 to-cyan-50 absolute -inset-4 blur-3xl opacity-50"></div>
              <div className="relative bg-slate-900 rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4 font-mono text-sm">
                  <p className="text-slate-400">// El enfoque tradicional</p>
                  <p className="text-red-400 line-through">Aprender a usar la herramienta X</p>
                  <br />
                  <p className="text-slate-400">// El enfoque Zenner</p>
                  <p className="text-emerald-400">Resolver el problema Y utilizando la herramienta X de forma eficiente.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

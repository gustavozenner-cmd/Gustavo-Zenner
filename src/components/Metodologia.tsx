import { motion } from 'motion/react';
import { BookOpen, Target, Zap, Layout, Lightbulb, Presentation, CheckCircle2 } from 'lucide-react';

export default function Metodologia() {
  return (
    <section id="metodologia" className="py-24 bg-slate-950 text-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* 1. Frase principal y sub-ítems */}
        <div className="text-center space-y-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 leading-tight max-w-4xl mx-auto"
          >
            "No es magia: es claridad. Si sabes pedir bien, la IA responde mejor."
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            <div className="flex items-center gap-2 bg-slate-900 px-6 py-3 rounded-full border border-slate-800">
              <BookOpen className="w-5 h-5 text-blue-400" />
              <span className="font-medium">Lema pedagógico</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 px-6 py-3 rounded-full border border-slate-800">
              <Lightbulb className="w-5 h-5 text-cyan-400" />
              <span className="font-medium">Idea fuerza</span>
            </div>
            <div className="flex items-center gap-2 bg-slate-900 px-6 py-3 rounded-full border border-slate-800">
              <Presentation className="w-5 h-5 text-purple-400" />
              <span className="font-medium">Hook en presentaciones</span>
            </div>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 2. Estructura pedagógica */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Layout className="w-6 h-6 text-blue-400" />
              Estructura pedagógica
            </h3>
            <div className="grid gap-4">
              {[
                "Plantear el problema",
                "Introducir la idea",
                "Presentar el método sin leerlo",
                "Aterrizarlo"
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-4 bg-slate-800/40 p-4 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-lg shrink-0 border border-blue-500/20">
                    {i + 1}
                  </div>
                  <span className="text-lg font-medium text-slate-300">{step}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 3. Lectura estratégica */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/50 p-8 rounded-3xl border border-slate-800 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-cyan-400" />
              Lectura estratégica
            </h3>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                { title: "Marco conceptual", desc: "(método)" },
                { title: "Herramienta", desc: "(estructura RTCFC)" },
                { title: "Beneficios", desc: "(valor)" },
                { title: "Lema", desc: "(mensaje emocional)" },
                { title: "Secuencia didáctica", desc: "(aplicación en aula)" }
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-200">{item.title}</span>{" "}
                    <span className="text-slate-500">{item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
            
            <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 p-4 rounded-2xl border border-blue-500/30 text-center">
              <p className="text-blue-300 font-bold text-lg">
                “Es un sistema listo para enseñar, no solo mostrar”
              </p>
            </div>
          </motion.div>
        </div>

        {/* 4. Aplicación en clase */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 md:p-10 rounded-3xl border border-slate-700 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
              <Zap className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Aplicación en clase</h3>
              <p className="text-lg text-slate-300 leading-relaxed">
                “El Método Zenner enseña a pensar antes de pedir: defines tu rol, tu objetivo, el contexto, el formato y las reglas… y eso cambia completamente la respuesta de la IA.”
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

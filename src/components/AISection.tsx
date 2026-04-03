import { motion } from 'motion/react';
import { BrainCircuit, Cpu, Sparkles, LineChart } from 'lucide-react';

const applications = [
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Generación de materiales",
    desc: "Creación ágil de recursos educativos adaptados y actualizados."
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "Prompts educativos",
    desc: "Diseño de instrucciones estructuradas para maximizar el rendimiento de la IA."
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Evaluación asistida",
    desc: "Optimización del proceso de corrección y feedback personalizado."
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Aprendizaje autónomo",
    desc: "Sistemas de apoyo inteligente para el estudio independiente del alumno."
  }
];

export default function AISection() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Tech background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white mb-6 shadow-lg shadow-blue-500/30"
          >
            <BrainCircuit className="w-8 h-8" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold font-display text-slate-900 mb-6"
          >
            Inteligencia Artificial <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              aplicada a la formación
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl font-medium text-slate-700 mb-4"
          >
            "La IA no sustituye al docente, potencia su impacto."
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600"
          >
            Integro la Inteligencia Artificial en el ecosistema educativo para automatizar procesos, personalizar el aprendizaje y diseñar experiencias más ricas e interactivas.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {app.icon}
              </div>
              <h3 className="font-bold text-slate-900 mb-3">{app.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{app.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

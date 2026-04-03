import { motion } from 'motion/react';
import { Target, Users, Zap, MessageSquare } from 'lucide-react';

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Docencia con adultos",
    description: "Experiencia real adaptando el aprendizaje a perfiles diversos y necesidades concretas."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Orientación a resultados",
    description: "Cada sesión tiene un objetivo claro y aplicable al mundo real."
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Comunicación clara",
    description: "Traduciendo conceptos técnicos complejos a un lenguaje accesible y práctico."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Motivación consciente",
    description: "Fomentando la curiosidad y el deseo de aprender a través de logros rápidos."
  }
];

export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold font-display text-slate-900 mb-6">
              Más que un docente,<br />
              <span className="text-blue-600">un facilitador del cambio.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Soy Gustavo Zenner. Mi misión es cerrar la brecha digital y empoderar a profesionales a través del uso estratégico de la tecnología.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              No creo en la formación teórica aislada. Creo en el aprendizaje que transforma tu día a día, optimiza tu tiempo y te prepara para el futuro.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 relative">
              <img 
                src="https://scontent.cdninstagram.com/v/t51.82787-15/658864787_18086741360595726_8063609034346004558_n.jpg?stp=c204.0.615.614a_dst-jpg_e35_s640x640_tt6&_nc_cat=106&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiRkVFRC5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=FQ5rcngNmMAQ7kNvwEXO0mk&_nc_oc=Adp_QRIS63U3puh8yK3g7bEFPOxtLzCpYzfyrEhPTjRGPTOb2Ud63c_Pg_8JPC0Me2Y&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=WBk9SG8ojT7o810gxq52Ww&_nc_ss=7a389&oh=00_Af1dDT7DTr9RyGBg2wYzRQxQWzp9WtUIT46UFTWwIbtvkw&oe=69D5CE34" 
                alt="Gustavo Zenner" 
                className="object-cover w-full h-full object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[320px]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl shrink-0">
                  +15
                </div>
                <div>
                  <p className="font-bold text-slate-900">Años</p>
                  <p className="text-sm text-slate-500 leading-snug">Dedicado a la creación de contenido y gestión digital técnica</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

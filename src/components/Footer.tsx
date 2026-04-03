export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-display text-2xl font-bold text-white mb-4">Gustavo Zenner</p>
        <p className="mb-8">Docente Digital • Audiovisuales • IA Educativa</p>
        <p className="text-sm">© {new Date().getFullYear()} Gustavo Zenner. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

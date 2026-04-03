/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import About from './components/About';
import ValueProposition from './components/ValueProposition';
import Metodologia from './components/Metodologia';
import Results from './components/Results';
import AISection from './components/AISection';
import Education from './components/Education';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      <Hero />
      <About />
      <ValueProposition />
      <CTASection type="intermediate" />
      <Metodologia />
      <Results />
      <AISection />
      <Education />
      <CTASection type="final" />
      <Footer />
    </div>
  );
}

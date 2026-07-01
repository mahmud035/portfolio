import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { TalkModal } from './components/layout/TalkModal';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';

export function App() {
  return (
    <div className="bg-bg text-fg min-h-dvh">
      <a
        href="#top"
        className="focus:bg-accent focus:text-accent-fg sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <Footer />

      <TalkModal />
    </div>
  );
}

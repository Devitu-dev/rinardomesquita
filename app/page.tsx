import Home from '../sections/Home';
import Manifest from '../sections/Manifest';
import Notebooks from '../sections/Notebooks';
import About from '@/sections/About';
import Contact from '@/sections/Contact';

export default function HomeRoute() {
  return (
    <main className="relative">
      <Home />
      <Manifest />
      <Notebooks />
      <About />
      <Contact />
    </main>
  );
}

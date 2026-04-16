import Header from '@/components/Header';
import MobileHeader from '@/components/MobileHeader';
import Home from '../sections/Home';
import Manifest from '../sections/Manifest';
import Notebooks from '../sections/Notebooks';
import About from '@/sections/About';
import Contact from '@/sections/Contact';

export default function HomeRoute() {
  return (
    <main className="relative">
      <Header />
      <MobileHeader />
      <Home />
      <Manifest />
      <Notebooks />
      <About />
      <Contact />
    </main>
  );
}

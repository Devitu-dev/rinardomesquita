import Header from '@/components/Header';
import Home from './pages/Home';
import Manifest from './pages/Manifest';

export default function HomeRoute() {
  return (
    <main className="relative">
      <Header />
      <Home />
      <Manifest />
    </main>
  );
}

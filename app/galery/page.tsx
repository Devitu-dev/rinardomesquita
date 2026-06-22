import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Images } from 'lucide-react';
import GaleryGrid from '@/components/GaleryGrid';

export const metadata: Metadata = {
  title: 'Galeria | Rinardo Mesquita',
  description: 'Galeria de fotos de Rinardo Mesquita.',
};

function GaleryPage() {
  return (
    <main className="pt-20">
      <section className="bg-black px-6 py-16 text-white md:px-10 md:py-20">
        <div className="max-w-360 mx-auto space-y-10">
          <Link href="/" className="inline-flex items-center gap-3 text-secondary transition hover:opacity-80">
            <ArrowLeft size={20} aria-hidden="true" />
            <span>voltar</span>
          </Link>

          <div className="max-w-4xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-secondary/35 bg-secondary/10 px-4 py-2 text-base text-secondary">
              <Images size={18} aria-hidden="true" />
              Galeria
            </span>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Registros de presença, palavra, criação e encontro.
            </h1>
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              Um acervo visual para reunir momentos da trajetória de Rinardo Mesquita em educação, arte, cultura,
              formação e vida pública.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray/45 px-6 py-14 md:px-10 md:py-16">
        <div className="max-w-360 mx-auto space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="block text-xl text-primary">Acervo fotográfico</span>
            <h2 className="text-3xl font-semibold text-black md:text-4xl">Imagens em percurso.</h2>
          </div>

          <GaleryGrid />
        </div>
      </section>
    </main>
  );
}

export default GaleryPage;

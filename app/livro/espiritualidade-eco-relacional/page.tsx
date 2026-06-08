import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, BookMarked, BookOpenText, Feather, Leaf, LibraryBig } from 'lucide-react';
import { ecoRelationalBook } from '@/data/ecoRelationalBook';

export const metadata: Metadata = {
  title: `${ecoRelationalBook.title} | Rinardo Mesquita`,
  description:
    'Landing page do livro Espiritualidade Eco-Relacional: entrelaçando saberes para a formação docente, de José Rinardo Alves Mesquita.',
};

const bookDetails = [
  ['Autor', ecoRelationalBook.author],
  ['Editora', ecoRelationalBook.publisher],
  ['Ano', ecoRelationalBook.year],
  ['Extensão', ecoRelationalBook.pages],
  ['Formato', ecoRelationalBook.format],
  ['ISBN físico', ecoRelationalBook.isbn],
  ['ISBN digital', ecoRelationalBook.digitalIsbn],
  ['DOI', ecoRelationalBook.doi],
];

function EspiritualidadeEcoRelacionalBookPage() {
  return (
    <main className="pt-20">
      <section className="bg-black px-6 py-16 text-white md:px-10 md:py-20">
        <div className="max-w-360 mx-auto space-y-10">
          <Link href="/#livro" className="inline-flex items-center gap-3 text-secondary transition hover:opacity-80">
            <ArrowLeft size={20} aria-hidden="true" />
            <span>voltar</span>
          </Link>

          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="space-y-8">
              <div className="space-y-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-secondary/35 bg-secondary/10 px-4 py-2 text-base text-secondary">
                  <Leaf size={18} aria-hidden="true" />
                  Livro de Rinardo Mesquita
                </span>
                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold leading-tight md:text-6xl">{ecoRelationalBook.title}</h1>
                  <p className="max-w-3xl text-xl leading-relaxed text-white/72">{ecoRelationalBook.subtitle}</p>
                </div>
                <p className="max-w-3xl text-lg leading-relaxed text-white/68">{ecoRelationalBook.description}</p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href={ecoRelationalBook.purchaseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl bg-secondary px-6 py-4 text-lg font-medium text-black transition hover:bg-secondary/85 max-sm:w-full">
                  Comprar Livro
                  <ArrowUpRight size={20} aria-hidden="true" />
                </a>
                <a
                  href={ecoRelationalBook.googleBooksUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-2xl border border-white/15 bg-white/8 px-6 py-4 text-lg font-medium text-white transition hover:bg-white/12 max-sm:w-full">
                  Ver no Google Books
                  <BookOpenText size={20} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-white/8 p-4 shadow-2xl">
                <Image
                  src={ecoRelationalBook.coverUrl}
                  alt={`Capa do livro ${ecoRelationalBook.title}`}
                  width={460}
                  height={700}
                  priority
                  unoptimized
                  className="h-auto w-full rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10">
        <div className="max-w-360 mx-auto grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-5">
            <span className="block text-xl text-primary">Resumo da obra</span>
            <h2 className="text-3xl font-semibold text-black md:text-4xl">
              Uma pedagogia do encontro, da escuta e da inteireza humana.
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-black/70">{ecoRelationalBook.summary}</p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {ecoRelationalBook.themes.map((theme) => (
                <span
                  key={theme}
                  className="rounded-2xl border border-primary/15 bg-primary/6 px-4 py-3 text-base text-black/72">
                  {theme}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray/45 px-6 py-16 md:px-10">
        <div className="max-w-360 mx-auto grid gap-10 lg:grid-cols-[1.04fr_0.96fr]">
          <article className="space-y-6 rounded-2xl border border-primary/12 bg-white p-6 md:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Feather size={23} aria-hidden="true" />
            </div>
            <div className="space-y-4">
              <span className="block text-xl text-primary">Breve apresentação do autor</span>
              <h2 className="text-3xl font-semibold text-black md:text-4xl">Rinardo Mesquita</h2>
              <p className="text-lg leading-relaxed text-black/70">{ecoRelationalBook.authorBio}</p>
            </div>
          </article>

          <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/16 text-primary">
              <LibraryBig size={23} aria-hidden="true" />
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              {bookDetails.map(([label, value]) => (
                <div key={label} className="border-b border-black/10 pb-3">
                  <dt className="text-sm text-black/50">{label}</dt>
                  <dd className="mt-1 text-base font-medium text-black/80">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16 md:px-10">
        <div className="max-w-360 mx-auto space-y-10">
          <div className="max-w-3xl space-y-5">
            <span className="block text-xl text-primary">Capítulos</span>
            <h2 className="text-3xl font-semibold text-black md:text-4xl">
              O percurso da obra como uma teia em construção.
            </h2>
            <p className="text-lg leading-relaxed text-black/70">
              Os títulos acompanham a imagem da teia: primeiras tessituras, fios epistêmicos, metodologia formativa,
              encontros dialógicos e sínteses abertas ao cuidado com a vida.
            </p>
          </div>

          <ol className="grid gap-4 md:grid-cols-2">
            {ecoRelationalBook.chapters.map((chapter, index) => (
              <li
                key={chapter}
                className="rounded-2xl border border-primary/14 bg-linear-40 from-primary/8 to-secondary/12 p-5">
                <span className="text-sm font-medium text-primary">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-xl font-semibold leading-snug text-black">{chapter}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white md:px-10">
        <div className="max-w-360 mx-auto flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="block text-xl text-secondary">Leitura e formação</span>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Um convite para pensar educação como presença, relação e cuidado.
            </h2>
            <p className="text-lg leading-relaxed text-white/70">
              A obra conversa com escolas, universidades, redes públicas, grupos de estudo e pessoas interessadas em
              espiritualidade, formação docente e experiências pedagógicas dialógicas.
            </p>
          </div>

          <a
            href={ecoRelationalBook.purchaseUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-2xl bg-secondary px-6 py-4 text-lg font-medium text-black transition hover:bg-secondary/85 max-sm:w-full">
            Comprar livro
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  );
}

export default EspiritualidadeEcoRelacionalBookPage;

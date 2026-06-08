import { ArrowUpRight, BookOpenText, Leaf } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { ecoRelationalBook } from '@/data/ecoRelationalBook';

function BookShowcase() {
  return (
    <section id="livro" className="bg-gray/40 px-6 py-16 md:px-10">
      <div className="max-w-360 mx-auto grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div className="mx-auto w-full max-w-72 sm:max-w-80">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-white p-4 shadow-sm">
            <Image
              src={ecoRelationalBook.coverUrl}
              alt={`Capa do livro ${ecoRelationalBook.title}`}
              width={420}
              height={640}
              unoptimized
              className="h-auto w-full rounded-xl object-cover"
            />
          </div>
        </div>

        <div className="space-y-7">
          <div className="space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-4 py-2 text-base text-primary">
              <Leaf size={18} aria-hidden="true" />
              Livro em destaque
            </span>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-black md:text-5xl">{ecoRelationalBook.title}</h2>
              <p className="text-xl leading-relaxed text-black/70">{ecoRelationalBook.subtitle}</p>
            </div>
            <p className="max-w-3xl text-lg leading-relaxed text-black/70">{ecoRelationalBook.description}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={ecoRelationalBook.purchaseUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-lg font-medium text-white transition hover:bg-primary/90 max-sm:w-full">
              Comprar livro
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <Link
              href="/livro/espiritualidade-eco-relacional"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-primary/25 bg-white px-6 py-4 text-lg font-medium text-black/80 transition hover:bg-gray/70 max-sm:w-full">
              Ler apresentação
              <BookOpenText size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookShowcase;

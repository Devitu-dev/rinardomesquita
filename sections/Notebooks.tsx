import NotebookCategoryCard from '@/components/NotebookCategoryCard';
import { MoveRight } from 'lucide-react';
import { categories } from '@/data/notebooksCategories.json';
import Link from 'next/link';

function Notebooks() {
  return (
    <section id="cadernos" className="bg-gray py-16 space-y-12 px-6">
      <div className="max-w-360 mx-auto flex items-baseline-last justify-between flex-wrap gap-6 md:gap-0">
        <div className="space-y-6 text-left max-w-xl">
          <span className="block leading-relaxed font-normal text-black/80 text-xl">Cadernos</span>
          <h2 className="font-semibold text-3xl text-black">Um acervo de temas para pensar e sentir.</h2>
          <p className="text-black/80 font-normal text-xl">
            Cada caderno organiza um campo de reflexão com linguagem própria, mas dentro de uma identidade comum.
          </p>
        </div>
        <Link
          href="/notebooks"
          className="flex items-center gap-3 text-primary font-semibold text-lg underline w-full justify-end hover:opacity-80">
          <span>Ver todos os cadernos</span>
          <MoveRight size={18} />
        </Link>
      </div>
      <ul className="flex items-baseline justify-center gap-6 pb-4 flex-wrap">
        {categories.map(({ id, title, description, cover }) => (
          <NotebookCategoryCard key={id} title={title} description={description} cover={cover} />
        ))}
      </ul>
    </section>
  );
}

export default Notebooks;

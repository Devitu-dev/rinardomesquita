'use client';

import { ArrowLeft } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';
import { categories } from '@/data/notebooksCategories.json';
import Link from 'next/link';

function Category() {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  return (
    <div className="pt-20">
      <div className="border-b border-gray">
        <div className="max-w-6xl mx-auto py-9 px-6 space-y-6">
          <button
            onClick={() => router.push('/#cadernos')}
            className="flex items-center gap-3 text-primary text-base hover:cursor-pointer hover:opacity-80">
            <ArrowLeft size={20} />
            <span>voltar</span>
          </button>
          <h1 className="text-black font-semibold text-5xl">Cadernos</h1>
          <p className="text-black/80 text-lg">
            Os cadernos reúnem textos autorais organizados por temas, formando percursos de leitura que convidam à
            reflexão, à escuta e à presença. Cada caderno abriga ideias, perguntas e experiências em diálogo com
            diferentes campos do pensamento, oferecendo ao leitor um espaço de aprofundamento sensível, consistente e
            acessível.
          </p>
        </div>
      </div>
      <div className="bg-gray/40 pb-6">
        <div className="max-w-6xl mx-auto flex items-center px-6 gap-4 py-10">
          <span className="text-black/80 text-lg">outras categorias:</span>
          <div className="flex items-center gap-6">
            {categories.map(({ id: categoryId, title }) => {
              if (categoryId !== id)
                return (
                  <Link
                    href={`/notebooks/categories/${categoryId}`}
                    key={categoryId}
                    className="bg-gray text-primary px-4 py-2 rounded-2xl font-normal text-lg hover:bg-primary/80 hover:text-white transition-colors">
                    {title}
                  </Link>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;

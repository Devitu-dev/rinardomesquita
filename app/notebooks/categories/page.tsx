'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { categories } from '@/data/notebooksCategories.json';
import { notebooks } from '@/data/notebooks.json';
import { useMemo, useState } from 'react';
import { getReadingLength } from '@/utils/reading';

type TCategory = 'Filosofia' | 'Arte' | 'Educação' | 'Espiritualidade';

function Category() {
  const [category, setCategory] = useState<TCategory>('Filosofia');

  const notebooksByCategory = useMemo(
    () => notebooks.filter(({ category: notebookCategory }) => notebookCategory === category),
    [category],
  );

  return (
    <div className="pt-20">
      <div className="border-b border-gray px-6">
        <div className="max-w-6xl mx-auto py-9 space-y-6">
          <Link href="/#cadernos">
            <button className="flex items-center gap-3 text-primary text-base hover:cursor-pointer hover:opacity-80 mb-6">
              <ArrowLeft size={20} />
              <span>voltar</span>
            </button>
          </Link>
          <h1 className="text-black font-semibold text-5xl">Cadernos</h1>
          <p className="text-black/80 text-lg">
            Os cadernos reúnem textos autorais organizados por temas, formando percursos de leitura que convidam à
            reflexão, à escuta e à presença. Cada caderno abriga ideias, perguntas e experiências em diálogo com
            diferentes campos do pensamento, oferecendo ao leitor um espaço de aprofundamento sensível, consistente e
            acessível.
          </p>
        </div>
      </div>
      <div className="bg-gray/40 pb-20 px-6">
        <div className="max-w-6xl mx-auto flex items-center gap-6 py-10 flex-wrap">
          <span className="text-black/80 text-lg">outras categorias:</span>
          <div className="flex items-center gap-6 flex-wrap">
            {categories.map(({ id: categoryId, title }) => {
              if (categoryId !== category)
                return (
                  <button
                    key={categoryId}
                    className="bg-gray text-primary px-4 py-2 rounded-xl font-normal text-lg hover:bg-primary/80 hover:text-white transition-colors"
                    onClick={() => setCategory(title as TCategory)}>
                    {title}
                  </button>
                );
            })}
          </div>
        </div>
        <div className="max-w-6xl mx-auto space-y-6 bg-white border border-gray rounded-3xl px-8 py-10">
          <div className="border-b border-gray pb-4 flex items-baseline-last justify-between">
            <div className="space-y-3">
              <span className="block text-black/80 font-normal text-xl">categoria</span>
              <h3 className="text-3xl text-black font-semibold">{category}</h3>
            </div>
            <span className="text-primary bg-gray px-4 py-2 rounded-xl">
              {notebooksByCategory.length} {notebooksByCategory.length === 1 ? 'caderno' : 'cadernos'}
            </span>
          </div>
          {notebooksByCategory.length >= 1 ? (
            <ul className="border border-gray rounded-3xl [&>*:nth-child(odd)]:border-b">
              {notebooksByCategory.map(({ id, title, content }) => (
                <li key={id} className="px-5 py-6 flex items-center justify-between border-gray flex-wrap gap-6">
                  <div className="space-y-6">
                    <h4 className="text-black text-xl font-semibold capitalize">{title.split(':')[0]}</h4>
                    <span className="inline-block text-primary bg-gray px-4 py-2 rounded-xl">
                      {getReadingLength(content).label}
                    </span>
                  </div>
                  <Link className="max-sm:w-full" href={`/notebooks/${id}`}>
                    <button className="border border-gray text-primary px-6 py-4 rounded-2xl hover:bg-primary hover:text-white hover:cursor-pointer transition-colors font-normal max-sm:w-full">
                      Ir para a leitura
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <span className="text-lg text-black/80 ">Em breve cadernos sobre a temática de {category}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;

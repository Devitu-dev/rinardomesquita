'use client';

import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { notebooks } from '@/data/notebooks.json';
import { getReadingLength } from '@/utils/reading';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';
import RecommendationNotebookCard from '@/components/RecommendationNotebookCard';
import { type NotebookCategory, useNavContext } from '@/context/NavContext';

const fontSizeMap = {
  sm: 16,
  base: 20,
  lg: 24,
};

function Notebook() {
  const [fontSize, setFontSize] = useState(fontSizeMap.base);
  const { setCurrentNotebookCategory } = useNavContext();

  const router = useRouter();
  const { id } = useParams<{ id: string }>();

  const notebook = useMemo(() => notebooks.find(({ id: notebookId }) => notebookId === id), [id]);
  const othersNotebooks = useMemo(() => notebooks.filter(({ id: notebookId }) => notebookId !== id), [id]);

  useEffect(() => {
    if (notebook) {
      setCurrentNotebookCategory(notebook.category as NotebookCategory);
    }
  }, [notebook, setCurrentNotebookCategory]);

  const increaseFontSize = () => {
    setFontSize((prev) => {
      if (prev === fontSizeMap.base) return fontSizeMap.lg;
      else if (prev === fontSizeMap.lg) return fontSizeMap.lg;
      return fontSizeMap.base;
    });
  };

  const decreaseFontSize = () => {
    setFontSize((prev) => {
      if (prev === fontSizeMap.base) return fontSizeMap.sm;
      else if (prev === fontSizeMap.sm) return fontSizeMap.sm;
      return fontSizeMap.base;
    });
  };

  if (!notebook) {
    return (
      <div className="flex justify-center items-center h-screen flex-col gap-6">
        <div className="border-4 border-t-primary border-gray rounded-full animate-spin transition-all w-12 h-12" />
        <span>Carregando conteúdo...</span>
      </div>
    );
  }

  const readingLength = getReadingLength(notebook.content);
  const noteLines = notebook.note.trim().length >= 1 ? notebook.note.trim().split('\n') : [];

  return (
    <div className="pt-20">
      <div className="border-b border-gray">
        <div className="max-w-6xl mx-auto py-9 px-6 md:px-10 space-y-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex items-center gap-3 text-primary text-base hover:cursor-pointer hover:opacity-80">
            <ArrowLeft size={20} />
            <span>voltar</span>
          </button>
          <h1 className="text-black font-semibold text-3xl md:text-5xl">{notebook.title}</h1>
          <p className="text-black/80 text-lg">{notebook.description}</p>
          <div className="flex items-center gap-6">
            <span className="bg-gray text-primary px-4 py-2 rounded-2xl text-lg">{notebook.category}</span>
            <span className="bg-gray text-primary px-4 py-2 rounded-2xl text-lg">{readingLength.label}</span>
          </div>
          <div className="inline-flex items-center border-gray border rounded-[20px] text-black text-xl">
            <button
              type="button"
              onClick={decreaseFontSize}
              style={{
                backgroundColor: fontSize === fontSizeMap.sm ? 'rgba(235, 235, 235, 0.8)' : undefined,
                cursor: fontSize === fontSizeMap.sm ? 'not-allowed' : undefined,
              }}
              className="flex items-center py-2 px-4 gap-1 hover:bg-gray/80 hover:cursor-pointer rounded-l-[20px]">
              <Minus size={16} />
              <span className="block">A</span>
            </button>
            <button
              type="button"
              onClick={increaseFontSize}
              style={{
                backgroundColor: fontSize === fontSizeMap.lg ? 'rgba(235, 235, 235, 0.8)' : undefined,
                cursor: fontSize === fontSizeMap.lg ? 'not-allowed' : undefined,
              }}
              className="flex items-center py-2 px-4 gap-1 border-l border-gray hover:bg-gray/80 hover:cursor-pointer rounded-r-[20px]">
              <Plus size={16} />
              <span className="block">A</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray/40 pb-6">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 space-y-4">
          {notebook.content.split('\n\n').map((paragraph, index) => (
            <p style={{ fontSize }} key={index} className="text-justify font-normal text-black leading-relaxed">
              {paragraph}
            </p>
          ))}
          {noteLines.length >= 1 && (
            <section className="border-t border-black/10 pt-8 mt-10 space-y-4">
              <h2 className="text-black font-semibold text-xl">Nota</h2>
              <div className="space-y-3">
                {noteLines.map((line, index) => {
                  const repositoryUrl = line.startsWith('Acesso: ') ? line.replace('Acesso: ', '').trim() : null;

                  return (
                    <p
                      key={`${line}-${index}`}
                      className="text-justify font-normal text-black/80 text-base leading-relaxed">
                      {repositoryUrl ? (
                        <>
                          Acesso:{' '}
                          <a
                            href={repositoryUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary underline underline-offset-4 hover:opacity-80">
                            {repositoryUrl}
                          </a>
                        </>
                      ) : (
                        line
                      )}
                    </p>
                  );
                })}
              </div>
            </section>
          )}
          {notebook.references.length >= 1 && (
            <section className="border-t border-black/10 pt-8 mt-10 space-y-6">
              <h2 className="text-black font-semibold text-xl">Referências</h2>
              <ul className="space-y-4">
                {notebook.references.map((reference) => (
                  <li key={reference} className="text-justify font-normal text-black/80 text-base leading-relaxed">
                    {reference}
                  </li>
                ))}
              </ul>
            </section>
          )}
          <div className="my-8 bg-black/10 w-full h-px" />
          <div className="bg-white rounded-3xl border border-gray p-6">
            <span className="text-base text-black/80">Outros cadernos</span>
            <h3 className="text-black text-2xl font-medium mt-4">Continue a leitura</h3>
            <ul className="flex items-center flex-wrap gap-6 mt-10">
              {othersNotebooks
                .map(({ id, title, category }) => (
                  <li className="max-sm:w-full" key={id}>
                    <RecommendationNotebookCard id={id} title={title} category={category} />
                  </li>
                ))
                .slice(0, 3)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notebook;

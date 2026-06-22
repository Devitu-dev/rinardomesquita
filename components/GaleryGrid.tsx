'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

type GaleryImage = {
  id: string;
  src: string;
  caption: string;
};

const captions = [
  'Formação com equipe Pedagógica na Secretaria de Educação de Itapipoca - Ano 2023',
  'Programa Geração da Paz - Governo do Estado do Ceará - Coordenadoria Regional de Desenvolvimento da Educação Básica - CREDE 02 , ano 2006',
  'Movimento Estudantil - Grêmio Estudantil Escola de Ensino Médio Coronel Murilo Serpa em Itapipoca CE, ano 2003 - 2009',
  'Projeto de Educação de Valores nas Escolas - ano 2022 (Secretaria Municipal de Educação de Itapipoca)',
  'Tese de Doutorado em Educação - Universidade Federal do Ceará.',
  'equipe de jovens estudantes do Programa Geração da Paz - Governo do Estado do Ceará.',
  'Espetáculo Travessias: performance cênico-poética. Ano 2017',
  'Curso de Formação para Gestores Escolares da Rede Pública Municipal de Educação de Itapipoca. Gestão e Liderança: escolas que cuidam. Ano- 2021.',
  'Idealizador do Festival Pedras que Estalam: Mostra de Arte e Culturas das escolas públicas municipais de Itapipoca.',
  'Espetáculo teatral DEVELOPAR, ano 2006.',
  'Espetáculo Teatral - DEVELOPAR. Ano: 2006',
  'Teatro José de Alencar - Fortaleza. Ano 1998.',
  'Exposição dos resultados da pesquisa de Mestrado em Sociobiodiversidade e Tecnologias Sustentáveis - UNILAB. Espaço Galpão da Cena - Itapipoca-CE.',
  'Práticas Corporais Interativas - Formação humana-relacional com docentes da Rede Pública Estadual de Itapipoca-CE. Ano: 2018-2019.',
  'Teias Formativas - Formação Pedagógica na Escola de Ensino Médio Coronel Murilo Serpa, Ano: 2008.',
  'Seminário de Educação do Campo de Itapipoca-CE. Ano, 2022.',
  'Direção e encenação do espetáculo AUTO DA PAIXÃO DE DEUS, Ano 2009.',
  'Auto da Paixão de Deus: espetáculo teatral. ano 2009.',
  'Auto da Paixão de Deus, ano 2009.',
  'Gestão da Secretaria da Cultura de Itapipoca - Ano 2013-2016.',
  'Movimento Viva Teatro - Ano 2016',
  'Formação humana relacional com docentes e estudantes da Escola de Ensino Médio Coronel Murilo Serpa, Itapipoca-CE. Ano 2019.',
  'Músico Católico: ano de 1993 a 2010.',
  'Formação Eco-Relacional na Escola. Ano 2019.',
];

const totalImages = 24;
const galeryImages: GaleryImage[] = Array.from({ length: totalImages }, (_, index) => {
  const id = String(index + 1).padStart(2, '0');

  return {
    id,
    src: `https://hageqoxbr0wzol2y.public.blob.vercel-storage.com/galery/${id}.jpeg`,
    caption: captions[index],
  };
});

function GaleryGrid() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage = useMemo(() => (selectedIndex === null ? null : galeryImages[selectedIndex]), [selectedIndex]);

  const showPreviousImage = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === 0 ? galeryImages.length - 1 : currentIndex - 1;
    });
  };

  const showNextImage = () => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) return null;

      return currentIndex === galeryImages.length - 1 ? 0 : currentIndex + 1;
    });
  };

  const closeExpandedImage = () => {
    setSelectedIndex(null);
  };

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeExpandedImage();
      if (event.key === 'ArrowLeft') showPreviousImage();
      if (event.key === 'ArrowRight') showNextImage();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      <div className="overflow-hidden rounded-2xl border border-black/10 bg-white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galeryImages.map(({ id, src }, index) => (
            <figure
              key={id}
              className="group border-b border-black/10 bg-white transition last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-last-child(-n+2)]:border-b-0 lg:[&:nth-child(n)]:border-r lg:[&:nth-child(3n)]:border-r-0 lg:[&:nth-last-child(-n+3)]:border-b-0 xl:[&:nth-child(n)]:border-r xl:[&:nth-child(4n)]:border-r-0 xl:[&:nth-last-child(-n+4)]:border-b-0">
              <button
                type="button"
                aria-label={`Expandir foto ${id}`}
                onClick={() => setSelectedIndex(index)}
                className="block w-full cursor-pointer">
                <span className="relative block aspect-[4/5] overflow-hidden bg-gray">
                  <Image
                    src={src}
                    alt={`Foto ${id} de Rinardo Mesquita`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </span>
              </button>
            </figure>
          ))}
        </div>
      </div>

      {selectedImage && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${selectedImage.id} ampliada`}
          onClick={closeExpandedImage}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/88 px-4 py-5 backdrop-blur-sm md:px-8">
          <div onClick={(event) => event.stopPropagation()} className="flex max-h-full w-full max-w-6xl flex-col gap-4">
            <div className="flex items-center justify-between gap-4 text-white">
              <span className="text-sm text-white/70">
                {String(selectedIndex + 1).padStart(2, '0')} / {galeryImages.length}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  aria-label="Foto anterior"
                  onClick={showPreviousImage}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20">
                  <ChevronLeft size={22} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Próxima foto"
                  onClick={showNextImage}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20">
                  <ChevronRight size={22} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  aria-label="Fechar foto ampliada"
                  onClick={closeExpandedImage}
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20">
                  <X size={22} aria-hidden="true" />
                </button>
              </div>
            </div>

            <figure className="overflow-hidden rounded-2xl border border-white/12 bg-white/8">
              <div className="relative h-[68dvh] min-h-80 w-full bg-black/40 md:h-[72dvh]">
                <Image
                  src={selectedImage.src}
                  alt={`Foto ${selectedImage.id} de Rinardo Mesquita ampliada`}
                  fill
                  sizes="100vw"
                  priority
                  className="object-contain"
                />
              </div>
              <figcaption className="border-t border-white/10 bg-black/30 px-5 py-4 text-base leading-relaxed text-white/82">
                {selectedImage.caption}
              </figcaption>
            </figure>
          </div>
        </div>
      )}
    </>
  );
}

export default GaleryGrid;

import { BookOpenText, GraduationCap, HeartHandshake, Landmark, MoveRight, Theater } from 'lucide-react';
import Link from 'next/link';

const timeline = [
  {
    period: 'Desde 2003',
    title: 'Docência na rede pública',
    description:
      'Professor de Linguagens, Artes, Literatura e Produção Textual na Rede Pública Estadual de Ensino do Ceará.',
    icon: BookOpenText,
  },
  {
    period: 'Mais de 25 anos',
    title: 'Cena, corpo e cultura',
    description:
      'Ator, diretor teatral, mobilizador cultural e artista ligado a experiências populares, comunitárias e formativas.',
    icon: Theater,
  },
  {
    period: '2013 - 2016',
    title: 'Cultura em Itapipoca',
    description:
      'Coordenou a política municipal de cultura, articulando criação artística, território, participação e memória.',
    icon: Landmark,
  },
  {
    period: '2021 - 2024',
    title: 'Pedagogia do Cuidado',
    description:
      'Criou os princípios estruturantes da Educação de Itapipoca e atuou em funções de gestão, formação e secretaria.',
    icon: HeartHandshake,
  },
  {
    period: '2025 - 2026',
    title: 'Gestão educacional',
    description: 'Atua como Secretário Executivo de Educação, fortalecendo aprendizagem, equidade e formação docente.',
    icon: GraduationCap,
  },
];

function About() {
  return (
    <section id="sobre" className="bg-black px-6 py-20">
      <div className="max-w-360 mx-auto grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="space-y-8">
          <div className="space-y-6 text-left">
            <span className="block leading-relaxed font-normal text-secondary text-xl">Sobre Rinardo Mesquita</span>
            <h2 className="font-semibold text-3xl text-white md:text-4xl">
              Uma trajetória entre pensamento, cuidado, criação e educação pública.
            </h2>
            <p className="text-white/70 font-light text-lg leading-relaxed">
              Professor, pesquisador, escritor, formador, gestor público, filósofo, pedagogo, artista da cena e
              psicanalista em formação. Sua atuação articula educação, cultura, espiritualidade eco-relacional,
              políticas públicas e formação humana integral.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="block text-sm text-secondary">Formação acadêmica</span>
              <strong className="mt-2 block text-lg font-semibold text-white">Doutor em Educação pela UFC</strong>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Com percurso em Sociobiodiversidade, Educação Biocêntrica, Letras, Pedagogia, Filosofia e Psicanálise.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <span className="block text-sm text-secondary">Atuação docente</span>
              <strong className="mt-2 block text-lg font-semibold text-white">Rede pública e UNINTA</strong>
              <p className="mt-2 text-sm leading-relaxed text-white/60">
                Forma estudantes, professores, gestores, artistas e lideranças em experiências críticas e sensíveis.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-secondary/30 bg-secondary/10 p-5">
            <span className="block text-sm text-secondary">Palestras, cursos e formações</span>
            <p className="mt-3 text-base leading-relaxed text-white/70">
              Percursos para escolas, redes públicas, instituições, coletivos culturais e equipes que desejam pensar
              educação, cuidado, arte, espiritualidade e relações humanas com profundidade.
            </p>
            <Link
              href="/formacoes"
              className="mt-5 inline-flex items-center gap-3 rounded-2xl bg-secondary px-5 py-3 text-base font-medium text-black transition hover:bg-secondary/85">
              <span>Ver percursos formativos</span>
              <MoveRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute bottom-6 left-5 top-6 hidden w-px bg-white/10 sm:block" />
          <ol className="space-y-4">
            {timeline.map(({ period, title, description, icon: Icon }) => (
              <li
                key={`${period}-${title}`}
                className="relative space-y-3 rounded-2xl border border-white/10 bg-white/6 p-5 transition hover:bg-white/10 sm:ml-14 sm:space-y-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/40 bg-black text-secondary sm:absolute sm:-left-14 sm:top-5">
                  <Icon size={18} aria-hidden="true" />
                </div>
                <span className="text-sm font-medium text-secondary">{period}</span>
                <h3 className="mt-2 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-white/65">{description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default About;

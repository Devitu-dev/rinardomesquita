import {
  ArrowLeft,
  BookOpenText,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Mic2,
  PenLine,
  Theater,
  UsersRound,
} from 'lucide-react';
import Link from 'next/link';

const offerings = [
  {
    title: 'Palestras',
    description:
      'Encontros de escuta e pensamento para escolas, redes, eventos, jornadas pedagógicas e instituições que desejam aprofundar temas ligados à formação humana.',
    icon: Mic2,
    surfaceClass: 'border-secondary/25 bg-linear-40 from-secondary/20 to-primary/8',
    iconClass: 'bg-secondary/18 text-primary',
    items: [
      'Cultura de Paz e Espiritualidade nas escolas',
      'EcoTecnologia Social',
      'Pedagogia do Cuidado',
      'Educação Socioemocional',
      'Gestão Escolar para Equidade',
      'Educação Dialógica na formação docente',
      'Docência no século XXI: por uma pedagogia do cuidado e do encontro',
    ],
  },
  {
    title: 'Cursos e formações em educação',
    description:
      'Percursos formativos para estudantes, professores, gestores escolares, lideranças educacionais e equipes comprometidas com equidade, aprendizagem e cuidado.',
    icon: GraduationCap,
    surfaceClass: 'border-primary/20 bg-linear-40 from-primary/14 to-gray/80',
    iconClass: 'bg-primary/12 text-primary',
    items: [
      'Formação de Lideranças Educacionais para Equidade',
      'Formação para lideranças estudantis',
      'Produção Textual Científica e Criativa',
      'Formação em Educação Socioemocional',
    ],
  },
  {
    title: 'Cursos e formações em artes',
    description:
      'Experiências que aproximam corpo, voz, escrita, cena, criação e convivência, valorizando a arte como prática formativa e comunitária.',
    icon: Theater,
    surfaceClass: 'border-black/10 bg-linear-40 from-black/8 to-secondary/16',
    iconClass: 'bg-black/8 text-black',
    items: [
      'Preparação Técnica para Atores: voz, corpo e interações cênicas',
      'Escrita criativa',
      'Relações humanas no ambiente profissional',
    ],
  },
  {
    title: 'Cursos e formações em espiritualidade',
    description:
      'Vivências e estudos sobre espiritualidade eco-relacional, práticas corporais integrativas e cuidado com a vida em suas dimensões pessoais, comunitárias e ambientais.',
    icon: Leaf,
    surfaceClass: 'border-primary/15 bg-linear-40 from-primary/10 to-secondary/22',
    iconClass: 'bg-secondary/16 text-primary',
    items: ['Espiritualidade Eco-Relacional: teoria e práticas corporais integrativas relacionais'],
  },
];

const principles = [
  {
    title: 'Educação pública e equidade',
    description:
      'A formação parte do compromisso com o direito à aprendizagem, a gestão democrática, a pesquisa e o fortalecimento de redes educacionais.',
    icon: BookOpenText,
  },
  {
    title: 'Cuidado e presença',
    description:
      'Cada proposta cultiva escuta, vínculo, diálogo e responsabilidade com as pessoas, seus territórios e seus modos de aprender.',
    icon: HeartHandshake,
  },
  {
    title: 'Arte, corpo e palavra',
    description:
      'As experiências podem integrar leitura, escrita, cena, voz, movimento e criação como caminhos de expressão e reflexão.',
    icon: PenLine,
  },
  {
    title: 'Formação de coletivos',
    description:
      'Os percursos podem ser adaptados para equipes escolares, lideranças estudantis, agentes culturais, comunidades e instituições.',
    icon: UsersRound,
  },
];

function Formacoes() {
  return (
    <main className="pt-20">
      <section className="bg-black px-6 py-16 text-white">
        <div className="max-w-360 mx-auto space-y-10">
          <Link href="/#sobre" className="flex items-center gap-3 text-secondary transition hover:opacity-80">
            <ArrowLeft size={20} aria-hidden="true" />
            <span>voltar</span>
          </Link>
          <div className="space-y-6">
            <span className="block text-xl text-secondary">Contratação</span>
            <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
              Palestras, cursos e formações para instituições, redes e comunidades.
            </h1>
            <p className="text-lg leading-relaxed text-white/70 md:text-xl">
              Propostas formativas que articulam educação, gestão pública, arte, cultura, espiritualidade
              eco-relacional, filosofia, cuidado e formação humana integral.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="max-w-360 mx-auto space-y-10">
          <div className="max-w-3xl space-y-5">
            <span className="block text-xl text-black/70">Percursos disponíveis</span>
            <h2 className="text-3xl font-semibold text-black md:text-4xl">
              Temas para encontros de estudo, criação, gestão e cuidado.
            </h2>
            <p className="text-lg leading-relaxed text-black/70">
              As propostas abaixo podem assumir o formato de palestra, oficina, curso de curta duração, jornada
              formativa ou acompanhamento continuado.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {offerings.map(({ title, description, icon: Icon, surfaceClass, iconClass, items }) => (
              <article key={title} className={`rounded-2xl border p-6 shadow-sm ${surfaceClass}`}>
                <div className="flex items-start gap-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${iconClass}`}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-semibold text-black">{title}</h3>
                    <p className="text-base leading-relaxed text-black/65">{description}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="rounded-xl border border-black/10 bg-black/5 px-4 py-3 text-base text-black/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray/40 px-6 py-16">
        <div className="max-w-360 mx-auto grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-5">
            <span className="block text-xl text-black/70">Fundamentos</span>
            <h2 className="text-3xl font-semibold text-black md:text-4xl">
              Uma formação que nasce do encontro entre pensamento e experiência.
            </h2>
            <p className="text-lg leading-relaxed text-black/70">
              O trabalho formativo valoriza competências criativas, relacionais, socioemocionais, críticas e reflexivas,
              em diálogo com Educação Biocêntrica, Perspectiva Eco-Relacional, Pedagogia do Cuidado e educação
              dialógica.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {principles.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-gray bg-white p-5">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-gray text-primary">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-black">{title}</h3>
                <p className="mt-3 text-base leading-relaxed text-black/65">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white">
        <div className="max-w-360 mx-auto flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="block text-xl text-secondary">Convite</span>
            <h2 className="text-3xl font-semibold md:text-4xl">Construir uma proposta formativa em diálogo.</h2>
            <p className="text-lg leading-relaxed text-white/70">
              Para contratação, o primeiro passo é uma conversa sobre o público, o território, os objetivos do encontro
              e o tempo disponível para a experiência.
            </p>
          </div>

          <Link
            href="/#contato"
            className="inline-flex items-center justify-center rounded-2xl bg-secondary px-6 py-4 text-lg font-medium text-black transition hover:bg-secondary/85 max-sm:w-full">
            Conversar sobre formação
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Formacoes;

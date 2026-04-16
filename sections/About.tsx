import { GraduationCap, MoveRight } from 'lucide-react';
import Link from 'next/link';

function About() {
  return (
    <section id="about" className="bg-black py-16 space-y-12 px-6">
      <div className="max-w-360 mx-auto flex justify-center gap-12 flex-wrap md:flex-nowrap">
        <div className="space-y-6 text-left w-full bg-linear-30 from-primary/45 to-white/5 p-7 rounded-3xl border border-white/10">
          <span className="block leading-relaxed font-normal text-secondary text-base">Autor</span>
          <h2 className="font-semibold text-3xl text-white">Quem sou eu?</h2>
          <p className="text-white/65 font-light text-base">
            Um espaço para apresentar a voz, a trajetória acadêmica e a consistência humana por trás da proposta.
          </p>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/5 rounded-xl">
              <GraduationCap color="white" />
            </div>
            <div>
              <span className="block text-base font-normal text-white">Trajetoria academica</span>
              <span className="block text-sm font-normal text-white/60">Formação, pesquisa e percurso autoral</span>
            </div>
          </div>
        </div>

        <div className="space-y-6 text-left w-full bg-white/10 p-7 rounded-3xl border border-white/10">
          <span className="block leading-relaxed font-normal text-secondary text-base">AMANI</span>
          <h2 className="font-semibold text-3xl text-white">O que é AMANI?</h2>
          <p className="text-white/65 font-light text-base">
            Um projeto institucional e autoral voltado à construção de presença, pensamento e percurso formativo.
          </p>
          <Link href="" className="flex items-center gap-3 text-white font-semibold text-md">
            <span>Saiba mais</span>
            <MoveRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;

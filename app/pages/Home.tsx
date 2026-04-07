import Image from 'next/image';
import hero from '@/assets/images/Hero.png';

function Home() {
  return (
    <div className="px-10 flex py-32 items-center justify-center gap-30 bg-linear-40 from-white from-30% to-gray/80">
      <div className="flex flex-col basis-1/2  gap-8 items-start pl-8">
        <span className="text-base text-primary py-2 px-4 bg-gray border border-primary/20 rounded-full">
          presença, pensamento e experiência
        </span>
        <h1 className="font-semibold text-5xl text-black">Um espaço vivo para leitura, escuta e transformação</h1>
        <p className="text-black/80 text-xl">
          A AMANI propõe uma experiência editorial e sensível entre filosofia, educação, espiritualidade, psicanálise e
          arte.
        </p>
        <div className="flex items-center gap-8">
          <button className="hover:opacity-80 hover:cursor-pointer transition-all bg-primary border border-primary/80 px-8 py-3 rounded-2xl font-normal text-lg text-white">
            Conheça Amani
          </button>
          <button className="hover:bg-gray/80 hover:cursor-pointer transition-all bg-gray/25 border border-primary/25 px-8 py-3 rounded-2xl font-normal text-lg text-black/80">
            Explorar Cadernos
          </button>
        </div>
      </div>
      <div className=" flex justify-center items-center">
        <Image loading="eager" src={hero} alt="uma foto de Rinardo Mesquita" />
      </div>
    </div>
  );
}

export default Home;

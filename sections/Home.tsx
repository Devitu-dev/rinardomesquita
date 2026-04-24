import Image from 'next/image';
import hero from '@/assets/images/Hero.png';
import Link from 'next/link';
import bg from '@/assets/images/home-bg.png';

function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(${bg.src})`,
      }}
      id="home"
      className="min-h-dvh bg-right bg-no-repeat px-6 pt-32 pb-16 md:py-32">
      <div className="max-w-360 mx-auto flex items-center md:justify-between justify-center flex-wrap-reverse md:gap-0">
        <div className="flex flex-col md:basis-1/2 w-full gap-8 items-center md:items-start">
          <span className="text-base text-primary py-2 px-4 bg-gray border border-primary/20 rounded-full">
            presença, pensamento e experiência
          </span>
          <h1 className="font-semibold text-5xl text-black">Um espaço vivo para leitura, escuta e transformação</h1>
          <p className="text-black/80 text-xl">
            Uma experiência editorial e sensível entre filosofia, educação, espiritualidade e arte.
          </p>
          <div className="flex items-center gap-8">
            <Link href="#sobre">
              <button className="hover:opacity-80 hover:cursor-pointer transition-all bg-primary border border-primary/80 px-8 py-3 rounded-2xl font-normal text-lg text-white">
                Conheça Rinardo
              </button>
            </Link>
            <Link href="#cadernos">
              <button className="hover:bg-gray/80 hover:cursor-pointer transition-all bg-gray/25 border border-primary/25 px-8 py-3 rounded-2xl font-normal text-lg text-black/80">
                Explorar Cadernos
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image className="" loading="eager" src={hero} alt="uma foto de Rinardo Mesquita" />
        </div>
      </div>
    </section>
  );
}

export default Home;

import wallpaper from '@/assets/images/espiral-wallpaper.png';
import Image from 'next/image';
import logo from '@/assets/images/logo-verde.svg';

function Manifest() {
  return (
    <section
      style={{
        backgroundImage: `url(${wallpaper.src})`,
      }}
      className="flex flex-col justify-center items-center py-20 px-6">
      <div className="space-y-6 text-center max-w-xl">
        <h2 className="font-semibold text-3xl text-primary">
          Acolher o pensamento com profundidade, beleza e presença.
        </h2>
        <p className="text-black/80 font-normal text-xl">
          Um site que não apenas informa, mas convida à pausa, ao encontro e à leitura com densidade.
        </p>
        <Image className="mx-auto" src={logo} alt="logo" />
      </div>
    </section>
  );
}

export default Manifest;

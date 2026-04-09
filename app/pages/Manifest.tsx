import wallpaper from '@/assets/images/espiral-wallpaper.png';

function Manifest() {
  return (
    <section
      style={{
        backgroundImage: `url(${wallpaper.src})`,
      }}
      className="flex flex-col justify-center items-center py-20 px-6">
      <div className="space-y-6 text-center max-w-xl">
        <span className="block leading-relaxed font-normal text-black/80 text-base">Manifesto</span>
        <h2 className="font-semibold text-3xl text-primary">
          Acolher o pensamento com profundidade, beleza e presença.
        </h2>
        <p className="text-black/80 font-normal text-xl">
          Um site que não apenas informa, mas convida à pausa, ao encontro e à leitura com densidade.
        </p>
      </div>
    </section>
  );
}

export default Manifest;

import Link from 'next/link';

function Contact() {
  return (
    <section id="contato" className="bg-white py-16 px-6">
      <div className="max-w-360 mx-auto flex justify-between flex-wrap gap-12">
        <div className="space-y-12">
          <div className="space-y-6 text-left max-w-xl">
            <span className="block leading-relaxed font-normal text-black/80 text-xl">Contato</span>
            <h2 className="font-semibold text-3xl text-black">Vamos conversar?</h2>
            <p className="text-black/80 font-normal text-xl">Um convite simples para mensagens, trocas e conexões.</p>
          </div>
          <ul className="flex gap-4 items-center">
            <li className="px-4 py-2 rounded-2xl bg-gray text-primary hover:opacity-80">
              <Link href="https://www.linkedin.com/in/rinardo-mesquita-b9bb0133a/" target="_blank">
                Linkedin
              </Link>
            </li>
            <li className="px-4 py-2 rounded-2xl bg-gray text-primary hover:opacity-80">
              <Link href="https://www.instagram.com/rinardomesquita/" target="_blank">
                Instagram
              </Link>
            </li>
            <li className="px-4 py-2 rounded-2xl bg-gray text-primary hover:opacity-80">
              <Link
                href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do;jsessionid=7909FE7C0985C131E38880ABBF22E9E7.buscatextual_0"
                target="_blank">
                Lattes
              </Link>
            </li>
            <li className="px-4 py-2 rounded-2xl bg-gray text-primary hover:opacity-80">
              <Link href="https://ufc.academia.edu/Jos%C3%A9RinardoMesquita" target="_blank">
                Academia.edu
              </Link>
            </li>
          </ul>
        </div>
        <form className="flex flex-col border border-black/10 rounded-2xl p-8 lg:basis-2/5 w-full gap-5">
          <label className="text-black/80 text-base w-full">
            <span className="mb-3 block">Nome</span>
            <input
              className="bg-[#FAFAFA] p-4 rounded-lg border border-black/10 w-full"
              type="text"
              placeholder="Seu nome"
            />
          </label>
          <label className="text-black/80 text-base w-full">
            <span className="mb-3 block">Email</span>
            <input
              className="bg-[#FAFAFA] p-4 rounded-lg border border-black/10 w-full"
              type="email"
              placeholder="seuemail@gmail.com"
            />
          </label>
          <label className="mb-3 text-black/80 text-base w-full">
            <span className="mb-3 block">Message</span>
            <textarea
              className="bg-[#FAFAFA] p-4 rounded-lg border border-black/10 w-full min-h-40"
              placeholder="Escreva sua mensagem"
            />
          </label>
          <button className="px-6 py-4 bg-primary text-white rounded-lg cursor-pointer">Enviar mensagem</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

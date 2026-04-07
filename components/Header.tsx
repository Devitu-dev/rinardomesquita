'use client';

import { useState } from 'react';

type TSections = 'home' | 'cadernos' | 'ritos' | 'contato' | 'sobre';

function Header() {
  const [section, setSection] = useState<TSections>('home');
  return (
    <nav className="flex items-center justify-between py-5 px-10 fixed w-full top-0 border-b border-black/10 bg-white/80 backdrop-blur-md">
      <a className="uppercase text-primary font-semibold text-xl hover:text-secondary" href="">
        Rinardo Mesquita
      </a>
      <ul className="flex items-center justify-evenly gap-6 text-black/80 py-1">
        <li className="hover:text-secondary cursor-pointer relative">
          Home
          {section === 'home' && <div className="h-px w-full bg-primary absolute bottom-0" />}
        </li>
        <li className="hover:text-secondary cursor-pointer">Cadernos</li>
        <li className="hover:text-secondary cursor-pointer">Ritos</li>
        <li className="hover:text-secondary cursor-pointer">Sobre</li>
        <li className="hover:text-secondary cursor-pointer">Contato</li>
      </ul>
    </nav>
  );
}

export default Header;

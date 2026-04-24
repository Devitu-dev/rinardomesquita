'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/images/logo-preta.svg';

const navItems = [
  { label: 'Cadernos', href: '/#cadernos' },
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Contato', href: '/#contato' },
];

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 z-40 flex w-full items-center justify-between border-b border-black/10 bg-white/90 px-6 py-5 backdrop-blur-md md:hidden">
        <Link href="/" className="text-lg font-semibold uppercase text-primary transition-colors hover:text-secondary">
          <Image className="objetc-fit hover:opacity-80 transition-colors" src={logo} alt="logo" />
        </Link>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((currentState) => !currentState)}
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-gray/60">
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {isOpen && (
        <>
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-black/30 md:hidden"
            aria-hidden="true"
          />

          <aside
            id="mobile-menu"
            className="fixed top-0 right-0 z-50 flex h-dvh w-[82%] max-w-80 flex-col bg-white px-6 pb-8 pt-24 shadow-2xl md:hidden">
            <button
              type="button"
              aria-label="Fechar menu"
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-6 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-primary/20 text-primary transition-colors hover:bg-gray/60">
              <X size={22} />
            </button>

            <div className="mb-10 space-y-2">
              <span className="block text-sm uppercase tracking-[0.2em] text-black/50">Menu</span>
              <h2 className="text-2xl font-semibold text-primary">Navegação</h2>
            </div>

            <ul className="flex flex-col gap-5 text-lg text-black/80">
              {navItems.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block border-b border-black/10 pb-3 transition-colors hover:text-secondary">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </>
      )}
    </>
  );
}

export default MobileHeader;

'use client';

import Link from 'next/link';
import logo from '@/assets/images/logo-preta.svg';
import Image from 'next/image';
import { type NavSection, useNavContext } from '@/context/NavContext';

const bookPath = '/livro/espiritualidade-eco-relacional';
const galeryPath = '/galery';

const navItems: Array<{
  href: `/#${NavSection}` | typeof bookPath | typeof galeryPath;
  label: string;
  section?: NavSection;
}> = [
  { href: '/#home', label: 'Home', section: 'home' },
  { href: bookPath, label: 'Livro' },
  { href: galeryPath, label: 'Galeria' },
  { href: '/#cadernos', label: 'Cadernos', section: 'cadernos' },
  { href: '/#sobre', label: 'Sobre', section: 'sobre' },
  { href: '/#contato', label: 'Contato', section: 'contato' },
];

function Header() {
  const { currentSection, pathname } = useNavContext();

  return (
    <nav className="fixed top-0 z-10 hidden w-full border-b border-black/10 bg-white/80 px-6 md:px-10 py-5 backdrop-blur-md md:block">
      <div className="max-w-360 mx-auto flex justify-between items-center">
        <Link href="/" className="group transition-colors">
          <Image className="objetc-fit hover:opacity-80 transition-colors" src={logo} alt="logo" />
        </Link>
        <ul className="flex items-center justify-evenly gap-6 py-1 text-black/80">
          {navItems.map(({ href, label, section: itemSection }) => {
            const isActive = itemSection ? pathname === '/' && currentSection === itemSection : pathname === href;

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={isActive ? 'page' : undefined}
                  className="relative block cursor-pointer hover:text-secondary">
                  {label}
                  {isActive && <div className="absolute bottom-0 h-px w-full bg-primary" />}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Header;

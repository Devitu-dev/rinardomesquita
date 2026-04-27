'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import logo from '@/assets/images/logo-preta.svg';
import Image from 'next/image';

type TSections = 'home' | 'cadernos' | 'contato' | 'sobre';

const navItems: Array<{ href: `/#${TSections}`; label: string; section: TSections }> = [
  { href: '/#home', label: 'Home', section: 'home' },
  { href: '/#cadernos', label: 'Cadernos', section: 'cadernos' },
  { href: '/#sobre', label: 'Sobre', section: 'sobre' },
  { href: '/#contato', label: 'Contato', section: 'contato' },
];

const sectionOrder: TSections[] = ['home', 'cadernos', 'sobre', 'contato'];

function Header() {
  const [section, setSection] = useState<TSections>('home');

  useEffect(() => {
    const updateCurrentSection = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection: TSections = 'home';

      for (const sectionId of sectionOrder) {
        const element = document.getElementById(sectionId);

        if (!element) {
          continue;
        }

        if (element.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      }

      setSection(currentSection);
    };

    updateCurrentSection();
    window.addEventListener('scroll', updateCurrentSection, { passive: true });
    window.addEventListener('resize', updateCurrentSection);

    return () => {
      window.removeEventListener('scroll', updateCurrentSection);
      window.removeEventListener('resize', updateCurrentSection);
    };
  }, []);

  return (
    <nav className="fixed top-0 z-10 hidden w-full border-b border-black/10 bg-white/80 px-10 py-5 backdrop-blur-md md:block">
      <div className="max-w-360 mx-auto flex justify-between items-center">
        <Link href="/" className="group transition-colors">
          <Image className="objetc-fit hover:opacity-80 transition-colors" src={logo} alt="logo" />
        </Link>
        <ul className="flex items-center justify-evenly gap-6 py-1 text-black/80">
          {navItems.map(({ href, label, section: itemSection }) => (
            <li key={itemSection}>
              <Link href={href} className="relative block cursor-pointer hover:text-secondary">
                {label}
                {section === itemSection && <div className="absolute bottom-0 h-px w-full bg-primary" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;

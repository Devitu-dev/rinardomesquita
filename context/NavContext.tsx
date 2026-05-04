'use client';

import { usePathname } from 'next/navigation';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useMemo, useState } from 'react';

export type NavSection = 'home' | 'cadernos' | 'sobre' | 'contato';
export type NotebookCategory = 'Filosofia' | 'Arte' | 'Educação' | 'Espiritualidade Eco-Relacional';
export type NavRouteArea = 'home' | 'notebooks' | 'formacoes' | 'other';

type NavContextValue = {
  currentSection: NavSection;
  setCurrentSection: Dispatch<SetStateAction<NavSection>>;
  currentNotebookCategory: NotebookCategory | null;
  setCurrentNotebookCategory: Dispatch<SetStateAction<NotebookCategory | null>>;
  pathname: string;
  routeArea: NavRouteArea;
  isHome: boolean;
};

const sectionOrder: NavSection[] = ['home', 'cadernos', 'sobre', 'contato'];

const NavContextState = createContext<NavContextValue | null>(null);

function getRouteArea(pathname: string): NavRouteArea {
  if (pathname === '/') {
    return 'home';
  }

  if (pathname.startsWith('/notebooks')) {
    return 'notebooks';
  }

  if (pathname.startsWith('/formacoes')) {
    return 'formacoes';
  }

  return 'other';
}

function getSectionFromRoute(routeArea: NavRouteArea): NavSection {
  if (routeArea === 'notebooks') {
    return 'cadernos';
  }

  if (routeArea === 'formacoes') {
    return 'sobre';
  }

  return 'home';
}

function NavContext({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const routeArea = useMemo(() => getRouteArea(pathname), [pathname]);
  const isHome = routeArea === 'home';
  const [currentHomeSection, setCurrentHomeSection] = useState<NavSection>('home');
  const [notebookCategory, setCurrentNotebookCategory] = useState<NotebookCategory | null>(null);
  const currentSection = isHome ? currentHomeSection : getSectionFromRoute(routeArea);
  const currentNotebookCategory = routeArea === 'notebooks' ? notebookCategory : null;

  useEffect(() => {
    if (!isHome) {
      return;
    }

    const updateCurrentSection = () => {
      const scrollPosition = window.scrollY + 140;
      let nextSection: NavSection = 'home';

      for (const sectionId of sectionOrder) {
        const element = document.getElementById(sectionId);

        if (!element) {
          continue;
        }

        if (element.offsetTop <= scrollPosition) {
          nextSection = sectionId;
        }
      }

      setCurrentHomeSection(nextSection);
    };

    const animationFrame = window.requestAnimationFrame(updateCurrentSection);

    window.addEventListener('scroll', updateCurrentSection, { passive: true });
    window.addEventListener('resize', updateCurrentSection);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', updateCurrentSection);
      window.removeEventListener('resize', updateCurrentSection);
    };
  }, [isHome, routeArea]);

  const value = useMemo(
    () => ({
      currentSection,
      setCurrentSection: setCurrentHomeSection,
      currentNotebookCategory,
      setCurrentNotebookCategory,
      pathname,
      routeArea,
      isHome,
    }),
    [currentSection, currentNotebookCategory, pathname, routeArea, isHome],
  );

  return <NavContextState.Provider value={value}>{children}</NavContextState.Provider>;
}

export function useNavContext() {
  const context = useContext(NavContextState);

  if (!context) {
    throw new Error('useNavContext deve ser usado dentro de NavContext.');
  }

  return context;
}

export default NavContext;

import Image from 'next/image';
import React from 'react';
import devituLogo from '@/assets/images/devitu-logo.svg';
import vituLogo from '@/assets/images/VITU.svg';

function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <footer className="bg-[#000] py-8 px-6 md:px-10 text-white flex items-baseline justify-center md:justify-between flex-wrap">
      <span className="block">© Todos os direitos reservados | {currYear}</span>

      <div className="flex items-center justify-center gap-4 flex-wrap">
        <span className="mt-3 block">Um site desenvolvido por</span>
        <div className="flex items-center gap-4">
          <Image width={80} src={devituLogo} alt={`devitu's logo`} />
          <div className="bg-white h-8 w-px" />
          <a href="https://vitu-portfolio.vercel.app/" target="_blank">
            <Image className="mt-2" width={60} src={vituLogo} alt={`vitu's logo`} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

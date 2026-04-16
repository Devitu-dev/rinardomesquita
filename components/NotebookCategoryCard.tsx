import { MoveRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

type TNotebookCategoryCardPorps = {
  cover: string;
  title: string;
  description: string;
};

function NotebookCategoryCard({ cover, title, description }: TNotebookCategoryCardPorps) {
  return (
    <div className="flex flex-col w-90 gap-7 rounded-4xl border border-secondary/25 bg-white p-6">
      <div className="relative z-0 w-full h-40 overflow-hidden rounded-2xl">
        <Image
          src={cover}
          alt={`An image related to the topic of ${title}`}
          width={350}
          height={150}
          className="object-cover"
          loading="eager"
        />
      </div>
      <div className="flex flex-col gap-3 w-full">
        <h3 className="font-semibold text-2xl text-black">{title}</h3>
        <p className="text-black/80 font-normal text-base">{description}</p>
      </div>
      <a href="" className="flex items-center gap-3 text-primary font-semibold text-md">
        <span>Explorar</span>
        <MoveRight size={16} />
      </a>
    </div>
  );
}

export default NotebookCategoryCard;

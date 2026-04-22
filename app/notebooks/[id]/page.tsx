'use client';

import { ArrowLeft, Minus, Plus } from 'lucide-react';
import { notebooks } from '@/data/notebooks.json';
import { useRouter } from 'next/navigation';

const notebookMock = notebooks[1];

function Notebook() {
  const router = useRouter();
  return (
    <div className="pt-20">
      <div className="border-b border-gray">
        <div className="max-w-6xl mx-auto py-9 px-6 space-y-6">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-3 text-primary text-base hover:cursor-pointer hover:opacity-80">
            <ArrowLeft size={20} />
            <span>voltar</span>
          </button>
          <h1 className="text-black font-semibold text-5xl">{notebookMock.title}</h1>
          <p className="text-black/80 text-lg">{notebookMock.description}</p>
          <div className="flex items-center gap-6">
            <span className="bg-gray text-primary px-4 py-2 rounded-2xl text-lg">{notebookMock.category}</span>
            <span className="bg-gray text-primary px-4 py-2 rounded-2xl text-lg">Leitura média</span>
          </div>
          <div className="inline-flex items-center border-gray border rounded-[20px] text-black text-xl">
            <button className="flex items-center py-2 px-4 gap-1 hover:bg-gray/80 hover:cursor-pointer rounded-l-[20px]">
              <Minus size={16} />
              <span className="block">A</span>
            </button>
            <button className="flex items-center py-2 px-4 gap-1 border-l border-gray hover:bg-gray/80 hover:cursor-pointer rounded-r-[20px]">
              <Plus size={16} />
              <span className="block">A</span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray/40">
        <div className="max-w-6xl mx-auto px-6 py-8 space-y-4">
          {notebookMock.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-justify font-normal text-xl text-black leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="my-8 bg-black/10 w-full h-px" />
          <div>
            <span>Outros cadernos</span>
            <h3>Continue a leitura</h3>
            <div>{/* card componets */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notebook;

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

type TProps = {
  id: string;
  title: string;
  category: string;
};

function RecommendationNotebookCard({ title, category, id }: TProps) {
  return (
    <div className="px-6 py-4 border border-gray rounded-3xl space-y-6 hover:bg-gray/80">
      <span className="block text-sm text-black/80 font-normal">{category}</span>
      <h3 className="text-black font-medium text-xl">{title}</h3>
      <Link className="flex items-center gap-4 text-base font-semibold text-primary" href={`/notebooks/${id}`}>
        <span className="block">Ler caderno</span>
        <ArrowRight size={20} />
      </Link>
    </div>
  );
}

export default RecommendationNotebookCard;

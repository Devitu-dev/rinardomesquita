import { type NotebookCategory } from '@/context/NavContext';
import { categories } from '@/data/notebooksCategories.json';
import NotebookCategoriesClient from './NotebookCategoriesClient';

type NotebooksCategoriesPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

function getInitialCategory(categoryId: string | string[] | undefined): NotebookCategory {
  const selectedCategoryId = Array.isArray(categoryId) ? categoryId[0] : categoryId;
  const selectedCategory = categories.find(({ id }) => id === selectedCategoryId);

  return (selectedCategory?.title ?? 'Filosofia') as NotebookCategory;
}

async function Category({ searchParams }: NotebooksCategoriesPageProps) {
  const { category } = await searchParams;

  return <NotebookCategoriesClient initialCategory={getInitialCategory(category)} />;
}

export default Category;

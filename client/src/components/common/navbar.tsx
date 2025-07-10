import { FileText } from 'lucide-react';

import { ThemeToggle } from '../theme/theme-toggle';
import { ArticleFilter } from '../pages/home/article-filter';

export const Navbar = () => {
  return (
    <nav className="flex flex-col gap-4">
      <div className="bg-secondary sticky h-[80px] top-0 z-50 p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <h1 className="text-xl sm:text-2xl font-semibold">Summarizer Dashboard</h1>
        </div>

        <ThemeToggle />
      </div>

      <div className='px-4'>
        <ArticleFilter />
      </div>
    </nav>
  );
};

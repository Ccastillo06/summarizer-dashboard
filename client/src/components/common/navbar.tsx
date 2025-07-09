import { FileText } from "lucide-react";

import { ThemeToggle } from "../theme/theme-toggle";

export const Navbar = () => {
  return (
    <nav className="bg-secondary border-b border-primary-foreground sticky top-0 z-50 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex-shrink-0">
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <h1 className="text-xl font-semibold">
            Summarizer Dashboard
          </h1>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
};

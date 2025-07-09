import { ArticleList } from "@/components/pages/home/article-list";
import { Highlights } from "@/components/pages/home/highlights";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <main className="p-6 flex flex-col gap-12">
      <Highlights />
      <Separator className="bg-purple-200" />
      <ArticleList />
    </main>
  );
}

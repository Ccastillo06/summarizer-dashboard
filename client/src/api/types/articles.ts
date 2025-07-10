export type Article = {
  id: number;
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
  views: number;
  shares: number;
};

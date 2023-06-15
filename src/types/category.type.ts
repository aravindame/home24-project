import { CategoryArticle } from './article.type';

export type Category = {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory;
} | null;

export type ChildCategoryItem = {
  name: string;
  urlPath: string;
};

export type ChildCategory = {
  list: Array<ChildCategoryItem>;
};

export type Categories = {
  categories: Category[];
  searchableArticles: [];
};

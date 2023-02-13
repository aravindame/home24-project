import { render } from '@testing-library/react';
import { ArticleListTitle } from '../../components/ArticleListTitle';
import { Category, CategoryArticle, ChildCategory } from '../../types';

const categoryArticles: CategoryArticle = { articles: [] };
const childrenCategories: ChildCategory = { list: [] };

const categories: Category = {
  name: 'Lorem Ipsum',
  articleCount: 9,
  categoryArticles,
  childrenCategories,
};

describe('ArticleListTitle', () => {
  it('renders the title with categories name and article count', () => {
    const { container } = render(<ArticleListTitle categories={categories} />);
    expect(container.textContent).toBe(`${categories.name} (${categories.articleCount})`);
  });

  it('handles case with null value categories', () => {
    const { container } = render(<ArticleListTitle categories={null} />);
    expect(container.textContent?.trim()).toBe(`()`);
  });
});

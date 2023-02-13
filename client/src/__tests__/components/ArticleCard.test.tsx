import { render, cleanup } from '@testing-library/react';
import { ArticleCard } from '../../components/ArticleCard';
import { Article } from '../../types';
// import { currencyFormatter } from '../../util/currencyFormatter';

const initValue: Article = {
  name: 'Lorem Ipsum',
  variantName: 'Lorem Ipsum',
  images: [
    {
      path: 'image.jpg',
    },
  ],
  prices: {
    currency: '',
    regular: {
      value: 1234,
    },
  },
};

afterEach(cleanup);

describe('ArticleCard component', () => {
  let article: Article;

  beforeEach(() => {
    article = initValue;
  });

  it('renders the article details correctly', () => {
    const { getByText, container } = render(<ArticleCard article={article} />);
    const articleClass = container.querySelector('.article');
    expect(articleClass).toBeInTheDocument();

    expect(getByText(article.name)).toBeInTheDocument();
    const currency = getByText('12,34 €');
    expect(currency).toBeInTheDocument();

    const imageElement = container.querySelector('img');
    expect(imageElement).toHaveAttribute('src', article.images[0].path);
    expect(imageElement).toHaveAttribute('alt', article.name);

    expect(getByText('Add to cart')).toBeInTheDocument();
  });

  it('handles case with no value prop', () => {
    article.prices.regular.value = 0;
    const { getByText } = render(<ArticleCard article={article} />);
    expect(getByText('0,00 €')).toBeInTheDocument();
  });

  it('handles case with no images prop', () => {
    article.images = [];
    const { getByText } = render(<ArticleCard article={article} />);
    expect(getByText(article.name)).toBeInTheDocument();
    expect(getByText('0,00 €')).toBeInTheDocument();
    expect(getByText('Add to cart')).toBeInTheDocument();
  });
});

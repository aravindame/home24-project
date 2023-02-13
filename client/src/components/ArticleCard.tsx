import { FC } from 'react';
import { Article } from '../types';
import { currencyFormatter } from '../util/currencyFormatter';

type ArticleCardProps = {
  article?: Article;
};

/**
 * A Component that will represent a card of the list of article gird.
 *
 * @author Aravinda Meewalaarachchi
 * @props  An article object which represents a list of attributes including name, image, prices, and variantName
 */

export const ArticleCard: FC<ArticleCardProps> = ({ article }: ArticleCardProps): JSX.Element => {
  // price of the item need to be formatted
  const value: number = article?.prices?.regular?.value || 0;
  return (
    <>
      {article && (
        <article className={'article'}>
          <img src={article?.images[0]?.path} alt={article?.name} />
          <div>{article?.name}</div>
          <div>{currencyFormatter.format(value / 100)}</div>
          <button role='button' aria-label='Add item to cart'>
            Add to cart
          </button>
        </article>
      )}
    </>
  );
};

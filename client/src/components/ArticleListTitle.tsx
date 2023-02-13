import { FC } from 'react';
import { Category } from '../types';

type ArticleListTitleProps = {
  categories?: Category;
};

/**
 * A Component that will visualize the name and the count of the total articles
 *
 * @author Aravinda Meewalaarachchi
 * @props  An category object which represents a list of attributes including name, articleCount, categoryArticles, and childrenCategories
 */

export const ArticleListTitle: FC<ArticleListTitleProps> = ({
  categories,
}: ArticleListTitleProps): JSX.Element => (
  <h1>
    {categories?.name}
    <span className='categories-count'> ({categories?.articleCount})</span>
  </h1>
);

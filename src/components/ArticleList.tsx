import { FC } from 'react';
import { ArticleCard } from './ArticleCard';
import { CategoryArticle, Article } from '../types';
import './../styles/articles.css';

/**
 * A Component that will render a list of articles
 *
 * @author Aravinda Meewalaarachchi
 * @props  A Categories object that contains a categories attribute which is a type of Category object
 */

export const ArticleList: FC<CategoryArticle> = ({ articles }: CategoryArticle): JSX.Element => {
  return (
    <div className={'articles'}>
      {articles?.map((article: Article) => {
        return <ArticleCard key={article?.name} article={article} />;
      })}
    </div>
  );
};

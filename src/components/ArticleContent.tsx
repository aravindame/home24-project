import { FC } from 'react';
import { ArticleList } from './ArticleList';
import { ArticleListTitle } from './ArticleListTitle';
import { defaultValues } from '../graphql/productListDefaultVariableValues';
import { GET_PRODUCTS } from '../graphql/queries/getProducts';
import { ApolloClient, useApolloClient } from '@apollo/client';
import { searchableArticlesVar } from '../graphql/reactivities/searchableArticlesVar';
import './../styles/content.css';

/**
 * This component will render the article content section.
 *
 * @author Aravinda Meewalaarachchi
 *
 */

export const ArticleContent: FC<{}> = (): JSX.Element => {
  const client: ApolloClient<object> = useApolloClient();

  //read category list from apollo client cache
  const {
    categories: [categories],
    searchableArticles,
  } = client.readQuery({
    query: GET_PRODUCTS,
    variables: defaultValues,
  });

  const {
    categoryArticles: { articles },
  } = categories;

  searchableArticles?.length === 0 && searchableArticlesVar([...articles]);

  return (
    <main className={'content'}>
      <ArticleListTitle categories={categories} />
      <ArticleList articles={searchableArticles} />
    </main>
  );
};

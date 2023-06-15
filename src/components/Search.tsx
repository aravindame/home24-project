import { ApolloClient, useApolloClient } from '@apollo/client';
import { FC, useEffect, useState } from 'react';
import { Article, Category } from '../types';
import { GET_PRODUCTS } from '../graphql/queries/getProducts';
import { defaultValues } from '../graphql/productListDefaultVariableValues';
import { searchableArticlesVar } from '../graphql/reactivities/searchableArticlesVar';

type ChangeEvent = React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>;

/**
 * A Component that will responsible for searching articles
 * @author Aravinda Meewalaarachchi
 *
 */

export const Search: FC<{}> = (): JSX.Element => {
  const [categories, setCategories] = useState<Category>();
  const [query, setQuery] = useState<string>('');

  const client: ApolloClient<object> = useApolloClient();
  //read the data from apollo client
  const data = client.readQuery({
    query: GET_PRODUCTS,
    variables: defaultValues,
  });

  const handleChange = (event: ChangeEvent): void => {
    setQuery(event?.target?.value);
    const result = searchQuery();
    searchableArticlesVar([...result]);
  };

  const searchQuery = () => {
    const result =
      categories?.categoryArticles?.articles?.filter((article: Article) => {
        if (query === '') {
          //if query is empty
          return article;
        } else if (article?.name.toLowerCase().includes(query.toLowerCase())) {
          //returns filtered array
          return article;
        }
        return;
      }) || [];
    return result;
  };

  useEffect(() => {
    data && setCategories(data?.categories[0]);
  }, [data]);

  return (
    <>
      <input type={'text'} placeholder={'Search'} onChange={handleChange} aria-label='Search' />
    </>
  );
};

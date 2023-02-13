import { OperationVariables, QueryResult, useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../queries/getProducts';
import { ProductListQueryVariable } from '../../types';

type PostsQueryResponse = {
  posts: string[];
};

/* eslint-disable  @typescript-eslint/no-explicit-any */
type TData = any | undefined | null;

type TVariables = OperationVariables;

/**
 * Hook to fetch all the required data related to children categories, category articles,
 * and the article details
 *
 * @author Aravinda Meewalaarachchi
 * @param ProductListQueryVariable Type contains all the required arguments that need to execute GET_PRODUCTS query
 * @returns QueryResult object that contains the result of the executed query including attributes like data, error, and loading
 */

export const useProductListQuery = (
  variables: ProductListQueryVariable,
): QueryResult<TData, TVariables> => {
  return useQuery<PostsQueryResponse>(GET_PRODUCTS, { variables });
};

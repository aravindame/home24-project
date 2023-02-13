import { ApolloError } from '@apollo/client';
import { Categories } from './category.type';

export type ProductListQueryResult = {
  data: Categories | undefined;
  error?: ApolloError | undefined;
  loading: boolean;
};

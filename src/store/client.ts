import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import { searchableArticlesVar } from '../graphql/reactivities/searchableArticlesVar';

const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          searchableArticles: {
            read() {
              return searchableArticlesVar();
            },
          },
        },
      },
    },
  }),
});

export default client;

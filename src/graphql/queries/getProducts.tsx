import { gql } from '@apollo/client';

/**
 * Query to fetch all the required data related to children categories, category articles,
 * and the article details
 *
 * @author Aravinda Meewalaarachchi
 *
 */

export const GET_PRODUCTS = gql`
  query GET_PRODUCTS(
    $ids: [String!]!
    $locale: Locale!
    $first: Int!
    $format: ArticleImageFormat!
    $maxWidth: Int!
    $maxHeight: Int!
    $limit: Int!
  ) {
    categories: productLists(ids: $ids, locale: $locale) {
      name
      articleCount
      childrenCategories: childrenProductLists {
        list {
          name
          urlPath
        }
      }
      categoryArticles: articlesList(first: $first) {
        articles {
          name
          variantName
          prices {
            currency
            regular {
              value
            }
          }
          images(format: $format, maxWidth: $maxWidth, maxHeight: $maxHeight, limit: $limit) {
            path
          }
        }
      }
    }
    searchableArticles @client
  }
`;

import { GraphQLError } from 'graphql';
import { defaultValues } from '../graphql/productListDefaultVariableValues';
import { GET_PRODUCTS } from '../graphql/queries/getProducts';

export const mocks = {
  request: {
    query: GET_PRODUCTS,
    variables: defaultValues,
  },
  result: {
    data: {
      categories: [
        {
          articleCount: 1,
          categoryArticles: {
            __typename: 'ProductListArticles',
            articles: [
              {
                name: 'Federholzrahmen North Star',
                images: [
                  {
                    path: 'https://cdn1.home24.net/images/media/catalog/product/200x200/png/-/1/-1000352038-220616-010-IMAGE-P000000001000352038.webp',
                    __typename: 'ArticleGalleryImage',
                  },
                ],
                prices: {
                  __typename: 'ArticlePrices',
                  currency: 'EUR',
                  regular: { __typename: 'ArticleRegularPrice', value: 8699 },
                },
                variantName: '160 x 200cm',
                __typename: 'Article',
              },
            ],
          },
          childrenCategories: {
            __typename: 'ProductListCollection',
            list: [
              {
                name: 'Wohnzimmer',
                urlPath: 'wohnzimmer-moebel/',
                __typename: 'ProductList',
              },
            ],
          },
          name: 'Möbel',
          __typename: 'ProductList',
        },
      ],
    },
    errors: [new GraphQLError('Error!')],
  },
};

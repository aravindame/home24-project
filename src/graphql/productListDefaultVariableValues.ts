import { ProductListQueryVariable } from '../types';

/**
 * This object holds the hardcoded values extracted from the GraphQL query.
 * Since the current page does not provide inputs for the query,
 * these values were extracted as default values.
 *
 * @author Aravinda Meewalaarachchi
 *
 */

export const defaultValues: ProductListQueryVariable = {
  ids: ['156126'],
  locale: 'de_DE',
  first: 50,
  format: 'WEBP',
  maxWidth: 200,
  maxHeight: 200,
  limit: 1,
};

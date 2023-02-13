import { makeVar } from '@apollo/client';
import { Article } from '../../types';

/**
 * An Apollo Client reactive variable to store searchable articles
 *
 * @author Aravinda Meewalaarachchi
 *
 */

const initialValue: Article[] = [];

export const searchableArticlesVar = makeVar(initialValue);

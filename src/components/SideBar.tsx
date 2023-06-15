import { FC, useState } from 'react';
import { ChildCategoryItem } from '../types';
import { defaultValues } from '../graphql/productListDefaultVariableValues';
import { ApolloClient, useApolloClient } from '@apollo/client';
import { GET_PRODUCTS } from '../graphql/queries/getProducts';
import './../styles/sidebar.css';

/**
 * A Component that will responsible for rendering all the available categories
 *
 * @author Aravinda Meewalaarachchi
 *
 */

export const SideBar: FC<{}> = (): JSX.Element => {
  const client: ApolloClient<object> = useApolloClient();
  const [open, setOpen] = useState<boolean>(false);

  //read category list from apollo client cache
  const {
    categories: [categories],
  } = client.readQuery({
    query: GET_PRODUCTS,
    variables: defaultValues,
  });

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='56'
        height='56'
        fill='#FFFFFF'
        className='bi bi-list burger-icon'
        viewBox='0 0 16 16'
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <path
          fillRule='evenodd'
          d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
        />
      </svg>
      <aside className={`sidebar ${open ? 'show-btn' : 'hide-btn'}`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='32'
          height='32'
          fill={open ? '#000000' : '#f5f5f5'}
          className={'bi bi-x-lg show-btn'}
          viewBox='0 0 16 16'
          onClick={() => {
            setOpen((prev) => !prev);
          }}
        >
          <path d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z' />
        </svg>
        <h3>Kategorien</h3>
        <ul>
          {categories?.childrenCategories.list.map(({ name, urlPath }: ChildCategoryItem) => (
            <li key={name}>
              <a href={`/${urlPath}`}>{name}</a>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
};

import { Header } from '../components/Header';
import { SideBar } from '../components/SideBar';
import { ArticleContent } from '../components/ArticleContent';
import { Spinner } from '../components/Spinner';
import { useProductListQuery } from '../graphql/hooks/useProductListQuery';
import { defaultValues } from '../graphql/productListDefaultVariableValues';
import { ProductListQueryResult } from '../types';
import { ErrorPage } from './ErrorPage';
import { Footer } from '../components/Footer';
import './../styles/page.css';
import { FC } from 'react';

/**
 * A Component that will responsible for rendering product list page
 *
 * @author Aravinda Meewalaarachchi
 *
 */

export const ProductListPage: FC = (): JSX.Element => {
  const { error, loading }: ProductListQueryResult = useProductListQuery(defaultValues);

  return (
    <div className={'page'}>
      <Header />
      {loading ? (
        <Spinner />
      ) : error ? (
        <>
          <ErrorPage />
          <Footer />
        </>
      ) : (
        <>
          <SideBar />
          <ArticleContent />
          <Footer />
        </>
      )}
    </div>
  );
};

import { FC, ReactElement } from 'react';
import { ProductListPage } from './pages/ProductListPage';
import './index.css';

export const App: FC<{}> = (): ReactElement => {
  return <ProductListPage />;
};

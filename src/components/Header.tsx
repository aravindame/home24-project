import { FC } from 'react';
import { Search } from './Search';
import './../styles/header.css';

/**
 * A Component that will responsible for rendering the header of the page
 * @author Aravinda Meewalaarachchi
 *
 */

export const Header: FC<{}> = (): JSX.Element => {
  return (
    <>
      <header className={'header'}>
        <span className='logo'>Home24</span>
        <Search />
      </header>
    </>
  );
};

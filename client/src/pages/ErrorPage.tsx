import { FC } from 'react';
import './../styles/error.css';

/**
 * A Component that will responsible for rendering error page
 *
 * @author Aravinda Meewalaarachchi
 *
 */

export const ErrorPage: FC = (): JSX.Element => (
  <div className={'page'}>
    <img
      src='https://cdn.dribbble.com/users/1078347/screenshots/2799566/oops.png'
      className='error-msg'
      alt='something went wrong'
    />
  </div>
);

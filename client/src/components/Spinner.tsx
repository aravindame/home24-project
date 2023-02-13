import { FC } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import './../styles/loader.css';

/**
 * A Component that will responsible for rendering the spinner while loading the components
 * @author Aravinda Meewalaarachchi
 *
 */

export const Spinner: FC<{}> = (): JSX.Element => (
  <span className='loader' role={'progressbar'}>
    <RotatingLines
      strokeColor='#354044'
      strokeWidth='5'
      animationDuration='0.75'
      width='96'
      visible={true}
    />
  </span>
);

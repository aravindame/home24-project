import { FC } from 'react';
import './../styles/footer.css';

/**
 * A Component that will responsible for rendering the footer of the page
 * @author Aravinda Meewalaarachchi
 *
 */

export const Footer: FC<{}> = (): JSX.Element => (
  <>
    <footer className={'footer'}>
      Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.
    </footer>
  </>
);

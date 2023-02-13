import { render } from '@testing-library/react';
import { Footer } from '../../components/Footer';

const HEADER_TEXT =
  'Alle Preise sind in Euro (€) inkl. gesetzlicher Umsatzsteuer und Versandkosten.';

describe('Footer', () => {
  it('renders the footer component', () => {
    const { getByText } = render(<Footer />);
    const headerText = getByText(HEADER_TEXT);
    expect(headerText).toBeInTheDocument();
  });
});

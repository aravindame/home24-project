import { render } from '@testing-library/react';
import { Header } from '../../components/Header';
import { withMockedProvider } from '../../__mocks__/MockedProviderHOC';
import { mocks } from '../../__mocks__/mocks.data';

const WrappedHeaderComponent: any = withMockedProvider(Header);

describe('Header', () => {
  it('renders the header component', () => {
    const props = { providerProps: { mocks }, componentProps: {} };
    const { container } = render(<WrappedHeaderComponent props={props} />);
    const logo = container.querySelector('.logo');
    expect(logo).toBeInTheDocument();
  });
});

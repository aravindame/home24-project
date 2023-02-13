import { fireEvent, render, screen } from '@testing-library/react';
import { ProductListPage } from '../../pages/ProductListPage';
import { withMockedProvider } from '../../__mocks__/MockedProviderHOC';
import { mocks } from '../../__mocks__/mocks.data';
import { act } from 'react-dom/test-utils';

describe('ProductListPage', () => {
  const props = { providerProps: { mocks }, componentProps: {} };
  it('renders the ProductListPage component', async () => {
    const WrappedHeaderComponent: any = withMockedProvider(ProductListPage);
    const { getByPlaceholderText } = render(<WrappedHeaderComponent props={props} />);
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    act(async () => {
      fireEvent.change(input, { target: { value: 'Federholzrahmen' } });
      expect(await screen.findByText('Federholzrahmen North Star')).toBeInTheDocument();
    });
  });
});

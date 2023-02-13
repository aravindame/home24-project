import { fireEvent, render, screen, wait } from '@testing-library/react';
import { Search } from '../../components/Search';
import { ProductListPage } from '../../pages/ProductListPage';
import { withMockedProvider } from '../../__mocks__/MockedProviderHOC';
import { mocks } from '../../__mocks__/mocks.data';
import { act } from 'react-dom/test-utils';

const WrappedHeaderComponent: any = withMockedProvider(Search);

describe('Search', () => {
  const props = { providerProps: { mocks }, componentProps: {} };

  it('renders the search component', () => {
    const { getByPlaceholderText } = render(<WrappedHeaderComponent props={props} />);
    expect(getByPlaceholderText('Search')).toBeInTheDocument();
  });

  it('should update the query state on input change', async () => {
    const { getByPlaceholderText } = render(<WrappedHeaderComponent props={props} />);
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Federholzrahmen' } });
    await wait(() => {
      expect(input.value).toBe('Federholzrahmen');
    });
  });

  it('should filter the articles based on the query', async () => {
    const WrappedHeaderComponent: any = withMockedProvider(ProductListPage);
    const { getByPlaceholderText } = render(<WrappedHeaderComponent props={props} />);
    const input = getByPlaceholderText('Search') as HTMLInputElement;
    act(async () => {
      fireEvent.change(input, { target: { value: 'Federholzrahmen' } });
      expect(await screen.findByText('Federholzrahmen North Star')).toBeInTheDocument();
    });
  });
});

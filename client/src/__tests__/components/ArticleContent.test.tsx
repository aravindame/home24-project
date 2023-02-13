import { render } from '@testing-library/react';
import { ArticleContent } from '../../components/ArticleContent';
import { withMockedProvider } from '../../__mocks__/MockedProviderHOC';
import { mocks } from '../../__mocks__/mocks.data';

const WrappedHeaderComponent: any = withMockedProvider(ArticleContent);

describe('ArticleContent', () => {
  it('renders the ArticleContent component', () => {
    const props = { providerProps: { mocks }, componentProps: {} };
    const { container } = render(<WrappedHeaderComponent props={props} />);
    const content = container.querySelector('.content');
    expect(content).toBeInTheDocument();
  });
});

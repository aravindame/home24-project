import { render } from '@testing-library/react';
import { Spinner } from '../../components/Spinner';

describe('Spinner', () => {
  it('renders the spinner component', () => {
    const { container } = render(<Spinner />);
    const spinner = container.querySelector('.loader');
    expect(spinner).toBeInTheDocument();
  });
});

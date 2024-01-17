import { render } from '@testing-library/react';
import Home from '@app/page';

describe('Home component', () => {
  test('Home component renders correctly', () => {
    const { getByText } = render(<Home />);
    const buttonElement = getByText('카운터 0');
    buttonElement.toBeinTheDocument();
  });
});

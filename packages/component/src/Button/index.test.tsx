import { render, fireEvent } from '@testing-library/react';
import Button from './index';

describe('Button component', () => {
  test('Button component renders correctly', () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText('카운터 0');
    expect(buttonElement).toBeInTheDocument();
  });

  test('Button component increments count on click', () => {
    const { getByText } = render(<Button />);
    const buttonElement = getByText('카운터 0');
    fireEvent.click(buttonElement);
    expect(buttonElement).toHaveTextContent('카운터 1');
  });
});

import { forwardRef } from 'react';

const Button = forwardRef(
  ({
    onClick,
    children,
  }: {
    onClick?: () => void;
    children?: React.ReactNode;
  }) => {
    return <button onClick={onClick}>{children}</button>;
  },
);

export default Button;

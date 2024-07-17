import React from 'react';
import { StyledButton, StyledButtonProps } from './Button.styles';

type ButtonProps = {
  onClick: () => void;
  children: any;
} & StyledButtonProps;

const Button: React.FC<ButtonProps> = ({ onClick, children, ...props }) => {
  return (
    <>
      <StyledButton onClick={onClick} {...props}>
        {children}
      </StyledButton>
    </>
  );
};

export default Button;

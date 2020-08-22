import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <>
    {loading ? (
      <Container type="button" {...rest} disabled>
        Carregando...
      </Container>
    ) : (
      <Container type="button" {...rest}>
        {children}
      </Container>
    )}
  </>
);

export default Button;

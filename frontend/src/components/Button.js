import styled from 'styled-components';
import { darken } from 'polished';

const buttonColors = {
  background: {
    primary: '#45b77d',
    secondary: '#e5e5e5'
  },
  text: {
    primary: '#ffffff',
    secondary: '#898e90'
  }
}

const Wrapper = styled.button`
  border: none;
  padding: 10px 32px;
  border-radius: 4px;
  cursor: pointer;
  background-color: ${props => buttonColors.background[props.color]};
  color: ${props => buttonColors.text[props.color]};
  transition: background-color .3s;

  &:hover {
    background-color: ${props => darken(0.1, buttonColors.background[props.color])};
  }
`;

export function Button({color = 'primary', type = 'button', children}) {
  return <Wrapper color={color} type={type}>{children}</Wrapper>
}
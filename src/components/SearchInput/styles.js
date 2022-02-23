import styled from 'styled-components';
import Colors from '../../theme/colors';

export const Input = styled.input`
  height: 50px;
  width: 100%;
  font-size: 48px;
  font-weight: bold;
  color: ${Colors.tertiary};
  background: ${Colors.background};
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid ${Colors.primary};
  margin-top: 15px;

  &:focus {
    outline: none;
  }
`;

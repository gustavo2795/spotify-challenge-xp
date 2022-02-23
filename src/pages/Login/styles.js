import styled from 'styled-components';
import Colors from '../../theme/colors';

export const Container = styled.div`
  padding: 70px 120px 70px 120px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  background: ${Colors.green};
  color: ${Colors.tertiary};
  width: 150px;
  border-radius: 25px;
  border: none;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  padding: 10px;
  margin-top: 70px;
  cursor: pointer;
`
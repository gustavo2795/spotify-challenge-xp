import styled from 'styled-components';
import Colors from '../../theme/colors';

export const Container = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: decimal;
  color: ${Colors.primary};
`;

export const Item = styled.div`
  display: flex;

  justify-content: space-between;
  margin: 10px;
`;
import styled from 'styled-components';
import Colors from '../../theme/colors';

export const Container = styled.div`
  width: 100%;
  margin-top: 50px;
`;

export const Grid = styled.div`
  display: grid;
  margin-top: 20px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 250px 250px;
  grid-gap: 20px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: .5rem;
`;
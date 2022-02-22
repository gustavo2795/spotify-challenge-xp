import styled from 'styled-components';
import Colors from '../../theme/colors';

export const Container = styled.div`
  width: 100%;
`;

export const List = styled.ul`
  list-style-type: decimal;
  color: ${Colors.primary};
  font-family: 'Roboto';
`;

export const Item = styled.div`
  display: flex;
  
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const PlayButton = styled.button`
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  border-style: solid;
  border-width: 5px 0px 5px 5px;
  border-color: transparent transparent transparent ${props => props.color};
  margin-right: 20px;
  background: transparent;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
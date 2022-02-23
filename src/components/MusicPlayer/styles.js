import styled from 'styled-components';

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

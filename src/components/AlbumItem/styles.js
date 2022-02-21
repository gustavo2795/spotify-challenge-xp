import styled from 'styled-components';
import Colors from '../../theme/colors';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
    opacity: 0.5;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: .5rem;
`;

export const ImageContainer = styled.div`
  height: 160px;
  width: 160px;
  background: ${Colors.primary};
`;
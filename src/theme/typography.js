import styled from 'styled-components';

//Props received: fontWeight, fontSize, textAlign, fontColor
export const Text = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.textAlign};
  color: ${props => props.fontColor};
  font-family: 'Roboto';
`;

export default (props) => <Text {...props} />;
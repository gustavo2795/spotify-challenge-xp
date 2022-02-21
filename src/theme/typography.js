import styled from 'styled-components';

//Props received: fontWeight, fontSize, textAlign, fontColor
export const Text = styled.span`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  text-align: ${props => props.textAlign};
  color: ${props => props.fontColor};
  margin-top: ${props => props.marginTop};
  margin-right: ${props => props.marginRight};
  margin-bottom: ${props => props.marginBottom};
  margin-left: ${props => props.marginLeft};
  font-family: 'Roboto';
`;

export default (props) => <Text {...props} />;
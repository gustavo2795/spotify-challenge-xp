import styled from 'styled-components';

export const ImageContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 30px;
  height: 40px;
  width: 40px;
  background-color: #FFF;
  border-radius: 20px;
`;

export const Container = styled.div`
  padding: 70px 120px 70px 120px;
`;

export const BackButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30px;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
    color: white;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 20px;
`

export const AlbumContainer = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  background: #FFF;
  justify-content: flex-start;
  align-items: center;
`;

export const AlbumImage = styled.div`
  width: 250px;
  height: 250px;
  background: #999999;
`;

export const AlbumDescription = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TracksContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  background: #999;
`;
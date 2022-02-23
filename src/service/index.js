import axios from 'axios';

export const autenticate = async () => {
  const response = await axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa('ba0a2269d599450fa32e5c88bbdb44e8' + ':' + '0e5715c6c6654f9d99271f8ca018d7e8')      
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
  })
  .then(tokenResponse => {      
    return tokenResponse.data.access_token;
  });
  return response
};

export const searchForAlbum = async ({ searchString, token }) => {
  const response = await axios(`https://api.spotify.com/v1/search`, {
    params: {
      q: searchString,
      limit: 10,
      type: 'track,album,artist',
      market: 'PT',
    },
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Bearer ' + token,
    },
    data: 'grant_type=client_credentials',
    method: 'GET'
  })
  .then(response => {
    return response.data;
  });
  return response;
};

export const getAlbumInfo = async ({ url, token }) => {
  const response = await axios(url, {
    params: {
      market: 'PT',
    },
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Bearer ' + token,
    },
    data: 'grant_type=client_credentials',
    method: 'GET'
  })
  .then(response => {
    return response.data;
  });
  return response;
}
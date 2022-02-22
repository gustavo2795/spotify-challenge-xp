import {
  takeLatest,
  put,
  call,
  select
} from 'redux-saga/effects';
import Types from './types';
import axios from 'axios';
import { getLastSearchs, getLocalToken } from './selectors';

async function getToken() {
  let token = '';
  token = axios('https://accounts.spotify.com/api/token', {
    headers: {
      'Content-Type' : 'application/x-www-form-urlencoded',
      'Authorization' : 'Basic ' + btoa('ba0a2269d599450fa32e5c88bbdb44e8' + ':' + '0e5715c6c6654f9d99271f8ca018d7e8')      
    },
    data: 'grant_type=client_credentials',
    method: 'POST'
  })
  .then(tokenResponse => {      
    token = tokenResponse.data.access_token;
    return token;
  });
  return token;
};

function* handleAutenticate() {
  try {
    const data = yield call(getToken);
    console.log(data);
    yield put({
      type: Types.AUTENTICATION_CONCLUDED,
      payload: {
        token: data
      }
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: Types.AUTENTICATION_ERROR,
      payload: err?.response?.error || true,
    });
  };
};

async function searchApi({searchString, token}) {
  let data = null;
  data = axios(`https://api.spotify.com/v1/search`, {
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
  return data;
};

function* handleSearch({ payload }) {
  try {
    const data = yield call(searchApi, payload);

    //memory for albums and strings
    let { lastStrings, lastAlbums } = yield select(getLastSearchs);
    lastAlbums.unshift(data.albums.items);
    lastStrings.unshift(payload.searchString);

    yield put({
      type: Types.SEARCH_API_CONCLUDED,
      payload: {
        albums: data.albums,
        tracks: data.tracks,
        artists: data.artists,
        lastSearchs: {lastAlbums, lastStrings}
      }
    })
  } catch (err) {
    yield put({
      type: Types.SEARCH_API_ERROR,
      payload: err?.response?.error || true,
    });
  }
};

async function getAlbumInfo(url, token) {
  let data = null;
  data = axios(url, {
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
  return data;
};

function* handleAlbumInfo({ payload }) {
  const token = yield select(getLocalToken);
  try {
    const data = yield call(getAlbumInfo, payload, token);
    yield put({
      type: Types.GET_ALBUM_INFO_CONCLUDED,
      payload: {
        selectedAlbumInfo: data,
      }
    })
  } catch (err) {
    yield put({
      type: Types.GET_ALBUM_INFO_ERROR,
      payload: err?.response?.error || true,
    });
  }
}


export function* spotifySagas() {
  yield takeLatest(Types.AUTENTICATION, handleAutenticate);
  yield takeLatest(Types.SEARCH_API, handleSearch);
  yield takeLatest(Types.GET_ALBUM_INFO, handleAlbumInfo);
}
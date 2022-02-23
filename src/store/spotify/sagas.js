import {
  takeLatest,
  put,
  call,
  select
} from 'redux-saga/effects';
import Types from './types';
import { getLastSearchs } from './selectors';
import { autenticate, searchForAlbum, getAlbumInfo } from '../../service';

function* handleAutenticate() {
  try {
    const data = yield call(autenticate);
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

function* handleSearch({ payload }) {
  try {
    const data = yield call(searchForAlbum, payload);

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
    });
  } catch (err) {
    yield put({
      type: Types.SEARCH_API_ERROR,
      payload: err?.response?.error || true,
    });
  };
};

function* handleAlbumInfo({ payload }) {
  try {
    const data = yield call(getAlbumInfo, payload);
    yield put({
      type: Types.GET_ALBUM_INFO_CONCLUDED,
      payload: {
        selectedAlbumInfo: data,
      }
    });
  } catch (err) {
    yield put({
      type: Types.GET_ALBUM_INFO_ERROR,
      payload: err?.response?.error || true,
    });
  };
};

export function* spotifySagas() {
  yield takeLatest(Types.AUTENTICATION, handleAutenticate);
  yield takeLatest(Types.SEARCH_API, handleSearch);
  yield takeLatest(Types.GET_ALBUM_INFO, handleAlbumInfo);
};
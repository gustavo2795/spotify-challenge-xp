/* eslint-disable import/no-anonymous-default-export */
import { all, fork } from 'redux-saga/effects';
import { spotifySagas } from './spotify/sagas';

export default function* () {
  yield all([
    fork(spotifySagas),
  ]);
}

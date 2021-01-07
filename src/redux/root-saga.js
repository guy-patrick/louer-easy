import { all, call } from 'redux-saga/effects';
import { resultsSagas } from './results/results.sagas';

export function* rootSaga() {
    yield all([
        call(resultsSagas)
    ])
} 
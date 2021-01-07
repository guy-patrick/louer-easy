import { takeLatest, call, put, all } from 'redux-saga/effects';
import { db, convertRentalsSnaphotToMap } from '../../firebase/firebase.utils';
import { fetchRentalsSuccess, fetchRentalsFailure } from './results.actions';
import { resultsTypes } from './results.types';

const { FETCH_RENTALS_START } = resultsTypes;

function* fetchRentalsAsync() {
    try {
        const rentalsRef = db.collection('rentals');
        const querySnapshot = yield rentalsRef.get();
        const rentalsMap = yield call(convertRentalsSnaphotToMap, querySnapshot);
        yield put(
            fetchRentalsSuccess(rentalsMap)
        );
    } catch (error) {
        yield put(
            fetchRentalsFailure(error)
        );
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        FETCH_RENTALS_START,
        fetchRentalsAsync
    );
}

export function* resultsSagas() {
    yield all([
        call(fetchCollectionsStart)
    ])
}
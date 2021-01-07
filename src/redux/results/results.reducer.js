import { resultsTypes } from './results.types';
const {
    FETCH_RENTALS_START,
    FETCH_RENTALS_SUCCESS,
    FETCH_RENTALS_FAILURE } = resultsTypes;

const initial = {
    isFetching: false,
    rentals: null,
    errorMessage: undefined
};

export const resultsReducer = (state = initial, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_RENTALS_START:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_RENTALS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                rentals: payload
            }
        case FETCH_RENTALS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: payload
            }
        default:
            return state
    }
}
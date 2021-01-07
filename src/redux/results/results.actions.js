import { resultsTypes } from './results.types';
const {
    FETCH_RENTALS_START,
    FETCH_RENTALS_SUCCESS,
    FETCH_RENTALS_FAILURE } = resultsTypes;

export const fetchRentalsStart = () => ({
    type: FETCH_RENTALS_START
})

export const fetchRentalsSuccess = rentals => ({
    type: FETCH_RENTALS_SUCCESS,
    payload: rentals
})

export const fetchRentalsFailure = error => ({
    type: FETCH_RENTALS_FAILURE,
    payload: error
})
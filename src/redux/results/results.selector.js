import { createSelector } from 'reselect';

const selectResults = state => state.results;

export const selectRentalsItems = createSelector(
    [selectResults],
    results => results.rentals
)

export const selectRentalsForPreview = createSelector(
    [selectRentalsItems],
    rentals => rentals ? Object.keys(rentals)
        .map(key => rentals[key]) : []
)

export const selectRental = rentalUrlParam => createSelector(
    [selectRentalsItems],
    rentals => rentals ? rentals[rentalUrlParam] : null
)

export const selectIsRentalsFetching = createSelector(
    [selectResults],
    results => results.isFetching
)

export const selectRentalsLoaded = createSelector(
    [selectResults],
    results => !!results.rentals
)
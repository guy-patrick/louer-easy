import { createSelector } from 'reselect';

export const selectSearch = state => state.search;

export const selectSearchSellType = createSelector(
    [selectSearch],
    search => search.sellType
);

export const selectSearchPlace = createSelector(
    [selectSearch],
    search => search.place
);

export const selectSearchFixedAmount = createSelector(
    [selectSearch],
    search => search.fixedAmount
);

export const selectMinSearchAmount = createSelector(
    [selectSearch],
    search => search.minAmount
);

export const selectMaxSearchAmount = createSelector(
    [selectSearch],
    search => search.maxAmount
);

export const selectSearchTypes = createSelector(
    [selectSearch],
    search => search.searchTypes
); 
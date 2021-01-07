import { searchTypes } from './search.types';
const {
    TOGGLE_SELL_TYPE,
    SET_SEARCH_PLACE,
    SET_FIXED_SEARCH_AMOUNT,
    SET_MIN_SEARCH_AMOUNT,
    SET_MAX_SEARCH_AMOUNT,
    UPDATE_SEARCH_TYPE,
    SET_BEDROOMS,
    SET_BATHROOMS
} = searchTypes;

export const toggleSellType = sellType => ({
    type: TOGGLE_SELL_TYPE,
    payload: sellType
})

export const setSearchPlace = place => ({
    type: SET_SEARCH_PLACE,
    payload: place
})

export const setSearchAmount = amount => ({
    type: SET_FIXED_SEARCH_AMOUNT,
    payload: amount
})

export const setMinSearchAmount = amount => ({
    type: SET_MIN_SEARCH_AMOUNT,
    payload: amount
})

export const setMaxSearchAmount = amount => ({
    type: SET_MAX_SEARCH_AMOUNT,
    payload: amount
})

export const updateSearchTypes = types => ({
    type: UPDATE_SEARCH_TYPE,
    payload: types
})

export const setBedrooms = value => ({
    type: SET_BEDROOMS,
    payload: value
})

export const setBathrooms = value => ({
    type: SET_BATHROOMS,
    payload: value
})
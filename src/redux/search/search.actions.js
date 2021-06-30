import { searchTypes } from "./search.types";
const {
  SET_SEARCH_NAME,
  SET_SEARCH_PLACE,
  SET_FIXED_SEARCH_AMOUNT,
  SET_MIN_SEARCH_AMOUNT,
  SET_MAX_SEARCH_AMOUNT,
  SET_SEARCH_RENTAL_TYPES,
  SET_BEDROOMS,
  SET_BATHROOMS,
} = searchTypes;

export const setSearchName = (searchName) => ({
  type: SET_SEARCH_NAME,
  payload: searchName,
});

export const setSearchPlace = (place) => ({
  type: SET_SEARCH_PLACE,
  payload: place,
});

export const setSearchAmount = (amount) => ({
  type: SET_FIXED_SEARCH_AMOUNT,
  payload: amount,
});

export const setMinSearchAmount = (amount) => ({
  type: SET_MIN_SEARCH_AMOUNT,
  payload: amount,
});

export const setMaxSearchAmount = (amount) => ({
  type: SET_MAX_SEARCH_AMOUNT,
  payload: amount,
});

export const setSearchRentalTypes = (rentalsTypes) => ({
  type: SET_SEARCH_RENTAL_TYPES,
  payload: rentalsTypes,
});

export const setBedrooms = (value) => ({
  type: SET_BEDROOMS,
  payload: value,
});

export const setBathrooms = (value) => ({
  type: SET_BATHROOMS,
  payload: value,
});

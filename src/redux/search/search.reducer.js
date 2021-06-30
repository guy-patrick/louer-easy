import { searchTypes } from "./search.types";
import { setMinAmount, setMaxAmount } from "./search.utils";
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

const initial = {
  searchName: "rent",
  place: "",
  fixedAmount: 0,
  minAmount: 0,
  maxAmount: 0,
  searchRentalTypes: {
    studio: false,
    apartment: false,
    house: false,
    duplex: false,
    villa: false,
    ground: false,
  },
  bedrooms: 1,
  bathrooms: 1,
};

export const searchReducer = (state = initial, action) => {
  const { type, payload } = action;
  const { searchName, searchRentalTypes } = state;

  switch (type) {
    case SET_SEARCH_NAME:
      return {
        ...state,
        searchName: searchName === payload ? searchName : payload,
      };

    case SET_SEARCH_PLACE:
      return {
        ...state,
        place: payload,
      };

    case SET_FIXED_SEARCH_AMOUNT:
      return {
        ...state,
        fixedAmount: payload,
        minAmount: 0,
        maxAmount: 0,
      };

    case SET_MIN_SEARCH_AMOUNT:
      return setMinAmount(state, payload);

    case SET_MAX_SEARCH_AMOUNT:
      return setMaxAmount(state, payload);

    case SET_SEARCH_RENTAL_TYPES:
      return {
        ...state,
        searchRentalTypes:
          searchName === "rent"
            ? { ...searchRentalTypes, ...payload }
            : {
                ...searchRentalTypes,
                ...payload,
                studio: false,
                apartment: false,
              },
      };

    case SET_BEDROOMS:
      return {
        ...state,
        bedrooms: payload,
      };

    case SET_BATHROOMS:
      return {
        ...state,
        bathrooms: payload,
      };

    default:
      return state;
  }
};

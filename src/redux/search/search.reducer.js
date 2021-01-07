import { searchTypes } from './search.types';
import { setType, setMinAmount, setMaxAmount, updateSearchTypes } from './search.utils'
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

const initial = {
    sellType: 'rent',
    place: '',
    fixedAmount: 0,
    minAmount: 0,
    maxAmount: 0,
    searchTypes: {
        studio: false,
        apartment: false,
        house: false,
        duplex: false,
        villa: false,
        ground: false
    },
    bedrooms: 1,
    bathrooms: 1
}

export const searchReducer = (state = initial, action) => {

    const { type, payload } = action;

    switch (type) {
        case TOGGLE_SELL_TYPE:
            return setType(state, payload)

        case SET_SEARCH_PLACE:
            return {
                ...state,
                place: payload
            }

        case SET_FIXED_SEARCH_AMOUNT:
            return {
                ...state,
                fixedAmount: payload,
                minAmount: 0,
                maxAmount: 0
            }

        case SET_MIN_SEARCH_AMOUNT:
            return setMinAmount(state, payload)

        case SET_MAX_SEARCH_AMOUNT:
            return setMaxAmount(state, payload)

        case UPDATE_SEARCH_TYPE:
            return {
                ...state,
                searchTypes: updateSearchTypes(state, payload)
            }

        case SET_BEDROOMS:
            return {
                ...state,
                bedrooms: payload
            }

        case SET_BATHROOMS:
            return {
                ...state,
                bathrooms: payload
            }

        default:
            return state;
    }
}
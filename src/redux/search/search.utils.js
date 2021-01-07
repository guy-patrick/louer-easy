export const setType = (state, type) => {
    const { sellType } = state;
    return sellType === type ? state : { ...state, sellType: type }
}

export const setMinAmount = (state, minAmount) => {
    const { maxAmount } = state;
    if (minAmount < maxAmount) {
        return {
            ...state,
            fixedAmount: 0,
            minAmount
        }
    } else if (maxAmount < minAmount) {
        return {
            ...state,
            fixedAmount: 0,
            minAmount: maxAmount,
            maxAmount: minAmount
        }
    } else {
        return {
            ...state,
            fixedAmount: maxAmount,
            minAmount: 0,
            maxAmount: 0
        }
    }
}

export const setMaxAmount = (state, maxAmount) => {
    const { minAmount } = state;
    if (minAmount < maxAmount) {
        return {
            ...state,
            fixedAmount: 0,
            maxAmount
        }
    } else if (maxAmount < minAmount) {
        return {
            ...state,
            fixedAmount: 0,
            minAmount: maxAmount,
            maxAmount: minAmount
        }
    } else {
        return {
            ...state,
            fixedAmount: maxAmount,
            minAmount: 0,
            maxAmount: 0
        }
    }
}

export const updateSearchTypes = (state, userChoices) => {
    const { sellType, searchTypes } = state;

    return sellType === 'rent' ? {
        ...searchTypes,
        ...userChoices
    } : {
            ...searchTypes,
            ...userChoices,
            studio: false,
            apartment: false
        }
}
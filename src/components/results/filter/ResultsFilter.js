import { useState } from "react"
import { FilterBtn } from "./FilterBtn"
import FilterInput from "./FilterInput"
import { FilterTab } from './FilterTab'
import { ValidateChoiceBar } from "./ValidateChoiceBar"
import { BedsBaths } from './BedsBaths'
import SearchChoices from '../../search/SearchChoices'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSearchSellType, selectMinSearchAmount, selectMaxSearchAmount } from '../../../redux/search/search.selectors'
import { toggleSellType, setMinSearchAmount, setMaxSearchAmount } from '../../../redux/search/search.actions'
import SearchInput from "../../search/SearchInput"
import FilterPlaceTab from "./FilterPlaceTab"

const initial = {
    sale: true,
    price: true,
    bedsbaths: true,
    more: true
}

const ResultsFilter = ({ sellType, toggleSellType, minSearchAmount, maxSearchAmount, setMinSearchAmount, setMaxSearchAmount }) => {

    const [filterState, setFilterState] = useState(initial)
    const toggleFilterState = state => {
        filterState[state] ? setFilterState({
            ...initial, [state]: false
        }) : setFilterState({
            ...initial, [state]: true
        })
    }

    const [activeBedItems, setActiveBedItems] = useState('any')
    const updateActiveBedItems = value => {
        setActiveBedItems(value)
    }

    const [activeBathItems, setActiveBathItems] = useState('any')
    const updateActiveBathItems = value => {
        setActiveBathItems(value)
    }

    const disableFilterState = () => {
        setFilterState(initial)
    }

    const { sale, price, bedsbaths, more } = filterState;

    const [minAmount, setMinAmount] = useState(minSearchAmount)
    const [maxAmount, setMaxAmount] = useState(maxSearchAmount)

    const handleMinMaxDone = () => {
        if (minAmount < maxAmount) {
            setMinSearchAmount(minAmount)
            setMaxSearchAmount(maxAmount)
        } else {
            setMinSearchAmount(maxAmount)
            setMaxSearchAmount(minAmount)
        }
    }

    return (
        <div className='filter-bloc'>
            <div className='filter-tabs'>
                <div className='filter-tabs-container'>
                    <FilterPlaceTab
                        placeholder='Update place'
                    />
                    <FilterTab
                        title={sellType === 'rent' ? 'Louer' : 'Acheter'}
                        filterType='listing'
                        state='sale'
                        toggleFilterState={toggleFilterState}
                    />
                    <FilterTab
                        title="Budget"
                        state='price'
                        toggleFilterState={toggleFilterState}
                        medium
                    />
                    <FilterTab
                        title="Chs & Dch"
                        state='bedsbaths'
                        toggleFilterState={toggleFilterState}
                        large
                    />
                    <FilterTab
                        title="Autres"
                        state='more'
                        toggleFilterState={toggleFilterState}
                        medium
                    />
                    <button className='filter-save-btn'>
                        Enregistrer
                    </button>
                </div>
            </div>
            <div className='tabs-content'>
                <div className={`tabs-content-wrapper ${sale ? 'hidden' : ''}`}>
                    <div
                        className={`tabs-content-wrapper-radio ${sellType === 'rent' ? 'rent' : ''}`}
                        onClick={() => toggleSellType('rent')}
                    >
                        <span>Louer</span>
                    </div>
                    <div className={`tabs-content-wrapper-radio ${sellType === 'buy' ? 'buy' : ''}`}
                        onClick={() => toggleSellType('buy')}
                    >
                        <span>Acheter</span>
                    </div>
                    <ValidateChoiceBar
                        disableFilter={disableFilterState}
                    />
                </div>
                <div className={`${price ? 'hidden' : ''} tabs-content-wrapper`}>
                    <div className='tabs-content-wrapper-inside'>
                        <h2 className='filter-title'>Budget</h2>
                        <form>
                            <FilterInput
                                type='tel'
                                placeholder='min'
                                target='min'
                                minAmount={minAmount}
                                updateMinAmount={setMinAmount}
                            />
                            <span>-</span>
                            <FilterInput
                                type='tel'
                                placeholder='max'
                                target='max'
                                maxAmount={maxAmount}
                                updateMaxAmount={setMaxAmount}
                            />
                        </form>
                    </div>
                    <ValidateChoiceBar
                        disableFilter={disableFilterState}
                        handleMinMaxDone={handleMinMaxDone}
                    />
                </div>
                <div className={`tabs-content-wrapper ${bedsbaths ? 'hidden' : ''}`}>
                    <div className='tabs-content-wrapper-inside'>
                        <BedsBaths
                            activeBedItems={activeBedItems}
                            activeBathItems={activeBathItems}
                            updateActiveBedItems={updateActiveBedItems}
                            updateActiveBathItems={updateActiveBathItems}
                        />
                    </div>
                    <ValidateChoiceBar
                        disableFilter={disableFilterState}
                    />
                </div>
                <div className={`tabs-content-wrapper ${more ? 'hidden' : ''}`}>
                    <div className='tabs-content-wrapper-inside'>
                        <div className='tabs-content-top-line'>
                            <FilterBtn
                                title='Reset'
                                color='rgb(0, 106, 255)'
                                bdColor='rgb(0, 106, 255)'
                                bgColor='#fff'
                                bhColor='rgb(242, 250, 255)'
                                disableFilter={disableFilterState}
                            />
                            <span>88 résultats</span>
                            <FilterBtn
                                title='Done'
                                color='#fff'
                                bgColor='rgb(0, 106, 255)'
                                bhColor='rgb(13, 69, 153)'
                                disableFilter={disableFilterState}
                            />
                        </div>
                        <div className='small'>
                            <BedsBaths
                                activeBedItems={activeBedItems}
                                activeBathItems={activeBathItems}
                                updateActiveBedItems={updateActiveBedItems}
                                updateActiveBathItems={updateActiveBathItems}
                            />
                        </div>

                        <h2 className='filter-title'>TYPE BIEN</h2>
                        <div>
                            <SearchChoices />
                        </div>

                        <h2 className='filter-title'>AUTRES PROPRIETES</h2>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sellType: selectSearchSellType,
    minSearchAmount: selectMinSearchAmount,
    maxSearchAmount: selectMaxSearchAmount
})

const mapDispatchToProps = dispatch => ({
    toggleSellType: type => dispatch(toggleSellType(type)),
    setMinSearchAmount: amount => dispatch(setMinSearchAmount(amount)),
    setMaxSearchAmount: amount => dispatch(setMaxSearchAmount(amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(ResultsFilter);
import { useEffect, useState } from 'react'
import { useHide } from '../../hooks/useHide'
import { SearchItem } from './SearchItem'
import { ToggleSearchDisplay } from './ToggleSearchDisplay'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectSearchSellType, selectSearchTypes } from '../../redux/search/search.selectors'
import { updateSearchTypes } from '../../redux/search/search.actions'

const SearchChoices = ({ sellType, searchTypes, updateSearchTypes }) => {

    const [state, setState] = useHide();

    const { studio, apartment, house, duplex, villa, ground } = searchTypes;

    const rentals = sellType === 'rent' ?
        { studio, apartment, house, duplex, villa, ground } :
        { house, duplex, villa, ground };

    const [toRent, setToRent] = useState({
        studio: rentals.studio,
        apartment: rentals.apartment,
        house: rentals.house,
        duplex: rentals.duplex,
        villa: rentals.villa,
        ground: rentals.ground
    })

    const [toSell, setToSell] = useState({
        house: rentals.house,
        duplex: rentals.duplex,
        villa: rentals.villa,
        ground: rentals.ground
    })

    useEffect(() => {
        sellType === 'rent' ?
            updateSearchTypes(toRent) :
            updateSearchTypes(toSell)
    }, [sellType, toSell, toRent, updateSearchTypes])

    const handleChoice = choice => {
        if (sellType === 'rent') {
            toRent[choice] ?
                setToRent({ ...toRent, [choice]: false }) :
                setToRent({ ...toRent, [choice]: true })
        }
        if (sellType === 'buy') {
            toSell[choice] ?
                setToSell({ ...toSell, [choice]: false }) :
                setToSell({ ...toSell, [choice]: true })
        }
    }

    const showChoices = () => {
        let items = [];
        let collection = {};
        if (sellType === 'rent') {
            items = Object.keys(toRent);
            collection = toRent;
        } else {
            items = Object.keys(toSell);
            collection = toSell;
        }

        const filteredItems = !state ? items.slice(0, 2) : items;

        return filteredItems.map(item => (
            <SearchItem
                key={item}
                item={item}
                handleChoice={handleChoice}
                collection={collection}
            />
        ))
    }

    return (
        <div className='search-items-list'>
            {
                showChoices(sellType)
            }
            <ToggleSearchDisplay
                handleDisplayAll={setState}
            />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sellType: selectSearchSellType,
    searchTypes: selectSearchTypes
})

const mapDispatchToProps = dispatch => ({
    updateSearchTypes: types => dispatch(updateSearchTypes(types))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchChoices)
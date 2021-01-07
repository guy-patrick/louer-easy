import { useState, Fragment } from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { setSearchPlace, setSearchAmount } from '../../redux/search/search.actions'
import { selectSearchPlace, selectSearchFixedAmount } from '../../redux/search/search.selectors'

const SearchInput = ({ placeholder, suggestions, setSearchPlace, setSearchAmount, place, fixedAmount }) => {

    const [state, setState] = useState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        placeInput: place,
        amountInput: fixedAmount
    })

    const { activeSuggestion, filteredSuggestions, showSuggestions, placeInput, amountInput } = state;

    const handleChange = e => {
        const placeInput = e.currentTarget.value;

        const filteredSuggestions = suggestions.filter(
            suggestion =>
                suggestion.toLowerCase().indexOf(placeInput.toLowerCase()) > -1
        );

        setState({
            ...state,
            filteredSuggestions,
            showSuggestions: true,
            placeInput: e.currentTarget.value
        });
    };

    const handleAmoutChange = e => {
        const re = /^[0-9\b]+$/;
        const amount = e.currentTarget.value;

        if (amount === '' || re.test(amount)) {
            setState({
                ...state,
                amountInput: amount
            })
            setSearchAmount(amount)
        }
    }

    const handleClick = e => {
        const currentPlace = e.currentTarget.innerText;
        setState({
            activeSuggestion: 0,
            filteredSuggestions: [],
            showSuggestions: false,
            placeInput: currentPlace
        });
        setSearchPlace(currentPlace);
    };

    const onKeyDown = e => {
        const { activeSuggestion, filteredSuggestions } = state;

        if (e.keyCode === 13) {
            setState({
                activeSuggestion: 0,
                showSuggestions: false,
                placeInput: filteredSuggestions[activeSuggestion]
            });
        } else if (e.keyCode === 38) {
            if (activeSuggestion === 0) {
                return;
            }
            setState({ activeSuggestion: activeSuggestion - 1 });
        }
        // User pressed the down arrow, increment the index
        else if (e.keyCode === 40) {
            if (activeSuggestion - 1 === filteredSuggestions.length) {
                return;
            }
            setState({ activeSuggestion: activeSuggestion + 1 });
        }
    };

    let suggestionsListComponent;

    if (showSuggestions && placeInput) {
        if (filteredSuggestions.length) {
            suggestionsListComponent = (
                <ul className="suggestions">
                    {filteredSuggestions.map((suggestion, index) => {
                        let className;

                        // Flag the active suggestion with a class
                        if (index === activeSuggestion) {
                            className = "suggestion-active";
                        }
                        return (
                            <li className={className} key={suggestion} onClick={handleClick}>
                                {suggestion}
                            </li>
                        );
                    })}
                </ul>
            );
        } else {
            suggestionsListComponent = (
                <div className="no-suggestions">
                    <em>No suggestions available.</em>
                </div>
            );
        }
    }


    return (
        !suggestions ? (
            <input
                type="tel"
                className='search-input input-budget'
                value={amountInput}
                placeholder={placeholder}
                onChange={handleAmoutChange}
            />
        ) :
            <Fragment>
                <input
                    type="text"
                    className='search-input input-location'
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                    value={placeInput}
                    placeholder={placeholder}
                />
                {suggestionsListComponent}
            </Fragment>
    )
}

const mapStateToProps = createStructuredSelector({
    place: selectSearchPlace,
    fixedAmount: selectSearchFixedAmount
})

const mapDispatchToProps = dispatch => ({
    setSearchPlace: place => dispatch(setSearchPlace(place)),
    setSearchAmount: amount => dispatch(setSearchAmount(amount))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
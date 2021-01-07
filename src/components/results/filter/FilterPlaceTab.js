import { useState } from "react";
import { places } from '../../../tools/utils'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { setSearchPlace } from '../../../redux/search/search.actions'
import { selectSearchPlace } from '../../../redux/search/search.selectors'

const FilterPlaceTab = ({ placeholder, place, setSearchPlace }) => {

    const [state, setState] = useState({
        activeSuggestion: 0,
        filteredSuggestions: [],
        showSuggestions: false,
        placeInput: place
    })

    const { activeSuggestion, filteredSuggestions, showSuggestions, placeInput } = state;

    const handleChange = e => {
        const placeInput = e.currentTarget.value;

        const filteredSuggestions = places.filter(
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
        <div className='filter-tab'>
            <input
                type="text"
                className='search-input input-location filter-place-input'
                onChange={handleChange}
                onKeyDown={onKeyDown}
                value={placeInput}
                placeholder={placeholder}
            />
            {suggestionsListComponent}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    place: selectSearchPlace
})

const mapDispatchToProps = dispatch => ({
    setSearchPlace: place => dispatch(setSearchPlace(place))
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterPlaceTab)
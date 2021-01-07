import { useState, useEffect } from 'react'
import Rental from './Rental'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { selectRentalsForPreview } from '../../../redux/results/results.selector'
import { selectSearch } from '../../../redux/search/search.selectors'
import { createStructuredSelector } from 'reselect'

const ResultsItems = ({ search, rentals }) => {

    const [filteredResults, setFilteredResults] = useState([])

    const {
        sellType,
        place,
        fixedAmount,
        minAmount,
        maxAmount,
        searchTypes,
        bedrooms,
        bathrooms } = search;


    const filterResults = () => {
        return rentals.filter(rental => {
            var innerRental = rental;

            if (rental.sellType === sellType) {
                /* place */
                if (place.length !== 0) {
                    innerRental = !(place === rental.place) ? null : rental
                }
                /* Fixed Amount */
                if (fixedAmount) {
                    if (innerRental) {
                        // eslint-disable-next-line eqeqeq
                        if (minAmount == 0 && maxAmount == 0) {
                            innerRental = rental
                        }
                    }
                }

                /* Min Amount */
                if (minAmount) {
                    if (innerRental) {
                        innerRental = minAmount <= rental.price ? rental : null
                    }
                }

                /* Max Amount */
                if (maxAmount) {
                    if (innerRental) {
                        innerRental = maxAmount >= rental.price ? rental : null
                    }
                }

                /* Bedrooms */
                if (bedrooms > 1) {
                    if (innerRental) {
                        // eslint-disable-next-line eqeqeq
                        innerRental = bedrooms == rental.bedrooms ? rental : null
                    }
                }

                /* Bedrooms */
                if (bathrooms > 1) {
                    if (innerRental) {
                        // eslint-disable-next-line eqeqeq
                        innerRental = bathrooms == rental.bathrooms ? rental : null
                    }
                }

            } else {
                innerRental = null;
            }
            return innerRental;

        })
    };

    useEffect(() => {
        const results = filterResults();
        setFilteredResults(results)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    return (
        <div className='results-items'>
            <h1 className='title'>{place}</h1>
            <h3>{filteredResults.length} résultats</h3>
            <div className={rentals}>
                {filteredResults.map(item => (
                    <Rental
                        key={item.id}
                        item={item}
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    rentals: selectRentalsForPreview,
    search: selectSearch
})

export default connect(mapStateToProps)(ResultsItems)
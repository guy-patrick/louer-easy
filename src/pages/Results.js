import ResultsFilter from '../components/results/filter/ResultsFilter'
import { ResultsItemsContainer } from '../container/ResultsItemsContainer'
import { ResultDetailContainer } from '../container/ResultDetailContainer'
import { connect } from 'react-redux'
import { fetchRentalsStart } from '../redux/results/results.actions'
import { useEffect } from "react"
import { Route } from "react-router-dom"

const Results = ({ fetchRentalsStart, match: { path } }) => {

    useEffect(() => {
        fetchRentalsStart()
    }, [fetchRentalsStart])

    return (
        <div className='results'>
            <ResultsFilter />
            <Route exact path={`${path}`} component={ResultsItemsContainer} />
            <Route exact path={`${path}/:rentalId`} component={ResultDetailContainer} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchRentalsStart: () => dispatch(fetchRentalsStart())
})

export default connect(null, mapDispatchToProps)(Results)
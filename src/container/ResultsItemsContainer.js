import ResultsItems from '../components/results/items/ResultsItems';
import { WithSpinner } from '../components/WithSpinner';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsRentalsFetching } from '../redux/results/results.selector';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsRentalsFetching,
})

export const ResultsItemsContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ResultsItems);


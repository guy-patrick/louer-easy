import ResultDetail from '../pages/ResultDetail';
import { WithSpinner } from '../components/WithSpinner';
import { compose } from 'redux'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectRentalsLoaded } from '../redux/results/results.selector';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !selectRentalsLoaded(state)
})

export const ResultDetailContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(ResultDetail);


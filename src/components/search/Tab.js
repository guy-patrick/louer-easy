import { connect } from 'react-redux';
import { toggleSellType } from '../../redux/search/search.actions'
import { selectSearchSellType } from '../../redux/search/search.selectors'
import { createStructuredSelector } from 'reselect';

const Tab = ({ name, sellType, toggleSellType }) => (
    <span
        className={`tab ${sellType === name ? 'tab-selected' : ''}`}
        onClick={() => toggleSellType(name)}
    >
        {name === 'rent' ? 'Louer' : 'Acheter'}
    </span>
)

const mapStateToProps = createStructuredSelector({
    sellType: selectSearchSellType
})

const mapDispatchToProps = dispatch => ({
    toggleSellType: type => dispatch(toggleSellType(type))
})

export default connect(mapStateToProps, mapDispatchToProps)(Tab)
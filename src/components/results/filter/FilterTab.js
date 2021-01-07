export const FilterTab = ({ title, filterType, state, toggleFilterState, medium, large }) => (
    <div
        className={`filter-tab ${medium ? 'medium' : ''} ${large ? 'large' : ''}`}
        onClick={() => toggleFilterState(state)}
    >
        <button className='styled-btn'>
            {filterType === 'listing' ? <span className='icon-for-sale'>{title}</span> : title}
        </button>
    </div>
)

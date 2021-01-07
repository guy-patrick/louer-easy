import { capitalizeFirstLetter } from '../../tools/utils'

export const SearchItem = ({ item, handleChoice, collection }) => (
    <div
        className='search-item'
        onClick={() => handleChoice(item)}>
        <label>
            <span className={`to-check ${collection[item] ? 'is-checked' : ''}`}></span>
            <span>{capitalizeFirstLetter(item)}</span>
        </label>
    </div>
)

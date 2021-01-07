import { useState } from 'react'

export const ToggleSearchDisplay = ({ handleDisplayAll }) => {

    const [plusDisplayed, setPlusDisplayed] = useState(true);

    return (
        <div
            className='search-item'
            onClick={() => {
                handleDisplayAll()
                plusDisplayed ?
                    setPlusDisplayed(false)
                    : setPlusDisplayed(true)
            }}
        >
            <label>
                {
                    plusDisplayed ?
                        <i className="fas fa-plus"></i>
                        : <i className="fas fa-chevron-up"></i>
                }

            </label>
        </div>
    )
}
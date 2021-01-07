import { Fragment } from 'react';
import RentalItem from './RentalItem'

export const BedsBaths = ({
    activeBedItems,
    activeBathItems,
    updateActiveBedItems,
    updateActiveBathItems }) => (
    <Fragment>
        <h2 className='filter-title'>CHAMBRES</h2>
        <div className='bed-filter-items'>
            <RentalItem
                title='any'
                active={activeBedItems === 'any' ? 'active' : ''}
                updateActiveBedItems={updateActiveBedItems}
                target='beds'
            />
            <RentalItem
                title='1+'
                active={activeBedItems === '1+' ? 'active' : ''}
                updateActiveBedItems={updateActiveBedItems}
                target='beds'
            />
            <RentalItem
                title='2+'
                active={activeBedItems === '2+' ? 'active' : ''}
                updateActiveBedItems={updateActiveBedItems}
                target='beds'
            />
            <RentalItem
                title='3+'
                active={activeBedItems === '3+' ? 'active' : ''}
                updateActiveBedItems={updateActiveBedItems}
                target='beds'
            />
            <RentalItem
                title='4+'
                active={activeBedItems === '4+' ? 'active' : ''}
                updateActiveBedItems={updateActiveBedItems}
                target='beds'
            />
            <RentalItem
                title='5+'
                active={activeBedItems === '5+' ? 'active' : ''}
                updateActiveBedItems={updateActiveBedItems}
                target='beds'
            />
        </div>

        <h2 className='filter-title'>DOUCHES</h2>
        <div className='bed-filter-items'>
            <RentalItem
                title='any'
                active={activeBathItems === 'any' ? 'active' : ''}
                updateActiveBathItems={updateActiveBathItems}
                target='baths'
            />
            <RentalItem
                title='1+'
                active={activeBathItems === '1+' ? 'active' : ''}
                updateActiveBathItems={updateActiveBathItems}
                target='baths'
            />
            <RentalItem
                title='2+'
                active={activeBathItems === '2+' ? 'active' : ''}
                updateActiveBathItems={updateActiveBathItems}
                target='baths'
            />
            <RentalItem
                title='3+'
                active={activeBathItems === '3+' ? 'active' : ''}
                updateActiveBathItems={updateActiveBathItems}
                target='baths'
            />
            <RentalItem
                title='4+'
                active={activeBathItems === '4+' ? 'active' : ''}
                updateActiveBathItems={updateActiveBathItems}
                target='baths'
            />
            <RentalItem
                title='5+'
                active={activeBathItems === '5+' ? 'active' : ''}
                updateActiveBathItems={updateActiveBathItems}
                target='baths'
            />
        </div>
    </Fragment>
)
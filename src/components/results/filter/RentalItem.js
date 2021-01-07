import { Fragment } from 'react'
import styled from 'styled-components'
import { capitalizeFirstLetter } from '../../../tools/utils'
import { connect } from 'react-redux'
import { setBedrooms, setBathrooms } from '../../../redux/search/search.actions'

const Item = styled.span`
        border: ${props => props.active ? '2px solid rgb(0, 106, 255)' : '1px solid rgb(167, 166, 171)'};
        border-right: ${props => props.active ? '1px solid rgb(0, 106, 255)' : 'none'};
        background: ${props => props.active ? 'rgb(242, 250, 255)' : '#fff'};
        padding: .5em 1.4em;
        cursor: pointer;
        font-size: 15px;
        :last-child {
            border-right: 1px solid rgb(167, 166, 171);
        }
        :hover {
            background: ${props => props.active ? 'rgb(242, 250, 255)' : 'rgb(241, 241, 244)'}
        }
    `;

const RentalItem = ({
    title,
    active,
    updateActiveBedItems,
    updateActiveBathItems,
    target,
    setBedrooms,
    setBathrooms }) => {

    const updateBedsBaths = () => {
        if (title === 'any') {
            target === 'beds' ?
                setBedrooms(1) :
                setBathrooms(1)
        } else {
            target === 'baths' ?
                setBathrooms(title[0]) :
                setBedrooms(title[0])
        }
    }

    return (
        <Fragment>
            <Item
                active={active}
                onClick={() => {
                    target === 'beds' ?
                        updateActiveBedItems(title) :
                        updateActiveBathItems(title)
                    updateBedsBaths()
                }}
            >
                {title === 'any' ? capitalizeFirstLetter(title) : title}
            </Item>
        </Fragment >
    )
}

const mapDispatchToProps = dispatch => ({
    setBedrooms: beds => dispatch(setBedrooms(beds)),
    setBathrooms: baths => dispatch(setBathrooms(baths)),
})

export default connect(null, mapDispatchToProps)(RentalItem)

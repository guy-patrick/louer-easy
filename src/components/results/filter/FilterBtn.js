import styled from 'styled-components'
import { Fragment } from "react";

const FilterButton = styled.span`
        background: ${props => props.bgColor};
        border: 1px solid ${props => props.bdColor};
        border-radius: 5px;
        color: ${props => props.color}; 
        padding: .3em .8em;
        font-weight: 600;
        cursor: pointer;
        
        :hover {
            background: ${props => props.bhColor};
            color: ${props => props.hColor};
        }
    `

export const FilterBtn = ({ title, color, bdColor, bgColor, bhColor, hColor, disableFilter }) => (
    <Fragment>
        <FilterButton
            color={color}
            bdColor={bdColor}
            bgColor={bgColor}
            bhColor={bhColor}
            hColor={hColor}
        >
            <span onClick={disableFilter}>
                {title}
            </span>
        </FilterButton>
    </Fragment>
)

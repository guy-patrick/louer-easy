import { FilterBtn } from "./FilterBtn";

export const ValidateChoiceBar = ({ disableFilter, handleMinMaxDone }) => {
    const wrapper = {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '.7em .9em',
        background: 'rgb(0, 106, 255)'
    }

    return (
        <div
            onClick={() => {
                disableFilter()
                if (handleMinMaxDone) {
                    handleMinMaxDone()
                }
            }}
            style={wrapper}>
            <FilterBtn
                title='Done'
                color='rgb(0,106,255)'
                bgColor='#fff'
                hColor='rgb(13, 69, 153)'
            />
        </div>
    )
}
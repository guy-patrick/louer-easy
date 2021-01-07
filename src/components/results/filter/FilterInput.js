import { Fragment, useState } from "react"

const FilterInput = ({ type, placeholder, target, minAmount, maxAmount, updateMinAmount, updateMaxAmount }) => {

    const [amount, setAmount] = useState(target === 'min' ? minAmount : maxAmount)

    const wrapper = {
        color: '#2A2A33',
        width: '40%',
        padding: '.5em .8em',
        backgroundColor: 'rgb(246, 246, 250)',
        border: '1px solid rgb(209, 209, 213)',
        borderRadius: '4px',
        fontSize: '.9em'
    }
    const handleAmoutChange = e => {
        const re = /^[0-9\b]+$/;
        const amount = e.currentTarget.value;

        if (amount === '' || re.test(amount)) {
            setAmount(amount)
            target === 'min' ?
                updateMinAmount(amount) :
                updateMaxAmount(amount)
        }
    }

    return (
        <Fragment>
            <input
                style={wrapper}
                value={amount}
                type={type}
                placeholder={placeholder}
                onChange={handleAmoutChange}
            />
        </Fragment>
    )
}

export default FilterInput
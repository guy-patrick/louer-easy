import React from 'react';

export const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <div className='spinner-overlay'>
            <div className='spinner-container' />
        </div>
    ) : (
            <WrappedComponent {...otherProps} />
        )
}
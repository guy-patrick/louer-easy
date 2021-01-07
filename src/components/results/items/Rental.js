import { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { storageRef } from '../../../firebase/firebase.utils'
import { withRouter } from 'react-router-dom'

const Rental = ({
    item: {
        id,
        available,
        bathrooms,
        bedrooms,
        description,
        furnished,
        featureImage,
        images,
        paymentMode,
        place,
        price,
        type,
        publishedDate
    },
    history,
    match: { path }
}) => {

    const [featured, setFeatured] = useState('')

    async function getImageUrl() {
        const url = await storageRef.child(`products_images/${featureImage}`).getDownloadURL();
        setFeatured(url)
    }

    getImageUrl()

    return (
        <div
            className='rental-item'
            onClick={() => history.push(`${path}/${id}`)}
        >
            <div className='rental-top'>
                <div className='rental-timer'>1 jour</div>
                <div className='rental-furnished'>{furnished ? 'Meublé' : ''}</div>
                <LazyLoadImage
                    className='rental-feature-img'
                    alt=''
                    effect="blur"
                    src={featured} />
            </div>
            <div className='rental-info'>
                <div className='info-heading'>
                    <div className='rental-price'>{price.toLocaleString('en')}<span> CFA / {paymentMode === 'daily' ? 'jour' : 'mois'}</span></div>
                    <ul className='details'>
                        <li>{bedrooms} <abbr>ch</abbr></li>
                        <li>{bathrooms} <abbr>dc</abbr></li>
                    </ul>
                </div>
                <div className='info-location'>{place}</div>
                <p className='info-description'>{description.slice(0, 120)} [...] </p>
                <div className='info-footer'>
                    <div className='rental-type'>
                        <span>{type === 'Apartment' ? 'Appartement' : type}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Rental)
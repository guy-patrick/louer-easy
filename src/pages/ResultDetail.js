import { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import { storageRef } from '../firebase/firebase.utils'
import { connect } from 'react-redux'
import { selectRental } from '../redux/results/results.selector'
import { ResultDetailProperyItem } from '../components/results/items/ResultDetailPropertyItem';

const ResultDetail = ({ rental }) => {

    const [featureImageUrl, setFeatureImageUrl] = useState('')
    const [imageUrls, setImageUrls] = useState([])
    const [photoIndex, setPhotoIndex] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const {
        airConditioner,
        area,
        bathrooms,
        bedrooms,
        camera,
        description,
        elevator,
        featureImage,
        fireSafety,
        floor,
        floors,
        furnished,
        images,
        intercom,
        maid,
        ownerPhoneNumber,
        parking,
        paymentMode,
        place,
        price,
        terracebalcony,
        type
    } = rental;

    async function fetchFeaturedUrl() {
        const url = await storageRef.child(`products_images/${featureImage}`).getDownloadURL();
        setFeatureImageUrl(url)
    }

    fetchFeaturedUrl()

    async function getImageUrl(image) {
        const url = await storageRef.child(`products_images/${image}`).getDownloadURL();
        return url
    }

    function fetchImagesUrls() {
        const urls = images.map(async image => getImageUrl(image))
        Promise.all(urls).then(data => setImageUrls(data))
    }

    return (
        <Fragment>
            <div className='result-detail-header'>
                <Link to='/results' className='sub-header'>
                    <div className='header-icon'>
                        <svg viewBox="0 0 512 512"><path d="M483.8 241.7L67.3 239l85.4-93.4c6.4-7 5.9-18-1.1-24.4-7-6.4-18-5.9-24.4 1.1l-111.7 122c-2.9 3.2-4.5 7.3-4.5 11.5 0 .2.1.3.1.5 0 2 .4 4 1.1 5.9.4.8.9 1.6 1.4 2.4.4 1 1 1.9 1.6 2.8l107.1 122.2c6.4 7.1 17.4 7.6 24.4 1.2 6.9-6.3 7.6-16.8 1.6-24l-81.7-93.2 416.9 2.8h.1c9.5 0 17.3-7.7 17.3-17.2.2-9.7-7.5-17.4-17.1-17.5z"></path></svg>
                    </div>
                    <p>Retour aux résultats</p>
                </Link>
            </div>
            <div className='result-detail-bloc'>
                <div className='result-data'>
                    <div className='result-featured-img'>
                        <img
                            className='featured-img'
                            src={featureImageUrl}
                            alt='image1'
                        />
                        <div className='black-overlay'></div>
                        <span
                            onClick={() => {
                                setIsOpen(true)
                                fetchImagesUrls()
                            }}
                            className='display-photos-btn'>
                            Parcourir les photos
                        </span>
                        {(isOpen && imageUrls.length !== 0) && (
                            <Lightbox
                                mainSrc={imageUrls[photoIndex]}
                                nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
                                prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
                                onCloseRequest={() => setIsOpen(false)}
                                onMovePrevRequest={() =>
                                    setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length,
                                    )
                                }
                                onMoveNextRequest={() =>
                                    setPhotoIndex((photoIndex + 1) % imageUrls.length,
                                    )
                                }
                            />
                        )}
                    </div>
                    <div className='result-info'>
                        <p className='result-info-type'>
                            <p className='type'>{type === 'Apartment' ? 'Appartement' : type}</p>
                            <p className='price'>{price} cfa <span>/ {paymentMode === 'daily' ? 'jour' : 'mois'}</span></p>
                        </p>
                        <p className='result-info-place'>{place}</p>
                        <div className='result-info-summary'>
                            <div className='tags-with-icon'>
                                <div className='current-icon fix-position'>
                                    <svg viewBox="0 0 512 512"><path d="M86 338.4v-35.8c0-37 30-67 67-67h206.5c37 0 67 30 67 67v35.8c18.9 1.5 33.9 17.4 33.9 36.7v97.4h-33.8v24.8c0 7.3-6 13.3-13.3 13.3s-13.3-6-13.3-13.3v-24.8H112.6v24.8c0 7.3-6 13.3-13.3 13.3-7.3 0-13.3-6-13.3-13.3v-24.8H52.1v-97.4c0-19.3 15-35.1 33.9-36.7zm347.7 99.7h-355v8h355v-8zm0-26.6v-36.3c0-5.6-4.7-10.2-10.2-10.2H88.9c-5.6 0-10.2 4.7-10.2 10.2v36.3h355zm-147.1-73.1h75.7v-19.6c0-6.1-3.3-10.2-5.9-10.2h-63.9c-2.5 0-5.9 4.1-5.9 10.2v19.6zm-60.8 0v-19.6c0-6.1-3.3-10.2-5.9-10.2H156c-2.5 0-5.9 4.1-5.9 10.2v19.6h75.7zm26.5 0h7.7v-19.6c0-19.7 13.9-36.8 32.4-36.8h63.9c18.5 0 32.4 17.1 32.4 36.8v19.6h11v-35.6c0-22.3-18.1-40.4-40.4-40.4H153c-22.3 0-40.4 18.1-40.4 40.4v35.6h11v-19.6c0-19.7 13.9-36.8 32.4-36.8h63.9c18.5 0 32.4 17.1 32.4 36.8v19.6z"></path></svg>
                                </div>
                                <div>{bedrooms} chambres</div>
                            </div>
                            <div className='tags-with-icon'>
                                <div className='current-icon'>
                                    <svg viewBox="0 0 512 512"><g><path d="M368.6 27.6H132.1c-1.1-.1-2.2-.2-3.2-.2-13.3 0-24.1 10.8-24.1 24.1v335.3c0 9.4 5.4 17.9 13.9 21.9l149.9 69.8c12.1 5.6 26.4.4 32-11.7 1.5-3.2 2.2-6.6 2.2-10.1v-38.4h65.8c19.9 0 36.1-16.2 36.1-36.1V63.7c.1-19.9-16.1-36.1-36.1-36.1zm-89.8 429l-149.9-69.9V51.5l149.9 75v330.1zM380.7 382c0 6.6-5.4 12-12 12h-65.8V126.4c0-9.1-5.1-17.5-13.3-21.5L183.2 51.7h185.5c6.6 0 12 5.4 12 12V382z"></path><path d="M255.4 311.9c6.6 0 12-5.4 12.1-12v-48.2c0-6.7-5.4-12-12-12s-12 5.4-12 12v48.2c-.2 6.6 5.2 12 11.9 12z"></path></g></svg>
                                </div>
                                <div>{bathrooms} douches</div>
                            </div>
                        </div>
                    </div>
                    <div className='result-about'>
                        <h2 className='description-title'>Description du bien</h2>
                        <p className='description'>{description}</p>
                    </div>
                    <div className='result-properties'>
                        <h2 className='properties-title'>Autres propriétés</h2>
                        <div className='properties-items'>
                            {airConditioner && <ResultDetailProperyItem
                                faviconClass='fas fa-fan'
                                text='Climatiseur'
                            />}
                            {fireSafety && <ResultDetailProperyItem
                                faviconClass='fas fa-fire-extinguisher'
                                text='Sécurité Incendie'
                            />}
                            {furnished && <ResultDetailProperyItem
                                faviconClass='fas fa-th-list'
                                text='Meublé'
                            />}
                            {intercom && <ResultDetailProperyItem
                                faviconClass='fab fa-intercom'
                                text='Interphone'
                            />}
                            {parking && <ResultDetailProperyItem
                                faviconClass='fas fa-parking'
                                text='Parking'
                            />}
                        </div>

                    </div>
                </div>
                <div className='result-contact-form'>
                    <div className='form-container'>
                        <p className='title'>Visiter la propriété ?</p>
                        <p>Entrez vos coordonnées et nous informerons le gestionnaire de location que vous souhaitez soumettre une demande. S'ils sont intéressés, ils vous contacteront pour les prochaines étapes.</p>
                        <form>
                            <label>Message</label>
                            <textarea></textarea>
                            <label>Nom</label>
                            <input type='text' />
                            <label>Numéro téléphone</label>
                            <input type='text' />
                            <label>Email</label>
                            <input type='text' />
                            <input className='submit' type='submit' value='Contacter le proprio' />
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = (state, ownProps) => ({
    rental: selectRental(ownProps.match.params.rentalId)(state)
});

export default connect(mapStateToProps)(ResultDetail)
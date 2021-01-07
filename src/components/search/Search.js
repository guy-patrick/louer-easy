import Tab from './Tab'
import SearchInput from './SearchInput'
import SearchChoices from './SearchChoices'
import AdsButton from '../AdsButton'
import { places } from '../../tools/utils'

export const Search = () => (

    <div className='search-bloc'>

        <div className='black-overlay'></div>

        <h1 className='search-title'>Quel est votre project ?</h1>

        <div className='search-wrapper'>

            <p className='search-tabs'>
                <Tab name='rent' />
                <Tab name='buy' />
            </p>

            <form className='search-form'>

                <div className='search-inputs'>
                    <SearchInput
                        placeholder='Dans quelle ville ? Quartier'
                        suggestions={places}
                    />
                    <SearchInput
                        placeholder='Votre budget max ?'
                    />
                </div>

                <div className='search-choices'>
                    <SearchChoices />
                    <a className='advanced-search-link' href="/" >Recherche avancée
                        </a>
                </div>

                <p className='ads-link'>
                    <a href="/">Propriétaire ? Déposer une annonce</a>
                </p>

                <div className='search-btn-wrapper'>
                    <AdsButton
                        title='Rechercher'
                        page='results'
                    />
                </div>

            </form>

        </div>
    </div>
)
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { searchReducer } from './search/search.reducer';
import { resultsReducer } from './results/results.reducer'
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['search']
}
const rootReducer = combineReducers({
    search: searchReducer,
    results: resultsReducer
});

export default persistReducer(persistConfig, rootReducer)
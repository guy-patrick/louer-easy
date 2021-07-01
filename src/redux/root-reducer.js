import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userReducer } from "./user/user.reducer";
import { searchReducer } from "./search/search.reducer";
import { resultsReducer } from "./results/results.reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};
const rootReducer = combineReducers({
  user: userReducer,
  search: searchReducer,
  results: resultsReducer,
});

export default persistReducer(persistConfig, rootReducer);

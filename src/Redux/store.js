import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { chickenReducer } from "./ChickenBucket/reducer";
import { homeReducer } from "./Home/reducer";
import { authReducer } from "./auth/reducer";

const rootReducer = combineReducers({
  homepageData: homeReducer,
  chickenBucketData: chickenReducer,
  authReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

import qualitiesReducer from "./qualities";
import professionReducer from './professions'

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    professions: professionReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}

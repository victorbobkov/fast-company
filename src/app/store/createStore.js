import qualitiesReducer from "./qualities";
import professionReducer from './professions'
import usersReducer from './users'

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
    qualities: qualitiesReducer,
    professions: professionReducer,
    users: usersReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
}

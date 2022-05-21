import { configureStore, combineReducers } from "@reduxjs/toolkit";




const reducers = {

};


const rootReducer = combineReducers({
    ...reducers,
});


export type RootState = ReturnType<typeof rootReducer>


const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    });

export default setupStore;
import  {loginReducer} from './feature/login/LoginSlice';
import  {combineReducers, configureStore} from '@reduxjs/toolkit';
import { themeReducer } from './feature/theme/ThemeSlice';


const rootReducer = combineReducers({
    loginReducer,
    themeReducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
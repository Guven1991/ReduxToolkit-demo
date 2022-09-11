import  {loginReducer} from './feature/login/LoginSlice';
import  {combineReducers, configureStore} from '@reduxjs/toolkit';
import { themeReducer } from './feature/theme/ThemeSlice';
import { todoReducer } from './feature/todo/TodoSlice';


const rootReducer = combineReducers({
    loginReducer,
    themeReducer,
    todoReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}
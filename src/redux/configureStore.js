import {createStore, combineReducers} from 'redux';
import { Carousels } from './carousels';
import { Products } from './products';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            carousels: Carousels,
            products: Products
            
        })
    );

    return store;
};
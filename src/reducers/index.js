import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const newCardReducer = (cards = [], action) => {
    if(action.type === 'NEW_CARD'){
        return [...cards, action.payload]
    } else {
        return cards
    }
}







export default combineReducers({
    cards: newCardReducer,
    form: formReducer
});
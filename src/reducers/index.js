import { combineReducers } from "redux";


const newCardReducer = (cards = [], action) => {
    if(action.type === 'NEW_CARD'){
        return [...cards, action.payload]
    } else {
        return cards
    }
}







export default combineReducers({
    cards: newCardReducer
})
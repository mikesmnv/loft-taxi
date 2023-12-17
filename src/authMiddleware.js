import { AUTHENTICATE, logIn, REGISTRATION, register, SAVECARD, card, GET_CARD } from "./actions";
import {serverLogIn, serverRegister, serverCard, getCard } from './api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const authToken = await serverLogIn(email, password);
    if(authToken){
      store.dispatch(logIn(authToken));
    }
  } else if (action.type === REGISTRATION) {
    const { email, password, name, surname } = action.payload;
    const success = await serverRegister(email, password, name, surname);
    if(success){
      store.dispatch(register());
    }
  } else if (action.type === SAVECARD) {
    const { cardNumber, expirDate, ownersName, cvcCode, token } = action.payload;
    const success = await serverCard(cardNumber, expirDate, ownersName, cvcCode, token);
    if(success){
      const id = await getCard(token);
      store.dispatch(card(id));
    } 
  } else if (action.type === GET_CARD) {
    const { token } = action.payload;
    const id = await getCard(token);
    console.log("Card id: " + id);
    if (id)
      store.dispatch(card(id));
    } 
  else {
    next(action);
  }
};

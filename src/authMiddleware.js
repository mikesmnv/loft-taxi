import { AUTHENTICATE, logIn, REGISTRATION, register, SAVECARD, card } from "./actions";
import {serverLogIn, serverRegister, serverCard } from './api'

export const authMiddleware = (store) => (next) => async (action) => {
  if (action.type === AUTHENTICATE) {
    const {email, password} = action.payload;
    const success = await serverLogIn(email, password)
    if(success){
      store.dispatch(logIn())
    }
  } else if (action.type === REGISTRATION) {
    const {email, password, name, surname } = action.payload;
    const success = await serverRegister(email, password, name, surname);
    if(success){
      store.dispatch(register())
    }
  } else if (action.type === SAVECARD) {
    const { cardNumber, expirDate, ownersName, cvcCode } = action.payload;
    const success = await serverCard(cardNumber, expirDate, ownersName, cvcCode);
    if(success){
      store.dispatch(card())
    } 
  }
  else {
    next(action);
  }
};

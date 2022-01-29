export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTRATION = "REGISTRATION";
export const REGISTER = "REGISTER";
export const CARD = "CARD";
export const SAVECARD = "SAVECARD";

export const logIn = () => ({ type: LOG_IN });

export const logOut = () => ({ type: LOG_OUT });

export const authenticate = (email, password) => ({
  type: AUTHENTICATE,
  payload: { email, password },
});

export const register = () => ({ type: REGISTER });

export const registration = (email, password, name, surname) => ({
  type: REGISTRATION,
  payload: { email, password, name, surname },
});

export const card = () => ({ type: CARD });

export const saveCard = (cardNumber, expirDate, ownersName, cvcCode) => ({
  type: SAVECARD,
  payload: { cardNumber, expirDate, ownersName, cvcCode },
});
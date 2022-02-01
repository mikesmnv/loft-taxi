export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTRATION = "REGISTRATION";
export const REGISTER = "REGISTER";
export const CARD = "CARD";
export const SAVECARD = "SAVECARD";
export const GET_ADDRESS_LIST = "GET_ADDRESS_LIST";
export const ADDRESS_LIST = "ADDRESS_LIST";
export const ROUTE = "ROUTE";
export const GET_ROUTE = "GETG_ROUTE";

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

export const getAddressList = ( addresses ) => ({
  type: GET_ADDRESS_LIST,
  payload: addresses
})

export const addressList = () => ({ type: ADDRESS_LIST });

export const routeTo = (address1, address2) => ({ type: ROUTE, payload: {address1, address2}});

export const getRoute = ( route ) => ({
  type: GET_ROUTE,
  payload: route
})
export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";
export const AUTHENTICATE = "AUTHENTICATE";
export const REGISTRATION = "REGISTRATION";
export const REGISTER = "REGISTER";
export const CARD = "CARD";
export const SAVECARD = "SAVECARD";
export const GET_CARD = "GET_CARD";
export const GET_ADDRESS_LIST = "GET_ADDRESS_LIST";
export const ADDRESS_LIST = "ADDRESS_LIST";
export const ROUTE = "ROUTE";
export const GET_ROUTE = "GET_ROUTE";

export const logIn = (authToken) => ({ type: LOG_IN, payload: authToken });

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

export const card = (id) => ({ type: CARD, payload: id });

export const saveCard = (cardNumber, expirDate, ownersName, cvcCode, token) => ({
  type: SAVECARD,
  payload: { cardNumber, expirDate, ownersName, cvcCode, token },
});

export const getCard = (token) => ({
  type: GET_CARD,
  payload: token,
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
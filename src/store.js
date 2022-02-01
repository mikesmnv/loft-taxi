import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { authMiddleware } from "./authMiddleware";
import createSagaMiddleware from "redux-saga";
import { addressListSaga } from "./addressListSaga";
import { routeSaga } from "./routeSaga";

const addressListSagaMiddleware = createSagaMiddleware();
const routeSagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, addressListSagaMiddleware, routeSagaMiddleware));

addressListSagaMiddleware.run(addressListSaga);
routeSagaMiddleware.run(routeSaga);
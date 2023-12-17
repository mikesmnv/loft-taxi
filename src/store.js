import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import { authMiddleware } from "./authMiddleware";
import createSagaMiddleware from "redux-saga";
import { addressListSaga } from "./addressListSaga";
import { routeSaga } from "./routeSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, sagaMiddleware));

sagaMiddleware.run(addressListSaga);
sagaMiddleware.run(routeSaga);
import { takeEvery, call, put } from "redux-saga/effects";
import  { getServerRoute } from "./api";

import { getRoute, ROUTE } from "./actions";

export function* getRouteSaga(action) {
    const {address1, address2} = action.payload;
    const route = yield call(getServerRoute,address1,address2);
    yield put(getRoute(route));

}

export function* routeSaga() {
    yield takeEvery(ROUTE, getRouteSaga);
}
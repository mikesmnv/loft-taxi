import { takeEvery, call, put } from "redux-saga/effects";
import  { getServerRoute } from "./api";

import { getRoute, ROUTE } from "./actions";

export function* getRouteSaga(action) {
    const {address1, address2} = action.payload;
    console.log("***")
    console.log(address1);
    console.log(address2);
    const route = yield call(getServerRoute,address1,address2);
    console.log(route);
    yield put(getRoute(route));

}

export function* routeSaga() {
    yield takeEvery(ROUTE, getRouteSaga);
}